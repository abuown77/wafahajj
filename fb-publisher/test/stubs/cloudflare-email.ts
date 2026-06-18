// Test-only stub for the Workers-runtime virtual module `cloudflare:email`.
// Vitest (node) can't resolve the real module; runtime behavior is unchanged.
export class EmailMessage {
  constructor(public from: string, public to: string, public raw: string) {}
}
