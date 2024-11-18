import { expect, test } from "bun:test";
import { createMagicPotion } from "../src/which";

test("it retuns the expected potions positions", () => {
  const expected: [number, number] = [2, 3];
  const potions: number[] = [4, 5, 6, 2];
  const goal = 8;

  const positions = createMagicPotion(potions, goal);

  expect(positions).toBeArrayOfSize(2);

  expect(positions).not.toBeUndefined();

  if (!positions) return;

  for (let i = 0; i < positions.length; i++) {
    expect(positions[i]).toBe(expected[i]);
  }
});

test("it retuns undefined if the goal is not reacheable", () => {
  const potions: number[] = [1, 2, 3, 4];
  const goal = 9;

  const positions = createMagicPotion(potions, goal);

  expect(positions).toBeUndefined();
});
