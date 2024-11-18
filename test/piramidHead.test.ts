import { test } from "bun:test";

test("piramid head 1", () => {
  const room = [
    [".", ".", "#", ".", "▲"],
    ["#", ".", "#", ".", "#"],
    [".", ".", ".", ".", "."],
    ["#", "#", "#", ".", "#"],
    ["T", ".", ".", ".", "."],
  ];

  escapePyramidHead(room); // -> 8

  const room2 = [
    ["T", ".", "#", "."],
    [".", ".", ".", "."],
    ["▲", ".", ".", "#"],
    [".", "#", "#", "#"],
  ];

  escapePyramidHead(room2); // -> 2

  const room3 = [
    ["#", "#", "#"],
    ["▲", ".", "#"],
    [".", "#", "T"],
  ];

  escapePyramidHead(room3); // -> null
});
