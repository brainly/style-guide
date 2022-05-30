//@flow strict

import React, {useContext} from 'react';

type RadioContextType = {
  name?: string,
  disabled?: Boolean,
  selectedValue: string | null,
  setSelectedValue: string => void,
  lastFocusedValue: string | null,
  setLastFocusedValue: string => void,
  ...
};

export const RadioContext = React.createContext<RadioContextType>({});

export const useRadioContext = () => {
  return useContext(RadioContext);
};
