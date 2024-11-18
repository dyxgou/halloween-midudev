export function battleHorde(
  zombies: string,
  humans: string,
): `${number}h` | `${number}z` | "x" {
  let points: number = 0;

  for (let i = 0; i < zombies.length; i++) {
    const zombieStats = parseInt(zombies[i]);
    const humanStats = parseInt(humans[i]);

    points += humanStats - zombieStats;
  }

  if (points > 0) {
    return `${points}h`;
  } else if (points === 0) {
    return "x";
  } else {
    return `${Math.abs(points)}z`;
  }
}
