import * as React from 'react';
import Transition, {TransitionEffectType} from '../../transition/Transition';
import classnames from 'classnames';
import {useTabsContext} from '../hooks';

export type ActiveIndicatorProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  position?: 'top' | 'bottom';
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

  const {x, width} = activeTab.getBoundingClientRect();
  const offsetParentBoundClientRect =
    activeTab.offsetParent?.getBoundingClientRect();
  const offsetX = Number(offsetParentBoundClientRect?.x);

  const activeIndicatorEffect: {animate: TransitionEffectType['animate']} = {
    animate: {
      width,
      transform: {translateX: x - offsetX, origin: 'left top'},
      duration: 'moderate2',
      easing: 'entry',
    },
  };

  return (
    <Transition
      effect={activeIndicatorEffect}
      active
      fillMode="forwards"
      className={classnames('sg-tabs__active-indicator', className, {
        'sg-tabs__active-indicator--bottom': position === 'bottom',
        'sg-tabs__active-indicator--top': position === 'top',
      })}
    >
      <div className="sg-tabs__active-indicator--inner" {...rest} />
    </Transition>
  );
};
