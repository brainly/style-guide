//@flow strict

import React, {useContext} from 'react';

type RadioContextType = {
  name?: string,
  state: RadioGroupState,
  ...
};

export const RadioContext = React.createContext<RadioContextType>({});

export const useRadioProvider = () => {
  return useContext(RadioContext);
};
