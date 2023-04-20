import * as React from 'react';
import classNames from 'classnames';
import TooltipElement from './TooltipElement';
import TooltipTrigger from './TooltipTrigger';
import {TooltipContext} from './useTooltipContext';
import useTooltip from './useTooltip';

export type TooltipPropsType = {
  /**
   * Tooltip content which consists of tooltip element and tooltip trigger.
   * @example <Tooltip>
        <Tooltip.Element>Here's my tooltip</Tooltip.Element>
        <Tooltip.Trigger>
          <Button>Hover me</Button>
        </Tooltip.Trigger>
      </Tooltip>
   */
  children?: React.ReactNode;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

const Tooltip = ({className, children, ...props}: TooltipPropsType) => {
  const tooltip = useTooltip();

  return (
    <span {...props} className={className}>
      <TooltipContext.Provider value={tooltip}>
        {children}
      </TooltipContext.Provider>
    </span>
  );
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Element = TooltipElement;

export default Tooltip;
