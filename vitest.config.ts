import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    fileParallelism: false,
    sequence: { shuffle: false },
    testTimeout: 600000,
    hookTimeout: 300000,
    reporters: ["verbose"],
    pool: "forks",
    poolOptions: { forks: { singleFork: true } },
    include: ["tests/**/*.test.ts"],
  },
});
