import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  test: {
    environment: "node",
    alias: {
      "cloudflare:email": fileURLToPath(new URL("./test/stubs/cloudflare-email.ts", import.meta.url)),
    },
  },
});
