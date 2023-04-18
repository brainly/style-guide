import * as React from 'react';

type TooltipContextType = {};
export const TooltipContext = React.createContext<TooltipContextType>(
  {} as TooltipContextType
);

const useTooltipContext = (): TooltipContextType => {
  return React.useContext(TooltipContext);
};

export default useTooltipContext;
