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
  safePolygon,
  useTransitionStatus,
  hide,
} from '@floating-ui/react';
import type {Placement} from '@floating-ui/react';
import {generateId, isTouchScreen} from '../utils';

export type SizeType = 'default' | 'small';

export type ColorType = 'dark' | 'light';

export type TooltipPlacement = Exclude<
  Placement,
  'left-start' | 'left-end' | 'right-start' | 'right-end'
>;

interface UseTooltipPropTypes {
  placement?: TooltipPlacement;
  customId?: string;
  size?: SizeType;
  color?: ColorType;
  defaultOpen?: boolean;
  open?: boolean;
  asLabel?: boolean;
  onOpenChange?: (arg0: boolean) => void;
}

const useTooltip = ({
  placement = 'top',
  customId,
  size = 'default' as SizeType,
  color = 'dark' as ColorType,
  defaultOpen = false,
  open,
  asLabel,
  onOpenChange,
}: UseTooltipPropTypes) => {
  const {current: id} = React.useRef<string>(
    customId ?? `Tooltip_${generateId()}`
  );

  const {current: enableTooltip} = React.useRef(!isTouchScreen());
  const arrowRef = React.useRef(null);

  const isControlled = open !== undefined;

  const [isOpen, setIsOpen] = React.useState(
    enableTooltip ? (isControlled ? open : defaultOpen) : false
  );

  React.useEffect(() => {
    if (isControlled && open !== isOpen) {
      setIsOpen(open);
    }
  }, [open, isControlled, isOpen]);

  // Get position and size specitic params
  const variantParams = React.useMemo(() => {
    const offsetMainAxis = size === 'small' ? 6 : 10;
    const offsetAlignmentAxis = size === 'small' ? -6 : -8;
    const padding = 5;
    const arrowPadding = size === 'small' ? 6 : 16;

    return {
      offset: {
        mainAxis: offsetMainAxis,
        alignmentAxis: offsetAlignmentAxis,
      },
      padding,
      arrowPadding,
    };
  }, [size]);

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

  // @ts-expect-error TS7006
  const handleOpenChange = isOpen => {
    if (isControlled && onOpenChange) onOpenChange(isOpen);
    else setIsOpen(isOpen);
  };

  const data = useFloating({
    open: enableTooltip ? isOpen : false,
    onOpenChange: handleOpenChange,
    placement,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(data.context, {
    move: false,
    mouseOnly: true,
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const focus = useFocus(data.context, {
    enabled: enableTooltip,
  });
  const dismiss = useDismiss(data.context);
  const role = useRole(data.context, {role: 'tooltip'});
  const interactions = useInteractions([hover, focus, role, dismiss]);

  const {isMounted, status} = useTransitionStatus(data.context, {
    duration: {
      open: 260,
      close: 180,
    },
  });

  return React.useMemo(
    () => ({
      id,
      asLabel,
      isOpen,
      setIsOpen,
      arrowRef,
      arrowPadding: variantParams.arrowPadding,
      // @ts-expect-error TS2783
      placement,
      size,
      color,
      isMounted,
      status,
      floatingPlacement: data.placement,
      ...interactions,
      ...data,
    }),
    [
      id,
      asLabel,
      isOpen,
      setIsOpen,
      variantParams.arrowPadding,
      placement,
      size,
      color,
      isMounted,
      status,
      data,
      interactions,
    ]
  );
};

export default useTooltip;
