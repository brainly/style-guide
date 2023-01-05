// @flow strict

import {useRef} from 'react';

const useIsFirstRender = () => {
  const isFirstRender = useRef(true);

  if (isFirstRender.current === true) {
    isFirstRender.current = false;
    return true;
  }

  return isFirstRender.current;
};

export default useIsFirstRender;
