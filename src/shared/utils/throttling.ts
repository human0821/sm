// eslint-disable-next-line space-before-function-paren
export function throttle<T extends (...args: any[]) => any>(
  this: void,
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let lastFunc: number | undefined;
  let lastRan: number | undefined;
  return function (this: void, ...args: Parameters<T>) {
    // eslint-disable-next-line no-negated-condition
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(
        () => {
          if (Date.now() - (lastRan as number) >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - (lastRan as number)),
      );
    }
  };
}
