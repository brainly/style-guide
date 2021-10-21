// @flow strict

import * as React from 'react';

export function useEscapeKey(callback?: () => void) {
  React.useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (callback && event.key === 'Escape') callback();
    }

    window.addEventListener('keyup', handleEscapeKey);

    return () => {
      window.removeEventListener('keyup', handleEscapeKey);
    };
  }, [callback]);
}
