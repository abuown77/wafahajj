import type { Env } from "./types";
import { pickDuePost, markPublished, markFailed } from "./queue";
import { publishPost, tokenDaysLeft, type GraphCtx } from "./graph";
import { sendAlert } from "./alert";

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export default {
  async scheduled(_event: ScheduledController, env: Env, _ctx: ExecutionContext): Promise<void> {
    const ctx: GraphCtx = { apiVersion: env.FB_API_VERSION, pageId: env.FB_PAGE_ID, token: env.FB_PAGE_TOKEN };

    // 1) Token-expiry guard (alert once when <= 7 days left).
    try {
      const days = await tokenDaysLeft(ctx);
      if (days !== null && days <= 7) {
        await sendAlert(env, `Facebook key expires in ${days} day(s)`,
          `Renew the Facebook Page token within ${days} day(s) or daily posting will stop.`);
      }
    } catch { /* non-fatal: never block publishing on the check */ }

    // 2) Publish today's due post.
    const row = await pickDuePost(env.DB, todayUTC());
    if (!row) return; // nothing approved/due

    const result = await publishPost(ctx, row);
    if (result.ok && result.postId) {
      await markPublished(env.DB, row.id, result.postId);
    } else {
      await markFailed(env.DB, row.id, result.error ?? "unknown error");
      await sendAlert(env, "Facebook auto-post FAILED",
        `Post #${row.id} (${row.scheduled_date}) failed: ${result.error}\nIt stays queued-as-failed; fix and re-queue.`);
    }
  },
};
