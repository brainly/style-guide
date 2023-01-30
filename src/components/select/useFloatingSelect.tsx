import {useFloating, useInteractions, useClick} from '@floating-ui/react';

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
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([
    click,
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
