export function createMagicPotion(
  potions: number[],
  target: number,
): [number, number] | undefined {
  if (potions.length === 0) return undefined;

  const reminderMap = new Map<number, number>();

  for (let i = 0; i < potions.length; i++) {
    const currentPotion = potions[i];

    const neededPotion = target - currentPotion;

    if (reminderMap.has(currentPotion)) {
      return [reminderMap.get(currentPotion)!, i];
    }

    reminderMap.set(neededPotion, i);
  }

  return undefined;
}
