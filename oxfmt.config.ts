import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: [
    "dist/**",
    "generated/**",
    "node_modules/**",
    "openapi/**",
    "README.md",
    "PLAN.md",
    "swagger.yaml",
  ],
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
});
