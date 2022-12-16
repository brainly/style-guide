// @flow strict

import * as React from 'react';

import {useIsomorphicLayoutEffect as useLayoutEffect} from './useIsomorphicLayoutEffect';
import generateId from './generateId';

let serverHandoffComplete = false;

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
