export type MediaType = "video" | "image" | "text";
export type Status = "queued" | "published" | "failed";

export interface PostRow {
  id: number;
  scheduled_date: string; // YYYY-MM-DD
  caption: string;
  media_url: string;       // R2 public URL, "" for text
  media_type: MediaType;
  status: Status;
  fb_post_id: string | null;
  error: string | null;
}

export interface Env {
  DB: D1Database;
  MEDIA: R2Bucket;
  ALERT_EMAIL: SendEmail;       // Cloudflare email send binding
  FB_API_VERSION: string;       // e.g. "v21.0"
  FB_PAGE_ID: string;           // var
  FB_PAGE_TOKEN: string;        // secret
}

export interface GraphResult {
  ok: boolean;
  postId: string | null;
  error: string | null;
}
