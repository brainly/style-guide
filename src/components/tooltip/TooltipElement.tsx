import * as React from 'react';
import classNames from 'classnames';
import {FloatingPortal, useMergeRefs, FloatingArrow} from '@floating-ui/react';
import Text from '../text/Text';
import useTooltipContext from './useTooltipContext';

export type TooltipElementPropsType = {
  /**
   * Tooltip text.
   * @example <TooltipElement label="My tooltip" />
   */
  label: string;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

const ARROW_SIZE_DEFAULT = 24;
const ARROW_SIZE_SMALL = 12;

const TooltipElement = React.forwardRef<
  HTMLDivElement,
  TooltipElementPropsType
>((props: TooltipElementPropsType, ref) => {
  const {className, label} = props;
  const context = useTooltipContext();
  const elementRef = useMergeRefs([context.refs.setFloating, ref]);

  const tooltipClass = classNames(
    'sg-tooltip',
    {
      [`sg-tooltip--${String(context.size)}`]: context.size,
      [`sg-tooltip--${String(context.color)}`]: context.color,
    },
    className
  );

  const arrow =
    context.size === 'small' ? (
      <FloatingArrow
        ref={context.arrowRef}
        className="sg-tooltip__arrow"
        context={context.context}
        width={ARROW_SIZE_SMALL}
        height={ARROW_SIZE_SMALL}
        d="M0 12C0.86053 12 1.69267 11.6922 2.34602 11.1321L5.51299 8.41745C5.79338 8.17711 6.20701 8.17665 6.48794 8.41637L9.6891 11.148C10.3335 11.6979 11.1529 12 12 12L0 12Z"
      />
    ) : (
      <FloatingArrow
        ref={context.arrowRef}
        className="sg-tooltip__arrow"
        context={context.context}
        width={ARROW_SIZE_DEFAULT}
        height={ARROW_SIZE_DEFAULT}
        d="M0 24C1.72106 24 3.38535 23.3843 4.69205 22.2642L11.026 16.8349C11.5868 16.3542 12.414 16.3533 12.9759 16.8327L19.3782 22.2961C20.667 23.3958 22.3057 24 24 24V24L0 24V24Z"
      />
    );

  return (
    context.isMounted && (
      <FloatingPortal>
        <div
          ref={elementRef}
          className={tooltipClass}
          data-tooltip-id={context.id}
          data-placement={context.floatingPlacement}
          data-status={context.status}
          style={{
            position: context.strategy,
            top: context.y ?? 0,
            left: context.x ?? 0,
            visibility: context.middlewareData.hide?.referenceHidden
              ? 'hidden'
              : 'visible',
            ...props.style,
          }}
          aria-hidden="true"
          {...context.getFloatingProps()}
          role="none"
        >
          <Text
            className="sg-tooltip__label"
            align="to-center"
            color={context.color === 'dark' ? 'text-white' : 'text-black'}
            size="small"
          >
            {label}
          </Text>
          {arrow}
        </div>
      </FloatingPortal>
    )
  );
});

export default TooltipElement;
