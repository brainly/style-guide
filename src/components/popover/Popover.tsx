import * as React from 'react';
import PopoverElement from './PopoverElement';
import PopoverTrigger from './PopoverTrigger';
import {PopoverContext} from './usePopoverContext';
import usePopover, {PopoverPlacement, PopoverRole} from './usePopover';

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
   * Set if Popover should be displayed by default.
   */
  defaultOpen?: boolean;

  /**
   * Only controlled component. Set Popover open state.
   */
  open?: boolean;

  role?: PopoverRole;

  /**
   * Determine if hover should affect popover visibility.
   * @default true
   */
  useHover?: boolean;

  /**
   * Determine if click should affect popover visibility.
   * @default true
   */
  useClick?: boolean;

  /**
   * Determine if focus should affect popover visibility.
   * @default true
   */
  useFocus?: boolean;

  /**
   * Only controlled component. Handle Popover open state change.
   */
  onOpenChange?: (arg0: boolean) => void;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'className' | 'placement'
>;

const Popover = ({
  children,
  placement,
  id,
  useHover,
  useClick,
  useFocus,
  defaultOpen = false,
  open,
  role,
  onOpenChange,
}: PopoverPropsType) => {
  const popover = usePopover({
    placement,
    customId: id,
    defaultOpen,
    open,
    onOpenChange,
    useHover,
    useClick,
    useFocus,
    role,
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
