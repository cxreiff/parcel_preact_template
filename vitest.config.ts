/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import preact from "@preact/preset-vite";

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [
    preact(),
  ],
  test: {
    environment: "happy-dom",
    // setupFiles: ["./vitest.setup.ts"],
    includeSource: ["src/**/*.{ts,tsx}"],
    coverage: {
      reporter: ["text-summary", "text"],
    },
    mockReset: true,
    restoreMocks: true,
  },
});

