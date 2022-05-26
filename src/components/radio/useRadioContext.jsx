//@flow strict

import React, {useContext} from 'react';

type RadioContextType = {
  name?: string,
  disabled?: Boolean,
  state: {
    selectedValue: string | null,
    setSelectedValue: string => void,
  },
  ...
};

export const RadioContext = React.createContext<RadioContextType>({});

export const useRadioContext = () => {
  return useContext(RadioContext);
};
