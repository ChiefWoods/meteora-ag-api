export default {
  "**/*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}": ["bun run format", "bun run lint"],
  "**/*.md": "bun run format",
  "**/*.rs": "just fmt",
};
