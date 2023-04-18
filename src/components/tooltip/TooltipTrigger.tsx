import * as React from 'react';
import useTooltipContext from './useTooltipContext';

export type TooltipTriggerPropsType = {
  /**
   * Wrapper of element that should trigger tooltip.
   * @example <TooltipTrigger><Button>My button</Button></TooltipTrigger>
   */
  children: React.ReactNode;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children'>;

const TooltipTrigger = ({children, ...props}: TooltipTriggerPropsType) => {
  const tooltipContext = useTooltipContext();
  const isInContext = Boolean(
    tooltipContext && Object.keys(tooltipContext).length
  );

  return <div>{children}</div>;
};

export default TooltipTrigger;
