import * as React from 'react';
import TooltipElement from './TooltipElement';
import TooltipTrigger from './TooltipTrigger';
import {TooltipContext} from './useTooltipContext';
import useTooltip, {TooltipPlacement} from './useTooltip';

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

  /**
   * Tooltip id.
   */
  id?: string;

  /**
   * Tooltip alignment.
   */
  placement?: TooltipPlacement;

  /**
   * Set if Tooltip should be displayed by default.
   */
  defaultOpen?: boolean;

  /**
   * Only controlled component. Set Tooltip open state.
   */
  open?: boolean;

  /**
   * Only controlled component. Handle Tooltip open state change.
   */
  onOpenChange?: (arg0: boolean) => void;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

const Tooltip = ({
  className,
  children,
  placement = 'top',
  id,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  ...props
}: TooltipPropsType) => {
  const tooltip = useTooltip({
    placement,
    customId: id,
    defaultOpen,
    controlledOpen,
    setControlledOpen,
  });

  return (
    <span {...props} className={className} id={tooltip.id}>
      <TooltipContext.Provider value={tooltip}>
        {children}
      </TooltipContext.Provider>
    </span>
  );
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Element = TooltipElement;

export default Tooltip;
