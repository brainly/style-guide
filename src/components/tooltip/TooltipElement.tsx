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
const ARROW_SVG_PATH_DEFAULT =
  'M0 24C1.72106 24 3.38535 23.3843 4.69205 22.2642L11.026 16.8349C11.5868 16.3542 12.414 16.3533 12.9759 16.8327L19.3782 22.2961C20.667 23.3958 22.3057 24 24 24V24L0 24V24Z';
const ARROW_SVG_PATH_SMALL =
  'M0 12C0.86053 12 1.69267 11.6922 2.34602 11.1321L5.51299 8.41745C5.79338 8.17711 6.20701 8.17665 6.48794 8.41637L9.6891 11.148C10.3335 11.6979 11.1529 12 12 12L0 12Z';

const TooltipElement = React.forwardRef<
  HTMLDivElement,
  TooltipElementPropsType
  // @ts-expect-error
>((props: TooltipElementPropsType, ref) => {
  const {className, label} = props;
  const context = useTooltipContext();
  // @ts-expect-error TS18047
  const elementRef = useMergeRefs([context.refs.setFloating, ref]);

  const arrowSize =
    // @ts-expect-error TS18047
    context.size === 'small' ? ARROW_SIZE_SMALL : ARROW_SIZE_DEFAULT;
  const arrowSVGPath =
    // @ts-expect-error TS18047
    context.size === 'small' ? ARROW_SVG_PATH_SMALL : ARROW_SVG_PATH_DEFAULT;

  const isShorterThanArrowWithPadding =
    // @ts-expect-error TS18047
    arrowSize + 2 * context.arrowPadding >
    // @ts-expect-error TS18047
    context.refs.floating.current?.offsetHeight;

  // If the placement is right or left
  // and the tooltip isn't high enough to fit an arrow with the padding
  // position the arrow individually.
  // We don't care for top and bottom, because the component min width is enough to fit both arrow and it's padding.
  const arrowOffset =
    isShorterThanArrowWithPadding &&
    // @ts-expect-error TS18047
    (context.placement.includes('right') || context.placement.includes('left'))
      ? `calc(50% - ${arrowSize / 2}px)`
      : null;

  const tooltipClass = classNames(
    'sg-tooltip',
    {
      // @ts-expect-error TS18047
      [`sg-tooltip--${String(context.size)}`]: context.size,
      // @ts-expect-error TS18047
      [`sg-tooltip--${String(context.color)}`]: context.color,
    },
    className
  );

  return (
    // @ts-expect-error TS18047
    context.isMounted && (
      <FloatingPortal>
        <div
          ref={elementRef}
          className={tooltipClass}
          // @ts-expect-error TS18047
          data-tooltip-id={context.id}
          // @ts-expect-error TS18047
          data-placement={context.floatingPlacement}
          // @ts-expect-error TS18047
          data-status={context.status}
          style={{
            // @ts-expect-error TS18047
            position: context.strategy,
            // @ts-expect-error TS18047
            top: context.y ?? 0,
            // @ts-expect-error TS18047
            left: context.x ?? 0,
            // @ts-expect-error TS18047
            visibility: context.middlewareData.hide?.referenceHidden
              ? 'hidden'
              : 'visible',
            ...props.style,
          }}
          aria-hidden="true"
          // @ts-expect-error TS18047
          {...context.getFloatingProps()}
          role="none"
        >
          <Text
            className="sg-tooltip__label"
            align="to-center"
            // @ts-expect-error TS18047
            color={context.color === 'dark' ? 'text-white' : 'text-black'}
            size="small"
          >
            {label}
          </Text>
          <FloatingArrow
            // @ts-expect-error TS18047
            ref={context.arrowRef}
            className="sg-tooltip__arrow"
            // @ts-expect-error TS18047
            context={context.context}
            width={arrowSize}
            height={arrowSize}
            staticOffset={arrowOffset}
            d={arrowSVGPath}
          />
        </div>
      </FloatingPortal>
    )
  );
});

export default TooltipElement;
