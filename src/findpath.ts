export function findSafestPath(dream: number[][]): number {
  const n = dream.length;
  const m = dream[0].length;

  const getMinPath = (up: number, left: number): number => {
    const NO_PATH = -1;
    if (up === NO_PATH) {
      return left;
    } else if (left === NO_PATH) {
      return up;
    }

    if (up > left) {
      return left;
    } else if (left > up) {
      return up;
    }

    return up;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        continue;
      }

      let upPath = -1;
      let leftPath = -1;

      if (i !== 0) {
        upPath = dream[i][j] + dream[i - 1][j];
      }
      if (j !== 0) {
        leftPath = dream[i][j] + dream[i][j - 1];
      }

      dream[i][j] = getMinPath(upPath, leftPath);
    }
  }

  return dream[n - 1][m - 1];
}
