//@flow strict

import React, {useContext} from 'react';

type RadioContextType = {
  name?: string,
  state: {
    selectedValue: string | null,
    setSelectedValue: string => void,
  },
  ...
};

export const RadioContext = React.createContext<RadioContextType>({});

export const useRadioProvider = () => {
  return useContext(RadioContext);
};
