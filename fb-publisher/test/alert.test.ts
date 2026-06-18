import { describe, it, expect } from "vitest";
import { buildAlertMime } from "../src/alert";

describe("buildAlertMime", () => {
  it("produces a raw email with subject + body to info@", () => {
    const raw = buildAlertMime("info@wafahajj.com", "Publish failed", "Reason: bad token");
    expect(raw).toContain("To: info@wafahajj.com");
    expect(raw).toContain("Subject: Publish failed");
    expect(raw).toContain("Reason: bad token");
  });
});
