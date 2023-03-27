import * as React from 'react';

type ChipContextType = {
  disabled?: boolean;
  multiSelect?: boolean;
  name: string;
  groupValue: string | null | undefined | Array<string>;
  onChipChange: (
    event: React.SyntheticEvent<HTMLInputElement>,
    chipValue: string | null | undefined
  ) => void;
};

export const ChipContext = React.createContext<ChipContextType>(
  {} as ChipContextType
);

const useChipContext = (): ChipContextType => {
  return React.useContext(ChipContext);
};

export default useChipContext;
