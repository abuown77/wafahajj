import { EmailMessage } from "cloudflare:email";
import type { Env } from "./types";

export function buildAlertMime(to: string, subject: string, body: string): string {
  return [
    `From: Wafa Hajj Publisher <info@wafahajj.com>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    body,
  ].join("\r\n");
}

export async function sendAlert(env: Env, subject: string, body: string): Promise<void> {
  const to = "info@wafahajj.com";
  const raw = buildAlertMime(to, subject, body);
  const msg = new EmailMessage("info@wafahajj.com", to, raw);
  await env.ALERT_EMAIL.send(msg);
}
