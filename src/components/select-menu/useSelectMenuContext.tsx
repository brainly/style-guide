import * as React from 'react';

import {
  SelectMenuSizeType,
  SelectMenuColorType,
  OptionType,
  SelectMenuOptionType,
} from './SelectMenu';

type SelectMenuContextType = {
  id: string;
  ids: {wrapperId: string};
  classNames: {
    floatingContainerClassName: string;
    popupClassName: string;
    popupContentClassName: string;
    selectElementClassName: string;
  };
  isExpanded: boolean;
  floating: {
    interactions: any;
    floatingProps: any;
    refs: any;
    listRef: React.MutableRefObject<HTMLElement[]>;
    context: any;
    isMounted: boolean;
    status: string;
    activeIndex: number;
  };
  selectedOptions: ReadonlyArray<SelectMenuOptionType>;
  placeholder: string;
  withIcons?: boolean;
  multiSelect?: boolean;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  size?: SelectMenuSizeType;
  color?: SelectMenuColorType | null | undefined;
  handleOptionSelect: (option: OptionType) => unknown;
  onOpenChange: (isOpen: boolean) => unknown;
  onClick: (arg0: React.MouseEvent<HTMLDivElement>) => unknown;
};
export const SelectMenuContext = React.createContext<SelectMenuContextType>(
  {} as SelectMenuContextType
);

const useSelectMenuContext = (): SelectMenuContextType => {
  return React.useContext(SelectMenuContext);
};

export default useSelectMenuContext;
