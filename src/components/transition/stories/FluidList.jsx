// @flow strict

import * as React from 'react';
import Button from '../../buttons/Button';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {useTransformationState} from './common/useTransformationState';

const appearingEffect = {
  initial: {opacity: 0, transform: {scale: 0.9}},
  animate: {opacity: 1, duration: 'moderate1'},
};

const removingEffect = {
  animate: {opacity: 0, duration: 'quick2'},
};

const initialItems = [0, 1, 2, 3];

// greater than last item to not animate the entry
let lastUniqueId = initialItems.length;

export function FluidList() {
  const updateKey = React.useRef(0);
  const containerRef = React.useRef(null);
  const [items, setItems] = React.useState(initialItems);

  const addItem = () => {
    setItems(prev => [++lastUniqueId, ...prev]);
    updateKey.current += 1;
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(n => n !== id));
    updateKey.current += 1;
  };

  return (
    <Stage ref={containerRef} className="sg-space-y-xs" format="portrait">
      <Button type="outline" onClick={addItem} fullWidth>
        add item
      </Button>

      {items.map((id, index) => (
        <FluidListItem
          key={id}
          index={index}
          updateKey={updateKey.current}
          containerRef={containerRef}
          isNewlyCreated={id === lastUniqueId}
          isSingleItem={items.length === 1}
          onRemove={() => removeItem(id)}
        />
      ))}
    </Stage>
  );
}

const FluidListItem = ({
  index,
  updateKey,
  containerRef,
  isNewlyCreated,
  isSingleItem,
  onRemove,
}: {
  index: number,
  updateKey: number,
  containerRef: {current: HTMLElement | null},
  isNewlyCreated: boolean,
  isSingleItem: boolean,
  onRemove: () => void,
}) => {
  const [isRemoving, setIsRemoving] = React.useState(false);
  const [movementEffect, setMovementEffect] = React.useState(null);

  const elementRef = React.useRef(null);
  const transformation = useTransformationState({
    elementRef,
    containerRef,
    updateKey,
  });

  const getTransitionEffect = () => {
    if (isRemoving) {
      return removingEffect;
    }

    if (isNewlyCreated) {
      return appearingEffect;
    }

    return movementEffect;
  };

  const getTransitionDelay = () => {
    const appearingDelay = 180;
    const isMovingUp = transformation.diffTop < 0;

    if (isRemoving || isSingleItem) {
      return 0;
    }

    if (isNewlyCreated) {
      return appearingDelay;
    }

    if (isMovingUp) {
      return appearingDelay + index * 20;
    }

    return 0;
  };

  React.useLayoutEffect(() => {
    if (transformation.diffTop === 0) {
      return;
    }

    /**
     * https://css-tricks.com/animating-layouts-with-the-flip-technique/
     */
    setMovementEffect({
      initial: {
        transform: {translateY: -transformation.diffTop},
      },
      animate: {
        transform: {translateY: 0, duration: 'moderate1', easing: 'regular'},
      },
    });
  }, [transformation]);

  return (
    <div ref={elementRef}>
      <Transition
        active
        effect={getTransitionEffect()}
        delay={getTransitionDelay()}
        onTransitionEnd={isRemoving ? onRemove : undefined}
        fillMode="backwards"
      >
        <DummyBox
          color="blue"
          size="listitem"
          onClick={() => setIsRemoving(true)}
        />
      </Transition>
    </div>
  );
};

FluidList.parameters = {
  layout: 'centered',
};
