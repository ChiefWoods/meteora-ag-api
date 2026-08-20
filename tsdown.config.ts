import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["clients/ts/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
});
