import { describe, it, expect } from "vitest";
import { pickDuePost, markPublished, markFailed } from "../src/queue";
import type { PostRow } from "../src/types";

function fakeDB(rows: PostRow[]) {
  const updates: any[] = [];
  return {
    rows, updates,
    prepare(sql: string) {
      return {
        _sql: sql, _args: [] as any[],
        bind(...args: any[]) { this._args = args; return this; },
        async first() {
          // emulate: oldest queued with scheduled_date <= today
          const today = this._args[0];
          const due = rows
            .filter(r => r.status === "queued" && r.scheduled_date <= today)
            .sort((a, b) => a.scheduled_date.localeCompare(b.scheduled_date) || a.id - b.id);
          return due[0] ?? null;
        },
        async run() { updates.push({ sql: this._sql, args: this._args }); return { success: true }; },
      };
    },
  } as unknown as D1Database & { updates: any[] };
}

describe("pickDuePost", () => {
  it("returns the oldest due queued post", async () => {
    const db = fakeDB([
      { id: 2, scheduled_date: "2026-06-20", caption: "b", media_url: "", media_type: "text", status: "queued", fb_post_id: null, error: null },
      { id: 1, scheduled_date: "2026-06-19", caption: "a", media_url: "", media_type: "text", status: "queued", fb_post_id: null, error: null },
    ]);
    const row = await pickDuePost(db, "2026-06-19");
    expect(row?.id).toBe(1);
  });

  it("returns null when nothing is due today", async () => {
    const db = fakeDB([
      { id: 1, scheduled_date: "2026-06-25", caption: "a", media_url: "", media_type: "text", status: "queued", fb_post_id: null, error: null },
    ]);
    expect(await pickDuePost(db, "2026-06-19")).toBeNull();
  });
});

describe("status transitions", () => {
  it("markPublished writes published + fb_post_id", async () => {
    const db = fakeDB([]);
    await markPublished(db as any, 5, "100_200");
    expect((db as any).updates[0].args).toEqual(["100_200", 5]);
  });
  it("markFailed writes failed + error", async () => {
    const db = fakeDB([]);
    await markFailed(db as any, 5, "boom");
    expect((db as any).updates[0].args).toEqual(["boom", 5]);
  });
});
