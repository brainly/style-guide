import * as React from 'react';
import classNames from 'classnames';
import {FloatingPortal, useMergeRefs} from '@floating-ui/react';

import useTooltipContext from './useTooltipContext';

export type TooltipElementPropsType = {
  /**
   * Tooltip content.
   * @example <TooltipElement>Label</TooltipElement>
   */
  children: React.ReactNode;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

const TooltipElement = React.forwardRef<
  HTMLDivElement,
  TooltipElementPropsType
>((props: TooltipElementPropsType, ref) => {
  const {className, children} = props;
  const context = useTooltipContext();
  const elementRef = useMergeRefs([context.refs.setFloating, ref]);

  if (!context.isOpen) return null;

  const tooltipElementClass = classNames('sg-tooltip', className);

  return (
    <FloatingPortal>
      <div
        ref={elementRef}
        className={tooltipElementClass}
        style={{
          position: context.strategy,
          top: context.y ?? 0,
          left: context.x ?? 0,
          ...props.style,
        }}
        {...context.getFloatingProps()}
      >
        {children}
      </div>
    </FloatingPortal>
  );
});

export default TooltipElement;
