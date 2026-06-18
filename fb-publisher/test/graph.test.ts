import { describe, it, expect, vi } from "vitest";
import { buildPublishUrl, buildPublishBody, publishPost, tokenDaysLeft } from "../src/graph";
import type { PostRow } from "../src/types";

const base = { apiVersion: "v21.0", pageId: "111", token: "T" };

describe("buildPublishUrl", () => {
  it("video → /videos", () => {
    expect(buildPublishUrl(base, "video")).toBe("https://graph.facebook.com/v21.0/111/videos");
  });
  it("image → /photos", () => {
    expect(buildPublishUrl(base, "image")).toBe("https://graph.facebook.com/v21.0/111/photos");
  });
  it("text → /feed", () => {
    expect(buildPublishUrl(base, "text")).toBe("https://graph.facebook.com/v21.0/111/feed");
  });
});

describe("buildPublishBody", () => {
  const row = (m: any, url = "https://r2/x.mp4"): PostRow =>
    ({ id: 1, scheduled_date: "2026-06-19", caption: "hi", media_url: url, media_type: m, status: "queued", fb_post_id: null, error: null });
  it("video uses file_url + description", () => {
    const b = buildPublishBody(row("video"), "T");
    expect(b.get("file_url")).toBe("https://r2/x.mp4");
    expect(b.get("description")).toBe("hi");
    expect(b.get("access_token")).toBe("T");
  });
  it("image uses url + caption", () => {
    const b = buildPublishBody(row("image", "https://r2/x.jpg"), "T");
    expect(b.get("url")).toBe("https://r2/x.jpg");
    expect(b.get("caption")).toBe("hi");
  });
  it("text uses message", () => {
    const b = buildPublishBody(row("text", ""), "T");
    expect(b.get("message")).toBe("hi");
  });
});

describe("publishPost", () => {
  it("returns ok + postId on success", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: "111_999" }), { status: 200 }));
    const row: PostRow = { id: 1, scheduled_date: "2026-06-19", caption: "hi", media_url: "https://r2/x.mp4", media_type: "video", status: "queued", fb_post_id: null, error: null };
    const res = await publishPost(base, row, fetchMock as any);
    expect(res.ok).toBe(true);
    expect(res.postId).toBe("111_999");
  });
  it("returns error on Graph error payload", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: { message: "Invalid token" } }), { status: 400 }));
    const row: PostRow = { id: 1, scheduled_date: "2026-06-19", caption: "hi", media_url: "https://r2/x.mp4", media_type: "video", status: "queued", fb_post_id: null, error: null };
    const res = await publishPost(base, row, fetchMock as any);
    expect(res.ok).toBe(false);
    expect(res.error).toContain("Invalid token");
  });
});

describe("tokenDaysLeft", () => {
  it("computes days from data_access_expires_at", async () => {
    const future = Math.floor(Date.now() / 1000) + 5 * 86400;
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ data: { expires_at: future } }), { status: 200 }));
    const days = await tokenDaysLeft(base, fetchMock as any, () => Date.now());
    expect(days).toBe(5);
  });
  it("returns null when token never expires (0)", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ data: { expires_at: 0 } }), { status: 200 }));
    expect(await tokenDaysLeft(base, fetchMock as any, () => Date.now())).toBeNull();
  });
});
