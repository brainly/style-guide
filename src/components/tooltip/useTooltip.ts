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
import {generateId} from '../utils';

type TooltipPlacement = Exclude<
  Placement,
  'left-start' | 'left-end' | 'right-start' | 'right-end'
>;

interface UseTooltipPropTypes {
  placement?: TooltipPlacement;
  customId?: string;
  defaultOpen?: boolean;
  controlledOpen?: boolean;
  setControlledOpen?: (arg0: boolean) => void;
}

const useTooltip = ({
  placement = 'top',
  customId,
  defaultOpen = false,
  controlledOpen,
  setControlledOpen,
}: UseTooltipPropTypes) => {
  const {current: id} = React.useRef<string>(
    customId ?? `Tooltip_${generateId()}`
  );
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);

  const isOpen = controlledOpen ?? uncontrolledOpen;
  const setIsOpen = setControlledOpen ?? setUncontrolledOpen;

  const arrowRef = React.useRef(null);

  const data = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(12),
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
  });
  const focus = useFocus(data.context);
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
      ...interactions,
      ...data,
    }),
    [id, isOpen, setIsOpen, placement, interactions, data]
  );
};

export default useTooltip;
