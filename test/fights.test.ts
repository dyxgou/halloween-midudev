import { expect, test } from "bun:test";
import { battleHorde } from "../src/fights";

test("the fight ends up winning the humans", () => {
  const zombies = "242";
  const humans = "334";

  const result = battleHorde(zombies, humans); // -> "2h"
  const expectedResult = "2h";

  expect(result).toBe(expectedResult);
});

test("the fight ends up winning the zombies", () => {
  const zombies = "444";
  const humans = "333";

  const result = battleHorde(zombies, humans); // -> "2h"
  const expectedResult = "3z";

  expect(result).toBe(expectedResult);
});

test("the fight ends up in a tie", () => {
  const zombies = "555";
  const humans = "555";

  const result = battleHorde(zombies, humans); // -> "2h"
  const expectedResult = "x";

  expect(result).toBe(expectedResult);
});
