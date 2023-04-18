import * as React from 'react';
import classNames from 'classnames';
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

const TooltipElement = ({
  children,
  className,
  ...props
}: TooltipElementPropsType) => {
  const tooltipContext = useTooltipContext();
  const isInContext = Boolean(
    tooltipContext && Object.keys(tooltipContext).length
  );

  const tooltipElementClass = classNames('sg-tooltip-element', className);

  return <div className={tooltipElementClass}>{children}</div>;
};

export default TooltipElement;
