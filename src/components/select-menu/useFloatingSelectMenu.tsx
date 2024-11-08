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
  useTransitionStatus,
  useRole,
  flip,
} from '@floating-ui/react';

const CONTAINER_MARGIN = 10;
const MAX_POPUP_WIDTH = 320;

type UseFloatingSelectMenuPropsType = {
  isExpanded: boolean;
  // @ts-ignore TS7051
  onOpenChange: (string) => void;
};

const useFloatingSelectMenu = (props: UseFloatingSelectMenuPropsType) => {
  const {isExpanded, onOpenChange} = props;
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const listRef = React.useRef<Array<HTMLElement | null>>([]);

  const {x, y, strategy, refs, context, placement} = useFloating({
    open: isExpanded,
    placement: 'bottom-start',
    onOpenChange,
    middleware: [
      offset(8),
      flip(),
      // Apply shift when we want to move component to the side to fit
      shift(),
      size({
        apply({elements, availableHeight, availableWidth}) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight - CONTAINER_MARGIN}px`,
            maxWidth: `${Math.min(availableWidth, MAX_POPUP_WIDTH)}px`, // the max width cannot be wider than 320px
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

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    referencePress: true,
    referencePressEvent: 'click',
  });
  const role = useRole(context, {role: 'listbox'});

  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true,
    focusItemOnHover: false,
  });

  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([
    click,
    dismiss,
    role,
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
    activeIndex,
  };
};

export default useFloatingSelectMenu;
