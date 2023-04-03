import * as React from 'react';
import {
  SelectMenuSizeType,
  SelectMenuColorType,
  OptionType,
} from './SelectMenu';

type SelectMenuContextType = {
  withIcons?: boolean;
  multiSelect?: boolean;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  size?: SelectMenuSizeType;
  color?: SelectMenuColorType | null | undefined;
  interactions: any;
  listRef: React.MutableRefObject<HTMLElement[]>;
  activeIndex: number;
  optionsList: Map<number, React.MutableRefObject<HTMLElement>>;
  handleOptionSelect: (option: OptionType) => unknown;
};
export const SelectMenuContext = React.createContext<SelectMenuContextType>(
  {} as SelectMenuContextType
);

const useSelectMenuContext = (): SelectMenuContextType => {
  return React.useContext(SelectMenuContext);
};

export default useSelectMenuContext;
