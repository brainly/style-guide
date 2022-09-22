// @flow strict

import * as React from 'react';
import Transition from '../Transition';
import Flex from '../../flex/Flex';
import Button from '../../buttons/Button';
import Icon from '../../icons/Icon';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';

const colorsOrder = ['red', 'yellow', 'blue'];

const createSlideInEffect = (direction: 'left' | 'right') => ({
  initial: {
    transform: {translateX: direction === 'left' ? 'm' : '-m'},
    opacity: 0,
  },
  animate: {
    transform: {translateX: 0},
    opacity: 1,
    duration: 'moderate1',
    easing: 'entry',
  },
});

/**
 * An effect with only the "animate" phase always
 * performs a transition from the current position.
 */
const createSlideOutEffect = (direction: 'left' | 'right') => ({
  animate: {
    transform: {translateX: direction === 'left' ? '-m' : 'm'},
    opacity: 0,
    duration: 'moderate1',
    easing: 'exit',
  },
});

export const SharedAxis = () => {
  const [effect, setEffect] = React.useState(null);
  const [currentViewIndex, setCurrentViewIndex] = React.useState(0);
  const nextTransitionCallback = React.useRef();

  const changeView = (viewIndex: number) => {
    if (viewIndex !== currentViewIndex) {
      const direction = currentViewIndex < viewIndex ? 'left' : 'right';

      // hide previous view
      setEffect(createSlideOutEffect(direction));

      // show the next view
      nextTransitionCallback.current = () => {
        setCurrentViewIndex(viewIndex);
        setEffect(createSlideInEffect(direction));
        nextTransitionCallback.current = null;
      };
    }
  };

  const handleTransitionEnd = () => {
    if (nextTransitionCallback.current) {
      nextTransitionCallback.current();
    }
  };

  return (
    <Stage centered>
      <Flex marginBottom="m" justifyContent="center" className="sg-space-x-xs">
        {colorsOrder.map((color, index) => (
          <Button
            key={color}
            variant={index === currentViewIndex ? 'solid-light' : 'transparent'}
            icon={<Icon type="circle" color={buttonIconColors[color]} />}
            onClick={() => changeView(index)}
            iconOnly
          />
        ))}
      </Flex>

      <Transition active effect={effect} onTransitionEnd={handleTransitionEnd}>
        <DummyBox size="medium" color={colorsOrder[currentViewIndex]} />
      </Transition>
    </Stage>
  );
};

const buttonIconColors = {
  red: 'icon-red-50',
  yellow: 'icon-yellow-50',
  blue: 'icon-blue-50',
};

SharedAxis.parameters = {
  layout: 'centered',
};
