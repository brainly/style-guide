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
  controlledOpen?: boolean;
  asLabel?: boolean;
  setControlledOpen?: (arg0: boolean) => void;
}

const useTooltip = ({
  placement = 'top',
  customId,
  size = 'default' as SizeType,
  color = 'dark' as ColorType,
  defaultOpen = false,
  controlledOpen,
  asLabel,
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

  // Get position and size specitic params
  const variantParams = React.useMemo(() => {
    const offsetMainAxis = size === 'small' ? 6 : 10;
    const offsetAlignmentAxis = size === 'small' ? -4 : -8;
    const padding = 5;
    const arrowPadding =
      placement.includes('top') || placement.includes('bottom') ? 16 : 0;

    return {
      offset: {
        mainAxis: offsetMainAxis,
        alignmentAxis: offsetAlignmentAxis,
      },
      padding,
      arrowPadding,
    };
  }, [placement, size]);

  const data = useFloating({
    open: enableTooltip ? isOpen : false,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: variantParams.offset.mainAxis,
        alignmentAxis: variantParams.offset.alignmentAxis,
      }),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift({padding: variantParams.padding}),
      arrow({
        element: arrowRef,
        padding: variantParams.arrowPadding,
      }),
      hide({
        strategy: 'referenceHidden',
      }),
    ],
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
