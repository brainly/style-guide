// @flow strict

import * as React from 'react';
import {useTransformationContext} from './TransformationContainer';
import type {PredefinedDurationType, TransitionEffectType} from './Transition';

type ElementSnapshotType = $ReadOnly<{
  left: number,
  top: number,
  width: number,
  height: number,
}>;

export function useTransformationEffect({
  elementRef,
  properties = 'translate-scale',
  duration = 'gentle1',
}: {
  elementRef: {current: HTMLElement | null},
  properties?: 'translate-scale' | 'translate-width-height',
  duration?: PredefinedDurationType | number,
}) {
  const {transformationChange} = useTransformationContext();
  const [effect, setEffect] = React.useState<TransitionEffectType | null>(null);
  const snapshotRef = React.useRef<ElementSnapshotType | void>();

  React.useLayoutEffect(() => {
    const observer = ({container}) => {
      const element = elementRef.current;

      if (!element) {
        return;
      }

      const previous = snapshotRef.current;
      const current = createElementSnapshot({
        element,
        container,
      });

      snapshotRef.current = current;
      if (previous === undefined) {
        return;
      }

      /**
       * https://aerotwist.com/blog/flip-your-animations/
       */
      const invertedTranslateX = -(current.left - previous.left);
      const invertedTranslateY = -(current.top - previous.top);

      if (properties === 'translate-width-height') {
        const hasChangedWidth = current.width !== previous.width;
        const hasChangedHeight = current.height !== previous.height;

        setEffect({
          initial: {
            transform: {
              translateX: invertedTranslateX,
              translateY: invertedTranslateY,
            },
            width: hasChangedWidth ? previous.width : 'auto',
            height: hasChangedHeight ? previous.height : 'auto',
          },
          animate: {
            transform: {
              translateX: 0,
              translateY: 0,
            },
            width: hasChangedWidth ? current.width : 'auto',
            height: hasChangedHeight ? current.height : 'auto',
            easing: 'regular',
            duration,
          },
        });
      } else {
        const invertedScaleX = previous.width / current.width;
        const invertedScaleY = previous.height / current.height;

        setEffect({
          initial: {
            transform: {
              translateX: invertedTranslateX,
              translateY: invertedTranslateY,
              scaleX: invertedScaleX,
              scaleY: invertedScaleY,
            },
          },
          animate: {
            transform: {
              origin: 'left top',
              translateX: 0,
              translateY: 0,
              scale: 1,
            },
            easing: 'regular',
            duration,
          },
        });
      }
    };

    transformationChange.subscribe(observer);
    return () => transformationChange.unsubscribe(observer);
  }, [transformationChange, elementRef, properties, duration]);

  return effect;
}

function createElementSnapshot({
  element,
  container,
}: {
  element: HTMLElement,
  container: HTMLElement,
}): ElementSnapshotType {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    left: elementRect.left - containerRect.left,
    top: elementRect.top - containerRect.top,
    width: elementRect.width,
    height: elementRect.height,
  };
}
