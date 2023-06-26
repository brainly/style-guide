import * as React from 'react';
import usePopover from './usePopover';

type PopoverContextType = ReturnType<typeof usePopover> | null;

export const PopoverContext = React.createContext<PopoverContextType>(
  {} as PopoverContextType
);

const usePopoverContext = (): PopoverContextType => {
  const context = React.useContext(PopoverContext);

  if (context === null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};

export default usePopoverContext;
