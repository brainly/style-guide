// @flow strict

import * as React from 'react';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {useTransformationEffect} from '../useTransformationEffect';
import {TransformationContainer} from '../TransformationContainer';

const fixedStyle = {
  position: 'absolute',
  right: 16,
  bottom: 16,
};

export function CurvedMovement() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleClick = () => setIsExpanded(b => !b);

  return (
    <TransformationContainer stateKey={isExpanded}>
      <Stage centered overflowHidden>
        <ExpandableBox isExpanded={isExpanded} onClick={handleClick} />
      </Stage>
    </TransformationContainer>
  );
}

function ExpandableBox({
  isExpanded,
  onClick,
}: {
  isExpanded: boolean,
  onClick: () => void,
}) {
  const [effects, setEffects] = React.useState({
    xMove: null,
    yMove: null,
    scale: null,
  });

  const elementRef = React.useRef(null);
  const prevTransformation = React.useRef();
  const transformationEffect = useTransformationEffect({
    elementRef,
  });

  React.useLayoutEffect(() => {
    if (
      transformationEffect === null ||
      transformationEffect === prevTransformation.current
    ) {
      return;
    }

    prevTransformation.current = transformationEffect;

    const origin = 'left top';
    const duration = 240;
    const {
      translateX = 0,
      translateY = 0,
      scaleX = 1,
    } = transformationEffect.initial?.transform || {};

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
        initial: {transform: {translateX}},
        animate: {transform: {translateX: 0, origin, duration: xDuration}},
      },
      yMove: {
        initial: {transform: {translateY}},
        animate: {transform: {translateY: 0, origin, duration}},
      },
      scale: {
        initial: {transform: {scale: scaleX}},
        animate: {transform: {scale: 1, origin, duration}},
      },
    });
  }, [isExpanded, transformationEffect]);

  return (
    <div style={isExpanded ? undefined : fixedStyle}>
      <Transition active effect={effects.xMove}>
        <Transition active effect={effects.yMove}>
          <Transition active effect={effects.scale}>
            <DummyBox
              ref={elementRef}
              size={isExpanded ? 'medium' : 'small'}
              onClick={onClick}
              color="blue"
            />
          </Transition>
        </Transition>
      </Transition>
    </div>
  );
}

CurvedMovement.parameters = {
  layout: 'centered',
};
