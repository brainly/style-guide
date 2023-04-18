import * as React from 'react';
import {
  useFloating,
  useInteractions,
  useDismiss,
  useRole,
  useHover,
  shift,
  offset,
  flip,
} from '@floating-ui/react';

const useTooltip = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const data = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [
      offset(8),
      flip(),
      // Apply shift when we want to move component to the side to fit
      shift(),
    ],
  });

  const hover = useHover(data.context, {
    move: false,
  });
  const dismiss = useDismiss(data.context);
  const role = useRole(data.context, {role: 'tooltip'});
  const interactions = useInteractions([hover, role, dismiss]);

  return React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      ...interactions,
      ...data,
    }),
    [isOpen, setIsOpen, interactions, data]
  );
};

export default useTooltip;
