import * as React from 'react';
import {
  useFloating,
  useInteractions,
  useDismiss,
  useRole,
  useHover,
  useFocus,
  offset,
  flip,
  arrow,
  autoUpdate,
  shift,
} from '@floating-ui/react';
import type {Placement} from '@floating-ui/react';
import {generateId, isTouchScreen} from '../utils';

export type SizeType = 'default' | 'small';

export type TooltipPlacement = Exclude<
  Placement,
  'left-start' | 'left-end' | 'right-start' | 'right-end'
>;

interface UseTooltipPropTypes {
  placement?: TooltipPlacement;
  customId?: string;
  size?: SizeType;
  defaultOpen?: boolean;
  controlledOpen?: boolean;
  setControlledOpen?: (arg0: boolean) => void;
}

const useTooltip = ({
  placement = 'top',
  customId,
  size = 'default' as SizeType,
  defaultOpen = false,
  controlledOpen,
  setControlledOpen,
}: UseTooltipPropTypes) => {
  const {current: id} = React.useRef<string>(
    customId ?? `Tooltip_${generateId()}`
  );

  const {current: enableTooltip} = React.useRef(!isTouchScreen());

  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    enableTooltip ? defaultOpen : false
  );

  const isOpen = controlledOpen ?? uncontrolledOpen;
  const setIsOpen = setControlledOpen ?? setUncontrolledOpen;

  const arrowRef = React.useRef(null);

  const data = useFloating({
    open: enableTooltip ? isOpen : false,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: size === 'small' ? 6 : 10,
        alignmentAxis: size === 'small' ? -4 : -8,
      }),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift({padding: 5}),
      arrow({
        element: arrowRef,
        padding:
          placement.includes('top') || placement.includes('bottom') ? 16 : 0,
      }),
    ],
  });

  const hover = useHover(data.context, {
    move: false,
    enabled: enableTooltip,
  });
  const focus = useFocus(data.context, {
    enabled: enableTooltip,
  });
  const dismiss = useDismiss(data.context);
  const role = useRole(data.context, {role: 'tooltip'});
  const interactions = useInteractions([hover, focus, role, dismiss]);

  return React.useMemo(
    () => ({
      id,
      isOpen,
      setIsOpen,
      arrowRef,
      placement,
      size,
      ...interactions,
      ...data,
    }),
    [id, isOpen, setIsOpen, placement, size, interactions, data]
  );
};

export default useTooltip;
