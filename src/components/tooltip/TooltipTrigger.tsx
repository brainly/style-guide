import * as React from 'react';
import {useMergeRefs} from '@floating-ui/react';

import useTooltipContext from './useTooltipContext';

export type TooltipTriggerPropsType = {
  /**
   * Wrapper of element that should trigger tooltip.
   * @example <TooltipTrigger><Button>My button</Button></TooltipTrigger>
   */
  children: React.ReactNode;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children'>;

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  TooltipTriggerPropsType
>((props: TooltipTriggerPropsType, ref) => {
  const {children} = props;
  const context = useTooltipContext();
  const triggerRef = useMergeRefs([context.refs.setReference, ref]);

  return (
    <div
      ref={triggerRef}
      // The user can style the trigger based on the state
      data-state={context.isOpen ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </div>
  );
});

export default TooltipTrigger;
