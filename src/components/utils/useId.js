// @flow strict

import * as React from 'react';

import {useIsomorphicLayoutEffect as useLayoutEffect} from './useIsomorphicLayoutEffect';
import generateId from './generateId';

let serverHandoffComplete = false;

/**
 * useId
 *
 * inspired by https://github.com/reach/reach-ui/blob/dev/packages/auto-id/src/reach-auto-id.ts
 *
 * Generates unique IDs while avoiding hydration mismatches
 *
 * Note: The returned ID will initially be `null` and will update after a component mounts.
 */
export function useId() {
  const initialId = serverHandoffComplete ? generateId() : null;
  const [id, setId] = React.useState(initialId);

  useLayoutEffect(() => {
    if (id === null) {
      setId(generateId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);

  return id ?? undefined;
}
