import * as React from 'react';
import {useMergeRefs} from '@floating-ui/react';

import useTooltipContext from './useTooltipContext';

// @ts-expect-error TS7006
function isReactForwardRefType(object) {
  const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');

  if (typeof object !== 'object' || object === null) return false;

  return object.type?.$$typeof === REACT_FORWARD_REF_TYPE;
}

export type TooltipTriggerPropsType = {
  /**
   * Wrapper of element that should trigger tooltip. If children element supports forwarding refs,
   * it will become a trigger for the tooltip.
   * Otherwise, additional wrapper will be created.
   * @example <TooltipTrigger><Button>My button</Button></TooltipTrigger>
   */
  children: React.ReactNode;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children'>;

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  TooltipTriggerPropsType
>((props: TooltipTriggerPropsType, ref) => {
  const {children, ...rest} = props;
  const context = useTooltipContext();
  const childrenRef = (children as any).ref;
  const triggerRef = useMergeRefs([
    // @ts-expect-error TS18047
    context.refs.setReference,
    ref,
    childrenRef,
  ]);

  const className = 'sg-tooltip-trigger';
  // @ts-expect-error TS18047
  const tooltipId = context.getFloatingProps().id as string;
  // @ts-expect-error TS18047
  const ariaLink = context.asLabel
    ? {'aria-labeledby': tooltipId}
    : {'aria-describedby': tooltipId};

  // If children is valid element, i.e. <p>, <Checkbox> etc.
  // and if the element is forward ref type (otherwise we cannot pass ref).
  if (React.isValidElement(children) && isReactForwardRefType(children)) {
    return React.cloneElement(children, {
      // @ts-expect-error TS18047
      ...context.getReferenceProps({
        className,
        tabIndex: 0, // ensure the element tabindex is set, but allow overriding with children props
        ...rest,
        ...children.props,
        ref: triggerRef, // override forwarded ref with merged refs
        // @ts-expect-error TS18047
        'data-state': context.isOpen ? 'open' : 'closed',
      }),
      ...ariaLink,
    });
  }

  return (
    <span
      ref={triggerRef}
      tabIndex={0} // ensure the element tabindex is set, but allow overriding with children props
      className={className}
      // The user can style the trigger based on the state
      // @ts-expect-error TS18047
      data-state={context.isOpen ? 'open' : 'closed'}
      // @ts-expect-error TS18047
      {...context.getReferenceProps(props)}
      aria-describedby={tooltipId}
    >
      {children}
    </span>
  );
});

export default TooltipTrigger;
