import * as React from 'react';
import Transition from '../Transition';
import type {TransitionEffectType} from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {useIsomorphicLayoutEffect} from '../../utils/useIsomorphicLayoutEffect';
import {useTransformationState} from './common/useTransformationState';

export const CurvedMovement = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [effects, setEffects] = React.useState<
    Record<string, TransitionEffectType | null>
  >({
    xMove: null,
    yMove: null,
    scale: null,
  });
  const elementRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const transformation = useTransformationState({
    elementRef,
    containerRef,
    updateKey: expanded,
  });
  const prevTransformation = React.useRef<typeof transformation>();

  useIsomorphicLayoutEffect(() => {
    if (
      transformation.diffTop === 0 ||
      transformation === prevTransformation.current
    ) {
      return;
    }

    prevTransformation.current = transformation;
    const origin = 'left top';
    const duration = 240;

    /**
     * https://tobiasahlin.com/blog/curved-path-animations-in-css/
     * The time difference between axes curves the trajectory of motion.
     */
    const differenceFactor = 0.4;
    const xMoveDuration = expanded
      ? duration * (1 - differenceFactor)
      : duration * (1 + differenceFactor);

    setEffects({
      xMove: {
        initial: {
          transform: {
            translateX: -transformation.diffLeft,
          },
        },
        animate: {
          transform: {
            translateX: 0,
            origin,
            duration: xMoveDuration,
          },
        },
      },
      yMove: {
        initial: {
          transform: {
            translateY: -transformation.diffTop,
          },
        },
        animate: {
          transform: {
            translateY: 0,
            origin,
            duration,
          },
        },
      },
      scale: {
        initial: {
          transform: {
            scale: 1 - transformation.diffScaleX,
          },
        },
        animate: {
          transform: {
            scale: 1,
            origin,
            duration,
          },
        },
      },
    });
  }, [expanded, transformation]);
  return (
    <Stage ref={containerRef} centered overflowHidden>
      <div style={getBoxStyle(expanded)}>
        <Transition active effect={effects.xMove}>
          <Transition active effect={effects.yMove}>
            <Transition active effect={effects.scale}>
              <DummyBox
                ref={elementRef}
                size={expanded ? 'medium' : 'small'}
                onClick={() => setExpanded(b => !b)}
                color="blue"
              />
            </Transition>
          </Transition>
        </Transition>
      </div>
    </Stage>
  );
};

// @ts-expect-error TS7006
const getBoxStyle = expanded => {
  if (!expanded) {
    return {
      position: 'absolute',
      right: 16,
      bottom: 16,
    } as const;
  }
};

CurvedMovement.parameters = {
  layout: 'centered',
};
