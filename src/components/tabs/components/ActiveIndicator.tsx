import * as React from 'react';
import Transition, {TransitionEffectType} from '../../transition/Transition';
import classnames from 'classnames';
import {useTabsContext} from '../hooks';

type StyleType = Partial<
  React.CSSProperties & {
    '--color': string;
  }
>;
export type ActiveIndicatorProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  position?: 'top' | 'bottom';
  style?: StyleType;
};

export const ActiveIndicator = ({
  position = 'bottom',
  className,
  ...rest
}: ActiveIndicatorProps) => {
  const {activeTab} = useTabsContext();

  if (!activeTab) {
    return null;
  }

  const {x: activeTabX, width: activeTabWidth} =
    activeTab.getBoundingClientRect();
  const {x: offsetX, width: containerWidth} =
    activeTab.offsetParent.getBoundingClientRect();

  const activeTabToContainerRatio =
    containerWidth > 0 ? activeTabWidth / containerWidth : 0;

  const activeIndicatorEffect: TransitionEffectType = {
    animate: {
      transform: {
        translateX: activeTabX - offsetX,
        origin: 'left top',
        scaleX: activeTabToContainerRatio,
      },
      duration: 'moderate2',
      easing: 'entry',
    },
  };

  return (
    <Transition
      effect={activeIndicatorEffect}
      active
      fillMode="forwards"
      className={classnames('sg-tabs__active-indicator', {
        'sg-tabs__active-indicator--bottom': position === 'bottom',
        'sg-tabs__active-indicator--top': position === 'top',
      })}
    >
      <div
        className={classnames('sg-tabs__active-indicator--inner', className)}
        {...rest}
      />
    </Transition>
  );
};
