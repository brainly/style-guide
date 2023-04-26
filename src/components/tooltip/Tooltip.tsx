import * as React from 'react';
import TooltipElement from './TooltipElement';
import TooltipTrigger from './TooltipTrigger';
import {TooltipContext} from './useTooltipContext';
import useTooltip, {TooltipPlacement, SizeType, ColorType} from './useTooltip';

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
   * Tooltip id.
   */
  id?: string;

  /**
   * Tooltip alignment.
   */
  placement?: TooltipPlacement;

  /**
   * Tooltip size.
   */
  size?: SizeType;

  /**
   * Specify color variant of the Tooltip.
   * @example <Tooltip color="dark">...</Tooltip>
   */
  color?: ColorType;

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
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'className' | 'size' | 'placement'
>;

const Tooltip = ({
  children,
  placement,
  id,
  size,
  color,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipPropsType) => {
  const tooltip = useTooltip({
    placement,
    customId: id,
    size,
    color,
    defaultOpen,
    controlledOpen,
    setControlledOpen,
  });

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Element = TooltipElement;

export default Tooltip;
