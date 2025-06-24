export const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const stringify = (obj: unknown): string => JSON.stringify(obj, null, 2);
