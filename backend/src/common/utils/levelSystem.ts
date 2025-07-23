export const levelSystem = (xp: number) => {
  let level = 1;
  let xpLevel = 500;
  let currXp = 0;

  while (xp >= xpLevel) {
    currXp = xpLevel;
    level++;
    xpLevel += 500 * level;
  }

  const progress =
    currXp !== xpLevel ? ((xp - currXp) / (xpLevel - currXp)) * 100 : 100;

  return { level, progress };
};
