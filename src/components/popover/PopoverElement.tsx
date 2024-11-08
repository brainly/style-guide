import * as React from 'react';
import classNames from 'classnames';
import {
  FloatingPortal,
  useMergeRefs,
  FloatingArrow,
  FloatingFocusManager,
} from '@floating-ui/react';
import usePopoverContext from './usePopoverContext';

export type PopoverElementPropsType = {
  /**
   * Popover content.
   * @example <PopoverElement>Some text</PopoverElement>
   */
  children: React.ReactNode;

  /**
   * Optional string. Additional classnames.
   */
  className?: string | null | undefined;

  maxWidth?: string;

  padding?: string;

  withArrow?: boolean;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

const ARROW_SIZE = 24;
const ARROW_SVG_PATH =
  'M0 24C1.72106 24 3.38535 23.3843 4.69205 22.2642L11.026 16.8349C11.5868 16.3542 12.414 16.3533 12.9759 16.8327L19.3782 22.2961C20.667 23.3958 22.3057 24 24 24V24L0 24V24Z';

const PopoverElement = React.forwardRef<
  HTMLDivElement,
  PopoverElementPropsType
  // @ts-expect-error
>((props: PopoverElementPropsType, ref) => {
  const {
    className,
    children,
    padding,
    maxWidth,
    withArrow = true,
    ...rest
  } = props;
  const context = usePopoverContext();
  // @ts-expect-error TS18047
  const elementRef = useMergeRefs([context.refs.setFloating, ref]);

  // @ts-expect-error TS18047
  if (context.hasArrow !== withArrow) context.setHasArrow(withArrow);

  const isShorterThanArrowWithPadding =
    // @ts-expect-error TS18047
    ARROW_SIZE + 2 * context.arrowPadding >
    // @ts-expect-error TS18047
    context.refs.floating.current?.offsetHeight;

  // If the placement is right or left
  // and the popover isn't high enough to fit an arrow with the padding
  // position the arrow individually.
  // We don't care for top and bottom, because the component min width is enough to fit both arrow and it's padding.
  const arrowOffset =
    isShorterThanArrowWithPadding &&
    // @ts-expect-error TS18047
    (context.placement.includes('right') || context.placement.includes('left'))
      ? `calc(50% - ${ARROW_SIZE / 2}px)`
      : null;

  const popoverClass = classNames('sg-popover', className);

  return (
    // @ts-expect-error TS18047
    context.isMounted && (
      <FloatingPortal>
        <FloatingFocusManager
          // @ts-expect-error TS18047
          context={context.context}
          order={['reference', 'content']}
          visuallyHiddenDismiss
          initialFocus={-1}
        >
          <div
            ref={elementRef}
            className={popoverClass}
            // @ts-expect-error TS18047
            data-popover-id={context.id}
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
              padding,
              maxWidth,
            }}
            // @ts-expect-error TS18047
            {...context.getFloatingProps()}
            {...rest}
          >
            {children}
            {withArrow && (
              <FloatingArrow
                // @ts-expect-error TS18047
                ref={context.arrowRef}
                className="sg-popover__arrow"
                // @ts-expect-error TS18047
                context={context.context}
                width={ARROW_SIZE}
                height={ARROW_SIZE}
                staticOffset={arrowOffset}
                d={ARROW_SVG_PATH}
              />
            )}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    )
  );
});

export default PopoverElement;
