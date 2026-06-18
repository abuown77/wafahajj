import type { PostRow, MediaType, GraphResult } from "./types";

export interface GraphCtx { apiVersion: string; pageId: string; token: string; }

export function buildPublishUrl(ctx: GraphCtx, type: MediaType): string {
  const edge = type === "video" ? "videos" : type === "image" ? "photos" : "feed";
  return `https://graph.facebook.com/${ctx.apiVersion}/${ctx.pageId}/${edge}`;
}

export function buildPublishBody(row: PostRow, token: string): URLSearchParams {
  const b = new URLSearchParams();
  if (row.media_type === "video") {
    b.set("file_url", row.media_url);
    b.set("description", row.caption);
  } else if (row.media_type === "image") {
    b.set("url", row.media_url);
    b.set("caption", row.caption);
  } else {
    b.set("message", row.caption);
  }
  b.set("access_token", token);
  return b;
}

export async function publishPost(ctx: GraphCtx, row: PostRow, fetchFn: typeof fetch = fetch): Promise<GraphResult> {
  const url = buildPublishUrl(ctx, row.media_type);
  const body = buildPublishBody(row, ctx.token);
  const resp = await fetchFn(url, { method: "POST", body });
  const data: any = await resp.json().catch(() => ({}));
  if (resp.ok && data?.id) return { ok: true, postId: String(data.id), error: null };
  const msg = data?.error?.message ?? `HTTP ${resp.status}`;
  return { ok: false, postId: null, error: msg };
}

// Returns whole days until token expiry, or null if it does not expire.
export async function tokenDaysLeft(ctx: GraphCtx, fetchFn: typeof fetch = fetch, now: () => number = Date.now): Promise<number | null> {
  const url = `https://graph.facebook.com/${ctx.apiVersion}/debug_token?input_token=${ctx.token}&access_token=${ctx.token}`;
  const resp = await fetchFn(url);
  const data: any = await resp.json().catch(() => ({}));
  const expiresAt = data?.data?.expires_at;
  if (!expiresAt || expiresAt === 0) return null;
  return Math.round((expiresAt * 1000 - now()) / 86400000);
}
