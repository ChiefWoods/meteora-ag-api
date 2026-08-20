import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["dist/**", "generated/**", "node_modules/**"],
  categories: {
    correctness: "error",
    suspicious: "error",
  },
  plugins: ["import"],
});
