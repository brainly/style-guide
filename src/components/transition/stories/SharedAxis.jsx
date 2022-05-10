// @flow strict

import * as React from 'react';
import Transition from '../Transition';
import Flex from '../../flex/Flex';
import Button from '../../buttons/Button';
import Icon from '../../icons/Icon';

import DummyBox from './common/DummyBox';
import Stage from './common/Stage';

const colorsOrder = ['peach', 'mustard', 'blue'];

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
 * The effect with an "animate" phase only to
 * make transition from the current position.
 */
const createSlideOutEffect = (direction: 'left' | 'right') => ({
  animate: {
    transform: {
      translateX: direction === 'left' ? '-m' : 'm',
    },
    opacity: 0,
    duration: 'moderate1',
    easing: 'exit',
  },
});

export function SharedAxis() {
  const [effect, setEffect] = React.useState(null);
  const [currentViewIndex, setCurrentViewIndex] = React.useState(0);
  const pendingCallback = React.useRef();

  const changeView = (index: number) => {
    if (index !== currentViewIndex) {
      const direction = currentViewIndex < index ? 'left' : 'right';

      setEffect(createSlideOutEffect(direction));

      pendingCallback.current = () => {
        setCurrentViewIndex(index);
        setEffect(createSlideInEffect(direction));
      };
    }
  };

  const handleTransitionEnd = () => {
    if (pendingCallback.current) {
      pendingCallback.current();
      pendingCallback.current = null;
    }
  };

  return (
    <Stage centered>
      <Flex marginBottom="m" justifyContent="center" className="sg-space-x-xs">
        {colorsOrder.map((color, index) => (
          <Button
            key={color}
            toggle={color}
            type={index === currentViewIndex ? 'solid-light' : 'transparent'}
            icon={<Icon type="circle" color="adaptive" />}
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
}

SharedAxis.parameters = {
  layout: 'centered',
};
