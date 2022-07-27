//@flow strict

import React, {useContext} from 'react';
import type {RadioColorType} from './Radio';

type RadioContextType = {
  color?: RadioColorType,
  disabled?: boolean,
  invalid?: boolean,
  name?: string,
  selectedValue: ?string,
  setSelectedValue: (SyntheticInputEvent<HTMLInputElement>, ?string) => void,
  lastFocusedValue: ?string,
  setLastFocusedValue: (?string) => void,
  ...
};

export const RadioContext = React.createContext<RadioContextType>({});

export const useRadioContext = () => {
  return useContext(RadioContext);
};
