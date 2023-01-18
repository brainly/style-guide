//@flow strict

import * as React from 'react';
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
  isPristine?: boolean,
  ...
};

export const RadioContext = React.createContext<RadioContextType>({});

const useRadioContext = (): RadioContextType => {
  return React.useContext(RadioContext);
};

export default useRadioContext;
