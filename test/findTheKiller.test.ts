import { expect, test } from "bun:test";
import { findTheKiller } from "../src/findTheKiller";

let killer = "";

test("Find the killer", () => {
  const whisper = "d~~~~~a";
  const suspects = [
    "Dracula",
    "Freddy Krueger",
    "Jason Voorhees",
    "Michael Myers",
  ];

  killer = findTheKiller(whisper, suspects); // -> 'Dracula'
  expect(killer).toBe("Dracula");
});

test("find the killer 2", () => {
  const whisper2 = "~r~dd~";
  const suspects2 = ["Freddy", "Freddier", "Fredderic"];

  killer = findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

  expect(killer).toBe("Freddy,Freddier,Fredderic");
});

test("find the killer 3", () => {
  const whisper3 = "~r~dd$";
  const suspects3 = ["Freddy", "Freddier", "Fredderic"];

  killer = findTheKiller(whisper3, suspects3); // -> ''

  expect(killer).toBe("");
});

test("find the killer 4", () => {
  const whisper4 = "mi~~def";
  const suspects4 = ["Midudev", "Midu", "Madeval"];

  killer = findTheKiller(whisper4, suspects4); // -> ''

  expect(killer).toBe("");
});

test("find the killer 5", () => {
  killer = findTheKiller("~~~~~~$", ["Pennywise", "Leatherface", "Agatha"]);

  expect(killer).toBe("Agatha");
});
