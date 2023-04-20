import * as React from 'react';
import {useMergeRefs} from '@floating-ui/react';

import useTooltipContext from './useTooltipContext';

function isReactForwardRefType(object) {
  const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');

  if (typeof object !== 'object' || object === null) return false;

  return object.type?.$$typeof === REACT_FORWARD_REF_TYPE;
}

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
  const childrenRef = (children as any).ref;
  const triggerRef = useMergeRefs([
    context.refs.setReference,
    ref,
    childrenRef,
  ]);

  // If children is valid element, i.e. <p>, <Checkbox> etc.
  // and if the element is forward ref type (otherwise we cannot pass ref).
  if (React.isValidElement(children) && isReactForwardRefType(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref: triggerRef,
        tabIndex: 0, // ensure the element tabindex is set, but allow overriding with children props
        ...props,
        ...children.props,
        'data-state': context.isOpen ? 'open' : 'closed',
      })
    );
  }

  return (
    <span
      ref={triggerRef}
      tabIndex={0} // ensure the element tabindex is set, but allow overriding with children props
      // The user can style the trigger based on the state
      data-state={context.isOpen ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </span>
  );
});

export default TooltipTrigger;
