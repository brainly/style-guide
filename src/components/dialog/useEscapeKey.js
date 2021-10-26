// @flow strict

import * as React from 'react';

export function useEscapeKey(callback?: () => void) {
  React.useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (callback && event.key === 'Escape') callback();
    }

    document.addEventListener('keyup', handleEscapeKey);

    return () => {
      document.removeEventListener('keyup', handleEscapeKey);
    };
  }, [callback]);
}
