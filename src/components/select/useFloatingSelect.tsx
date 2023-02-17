import * as React from 'react';
import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  useListNavigation,
  flip,
  shift,
  offset,
  size,
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

  const {x, y, strategy, refs, context} = useFloating({
    open: isExpanded,
    onOpenChange,
    middleware: [
      offset(8),
      flip({
        fallbackAxisSideDirection: 'start',
        crossAxis: false,
        fallbackPlacements: ['top'],
      }),
      shift(),
      size({
        apply({elements, availableHeight}) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight - CONTAINER_MARGIN}px`,
            margin: `0 ${CONTAINER_MARGIN}px`,
            transform: `translateX(-${CONTAINER_MARGIN}px)`,
          });
        },
      }),
    ],
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
    props: {
      x,
      y,
      strategy,
    },
    refs,
    listRef,
    context,
  };
};

export default useFloatingSelect;
