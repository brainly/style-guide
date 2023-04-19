import * as React from 'react';
import classNames from 'classnames';
import {FloatingPortal, useMergeRefs, FloatingArrow} from '@floating-ui/react';

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
        <FloatingArrow
          ref={context.arrowRef}
          context={context.context}
          width={24}
          height={24}
          staticOffset="16px"
          d="M0 24C1.72106 24 3.38535 23.3843 4.69205 22.2642L11.026 16.8349C11.5868 16.3542 12.414 16.3533 12.9759 16.8327L19.3782 22.2961C20.667 23.3958 22.3057 24 24 24V24L0 24V24Z"
        />
      </div>
    </FloatingPortal>
  );
});

export default TooltipElement;
