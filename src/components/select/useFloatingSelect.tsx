import * as React from 'react';
import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  useListNavigation,
  shift,
  offset,
  size,
  autoPlacement,
  useTransitionStatus,
  limitShift,
  flip,
} from '@floating-ui/react';

const CONTAINER_MARGIN = 10;

type UseFloatingSelectPropsType = {
  isExpanded: boolean;
  onOpenChange: (string) => void;
};

const useFloatingSelect = (props: UseFloatingSelectPropsType) => {
  const {isExpanded, onOpenChange} = props;
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const listRef = React.useRef<Array<HTMLElement | null>>([]);

  const {x, y, strategy, refs, context, placement} = useFloating({
    open: isExpanded,
    placement: 'bottom-start',
    onOpenChange,
    middleware: [
      offset(8),
      flip({padding: CONTAINER_MARGIN}),
      // Apply shift when we want to move component to the side to fit
      shift(),
      size({
        apply({elements, availableHeight, availableWidth}) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight - CONTAINER_MARGIN}px`,
            maxWidth: `${availableWidth}px`,
          });
        },
      }),
    ],
  });
  const {isMounted, status} = useTransitionStatus(context, {
    duration: {
      open: 320,
      close: 250,
    },
  });

  const click = useClick(context, {event: 'mousedown'});
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    // selectedIndex,
    onNavigate: setActiveIndex,
  });

  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([
    click,
    dismiss,
    listNav,
  ]);

  return {
    interactions: {
      getReferenceProps,
      getFloatingProps,
      getItemProps,
    },
    floatingProps: {
      x,
      y,
      strategy,
      placement,
    },
    refs,
    listRef,
    context,
    isMounted,
    status,
  };
};

export default useFloatingSelect;
