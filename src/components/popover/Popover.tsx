import * as React from 'react';
import PopoverElement from './PopoverElement';
import PopoverTrigger from './PopoverTrigger';
import {PopoverContext} from './usePopoverContext';
import usePopover, {PopoverPlacement, SizeType, ColorType} from './usePopover';

export type PopoverPropsType = {
  /**
   * Popover content which consists of popover element and popover trigger.
   * @example <Popover>
        <Popover.Element>Here's my popover</Popover.Element>
        <Popover.Trigger>
          <Button>Hover me</Button>
        </Popover.Trigger>
      </Popover>
   */
  children?: React.ReactNode;

  /**
   * Popover id.
   */
  id?: string;

  /**
   * Popover alignment.
   */
  placement?: PopoverPlacement;

  /**
   * Popover size.
   */
  size?: SizeType;

  /**
   * Set if Popover should be displayed by default.
   */
  defaultOpen?: boolean;

  /**
   * Only controlled component. Set Popover open state.
   */
  open?: boolean;

  asLabel?: boolean;

  /**
   * Only controlled component. Handle Popover open state change.
   */
  onOpenChange?: (arg0: boolean) => void;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'className' | 'size' | 'placement'
>;

const Popover = ({
  children,
  placement,
  id,
  size,
  asLabel,
  defaultOpen = false,
  open,
  onOpenChange,
}: PopoverPropsType) => {
  const popover = usePopover({
    placement,
    customId: id,
    size,
    defaultOpen,
    open,
    onOpenChange,
    asLabel,
  });

  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Element = PopoverElement;

export default Popover;
