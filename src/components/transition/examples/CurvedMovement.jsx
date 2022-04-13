// @flow strict

import * as React from 'react';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {useTransformationState} from './common/useTransformationState';

const fixedStyle = {
  position: 'absolute',
  right: 16,
  bottom: 16,
};

export function CurvedMovement() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [effects, setEffects] = React.useState({
    xMove: null,
    yMove: null,
    scale: null,
  });

  const elementRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const transformation = useTransformationState({
    elementRef,
    containerRef,
    updateKey: isExpanded,
  });

  React.useLayoutEffect(() => {
    if (transformation.diffTop === 0) {
      return;
    }

    const origin = 'left top';
    const duration = 240;

    /**
     * https://tobiasahlin.com/blog/curved-path-animations-in-css/
     * The time difference between axes curves the trajectory of motion.
     */
    const differenceFactor = 0.4;
    const xDuration = isExpanded
      ? duration * (1 - differenceFactor)
      : duration * (1 + differenceFactor);

    setEffects({
      xMove: {
        initial: {transform: {translateX: -transformation.diffLeft}},
        animate: {transform: {translateX: 0, origin, duration: xDuration}},
      },
      yMove: {
        initial: {transform: {translateY: -transformation.diffTop}},
        animate: {transform: {translateY: 0, origin, duration}},
      },
      scale: {
        initial: {transform: {scale: 1 - transformation.diffScaleX}},
        animate: {transform: {scale: 1, origin, duration}},
      },
    });
  }, [isExpanded, transformation]);

  return (
    <Stage ref={containerRef} centered>
      <div style={isExpanded ? undefined : fixedStyle}>
        <Transition effect={effects.xMove} active>
          <Transition effect={effects.yMove} active>
            <Transition effect={effects.scale} active>
              <DummyBox
                ref={elementRef}
                size={isExpanded ? 'medium' : 'small'}
                onClick={() => setIsExpanded(b => !b)}
                color="blue"
              />
            </Transition>
          </Transition>
        </Transition>
      </div>
    </Stage>
  );
}

CurvedMovement.parameters = {
  layout: 'centered',
};
