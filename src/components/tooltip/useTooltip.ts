import * as React from 'react';
import {
  useFloating,
  useInteractions,
  useDismiss,
  useRole,
  useHover,
  useFocus,
  shift,
  offset,
  flip,
  arrow,
} from '@floating-ui/react';

const useTooltip = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const arrowRef = React.useRef(null);

  const data = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(8),
      flip(),
      // Apply shift when we want to move component to the side to fit
      shift(),
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
      ...interactions,
      ...data,
    }),
    [isOpen, setIsOpen, interactions, data]
  );
};

export default useTooltip;
