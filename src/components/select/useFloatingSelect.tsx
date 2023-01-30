import {
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
} from '@floating-ui/react';

type UseFloatingSelectPropsType = {
  isExpanded: boolean;
  onOpenChange: (string) => void;
};

const useFloatingSelect = (props: UseFloatingSelectPropsType) => {
  const {isExpanded, onOpenChange} = props;

  const {x, y, strategy, refs, context} = useFloating({
    open: isExpanded,
    onOpenChange,
  });
  const click = useClick(context, {event: 'mousedown'});
  const dismiss = useDismiss(context, {
    ancestorScroll: true,
  });
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([
    click,
    dismiss,
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
    context,
  };
};

export default useFloatingSelect;
