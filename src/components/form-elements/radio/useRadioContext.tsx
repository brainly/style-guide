import * as React from 'react';
import type {RadioColorType} from './Radio';

type RadioContextType = {
  color?: RadioColorType;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  selectedValue: string | null | undefined;
  setSelectedValue: (
    arg0: React.SyntheticEvent<HTMLInputElement>,
    arg1: string | null | undefined
  ) => void;
  lastFocusedValue: string | null | undefined;
  setLastFocusedValue: (arg0: string | null | undefined) => void;
};
export const RadioContext = React.createContext<RadioContextType>(
  {} as RadioContextType
);

const useRadioContext = (): RadioContextType => {
  return React.useContext(RadioContext);
};

export default useRadioContext;
