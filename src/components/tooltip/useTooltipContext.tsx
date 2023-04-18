import * as React from 'react';
import useTooltip from './useTooltip';

type TooltipContextType = ReturnType<typeof useTooltip> | null;

export const TooltipContext = React.createContext<TooltipContextType>(
  {} as TooltipContextType
);

const useTooltipContext = (): TooltipContextType => {
  const context = React.useContext(TooltipContext);

  if (context === null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};

export default useTooltipContext;
