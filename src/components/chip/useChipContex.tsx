import * as React from 'react';

type ChipContextType = {
  disabled?: boolean;
  multiSelect?: boolean;
  name: string;
  value: string | null | undefined | Array<string>;
};

export const ChipContext = React.createContext<ChipContextType>(
  {} as ChipContextType
);

const useChipContext = (): ChipContextType => {
  return React.useContext(ChipContext);
};

export default useChipContext;
