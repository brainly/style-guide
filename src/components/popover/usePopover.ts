import * as React from 'react';
import {
  useFloating,
  useInteractions,
  useDismiss,
  useClick as useFloatingClick,
  useHover as useFloatingHover,
  useRole,
  useFocus as useFloatingFocus,
  offset,
  flip,
  arrow,
  autoUpdate,
  shift,
  safePolygon,
  useTransitionStatus,
  hide,
} from '@floating-ui/react';
import type {Placement} from '@floating-ui/react';
import {generateId} from '../utils';

export type PopoverPlacement = Placement;
export type PopoverRole = 'listbox' | 'dialog';

interface UsePopoverPropTypes {
  placement?: PopoverPlacement;
  customId?: string;
  defaultOpen?: boolean;
  open?: boolean;
  useHover?: boolean;
  useClick?: boolean;
  useFocus?: boolean;
  role?: PopoverRole;
  onOpenChange?: (arg0: boolean) => void;
}

const usePopover = ({
  placement = 'top',
  customId,
  defaultOpen = false,
  open,
  useHover = true,
  useClick = true,
  useFocus = true,
  role = 'dialog',
  onOpenChange,
}: UsePopoverPropTypes) => {
  const {current: id} = React.useRef<string>(
    customId ?? `Popover_${generateId()}`
  );

  const arrowRef = React.useRef(null);

  const isControlled = open !== undefined;

  const [isOpen, setIsOpen] = React.useState(isControlled ? open : defaultOpen);
  const [hasArrow, setHasArrow] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isControlled && open !== isOpen) {
      setIsOpen(open);
    }
  }, [open, isControlled, isOpen]);

  // Get position specitic params
  const variantParams = React.useMemo(() => {
    let offsetMainAxis = 8;
    let offsetAlignmentAxis = 0;
    const padding = 5;
    const arrowPadding = 16;

    if (hasArrow) {
      offsetMainAxis = 12;
      offsetAlignmentAxis = -8;
    }

    return {
      offset: {
        mainAxis: offsetMainAxis,
        alignmentAxis: offsetAlignmentAxis,
      },
      padding,
      arrowPadding,
    };
  }, [hasArrow]);

  const middleware = React.useMemo(() => {
    return [
      offset({
        mainAxis: variantParams.offset.mainAxis,
        alignmentAxis: variantParams.offset.alignmentAxis,
      }),
      flip({
        fallbackAxisSideDirection: 'start',
        fallbackPlacements: ['top', 'bottom', 'left', 'right'], // If it doesn't fit anywhere, apply fallback positions
      }),
      shift({padding: variantParams.padding}),
      arrow({
        element: arrowRef,
        padding: variantParams.arrowPadding,
      }),
      hide({
        strategy: 'referenceHidden',
      }),
    ];
  }, [
    variantParams.arrowPadding,
    variantParams.offset.alignmentAxis,
    variantParams.offset.mainAxis,
    variantParams.padding,
  ]);

  // @ts-ignore TS7006
  const handleOpenChange = isOpen => {
    if (isControlled && onOpenChange) onOpenChange(isOpen);
    else setIsOpen(isOpen);
  };

  const data = useFloating({
    open: isOpen,
    onOpenChange: handleOpenChange,
    placement,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const hover = useFloatingHover(data.context, {
    enabled: useHover,
    move: false,
    mouseOnly: true,
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const focus = useFloatingFocus(data.context, {
    enabled: useFocus,
  });
  const click = useFloatingClick(data.context, {
    enabled: useClick,
  });
  const dismiss = useDismiss(data.context);
  const roleInteractions = useRole(data.context, {role});
  const interactions = useInteractions([
    hover,
    focus,
    click,
    dismiss,
    roleInteractions,
  ]);

  const {isMounted, status} = useTransitionStatus(data.context, {
    duration: {
      open: 260,
      close: 180,
    },
  });

  return React.useMemo(
    () => ({
      id,
      isOpen,
      setIsOpen,
      arrowRef,
      arrowPadding: variantParams.arrowPadding,
      hasArrow,
      setHasArrow,
      // @ts-ignore TS2783
      placement,
      isMounted,
      status,
      role,
      floatingPlacement: data.placement,
      ...interactions,
      ...data,
    }),
    [
      id,
      isOpen,
      variantParams.arrowPadding,
      hasArrow,
      placement,
      isMounted,
      status,
      data,
      interactions,
      role,
    ]
  );
};

export default usePopover;
