import { expect, test } from "bun:test";
import { findSafestPath } from "../src/findpath";

test("find the min sum path", () => {
  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ];

  const bestPath = findSafestPath(dream);
  const expected = 7;

  expect(bestPath).toBe(expected);
});
