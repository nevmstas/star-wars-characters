import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const base = mode === "development" ? undefined : "/star-wars-characters";
  return {
    plugins: [react()],
    base,
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./setupTests.ts",
    },
  };
});
