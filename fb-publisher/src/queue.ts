import type { PostRow } from "./types";

export async function pickDuePost(db: D1Database, today: string): Promise<PostRow | null> {
  const row = await db
    .prepare(
      "SELECT * FROM posts WHERE status='queued' AND scheduled_date <= ?1 ORDER BY scheduled_date ASC, id ASC LIMIT 1"
    )
    .bind(today)
    .first<PostRow>();
  return row ?? null;
}

export async function markPublished(db: D1Database, id: number, fbPostId: string): Promise<void> {
  await db.prepare("UPDATE posts SET status='published', fb_post_id=?1, error=NULL WHERE id=?2")
    .bind(fbPostId, id).run();
}

export async function markFailed(db: D1Database, id: number, error: string): Promise<void> {
  await db.prepare("UPDATE posts SET status='failed', error=?1 WHERE id=?2")
    .bind(error, id).run();
}
