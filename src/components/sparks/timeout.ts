import * as React from 'react';

export function useTimeout(callback: () => void, delay: number | null) {
  const timeoutRef = React.useRef<number | undefined>(undefined);
  const savedCallback = React.useRef(callback);
  const [update, restart] = React.useReducer(x => x + 1, 0);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay, update]);

  return restart;
}
