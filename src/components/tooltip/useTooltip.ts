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

interface UseTooltipPropTypes {
  placement?: Placement;
}

const useTooltip = ({placement = 'top'}: UseTooltipPropTypes) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const arrowRef = React.useRef(null);

  const data = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(12),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift({padding: 5}),
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
      isOpen,
      setIsOpen,
      arrowRef,
      placement,
      ...interactions,
      ...data,
    }),
    [isOpen, placement, interactions, data]
  );
};

export default useTooltip;
