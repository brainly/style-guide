import * as React from 'react';
import Button from '../../buttons/Button';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {useIsomorphicLayoutEffect} from '../../utils/useIsomorphicLayoutEffect';
import {useTransformationState} from './common/useTransformationState';

const appearingEffect = {
  initial: {
    opacity: 0,
    transform: {
      scale: 0.9,
    },
  },
  animate: {
    opacity: 1,
    duration: 'moderate1',
  },
};
const removingEffect = {
  animate: {
    opacity: 0,
    duration: 'quick2',
  },
};
const initialItemIds = [0, 1, 2, 3];

/**
 * It is greater than the ID of the last initial item to
 * not animate the already added items at the beginning.
 */
let lastUniqueId = initialItemIds.length;

export const FluidList = () => {
  const containerRef = React.useRef(null);
  const [itemIds, setItemIds] = React.useState(initialItemIds);

  const addItem = () => {
    setItemIds(prev => [++lastUniqueId, ...prev]);
  };

  const removeItem = (id: number) => {
    setItemIds(prev => prev.filter(n => n !== id));
  };

  return (
    <Stage ref={containerRef} className="sg-space-y-xs" format="portrait">
      <Button variant="outline" onClick={addItem} fullWidth>
        add item
      </Button>

      {itemIds.map((id, index) => (
        <FluidListItem
          key={id}
          index={index}
          updateKey={itemIds.length}
          containerRef={containerRef}
          lastCreated={id === lastUniqueId}
          siblingsAmount={itemIds.length - 1}
          onRemove={() => removeItem(id)}
        />
      ))}
    </Stage>
  );
};

const FluidListItem = ({
  index,
  updateKey,
  containerRef,
  lastCreated,
  siblingsAmount,
  onRemove,
}: {
  index: number;
  updateKey: number;
  containerRef: {
    current: HTMLElement | null;
  };
  lastCreated: boolean;
  siblingsAmount: number;
  onRemove: () => void;
}) => {
  const [removing, setRemoving] = React.useState(false);
  const [movementEffect, setMovementEffect] = React.useState(null);
  const elementRef = React.useRef(null);
  const transformation = useTransformationState({
    elementRef,
    containerRef,
    updateKey,
  });

  const getTransitionEffect = () => {
    if (removing) {
      return removingEffect;
    }

    if (lastCreated) {
      return appearingEffect;
    }

    return movementEffect;
  };

  const getTransitionDelay = () => {
    const appearingDelay = 180;
    const delayOffset = 20;

    if (removing || siblingsAmount === 0) {
      return 0;
    }

    if (lastCreated) {
      return appearingDelay;
    }

    /**
     * To simulate weightlessness we can delay the
     * transition of each item when it moves upward.
     */
    if (transformation.diffTop < 0) {
      return appearingDelay + delayOffset * index;
    }

    return 0;
  };

  useIsomorphicLayoutEffect(() => {
    if (transformation.diffTop !== 0) {
      /**
       * https://css-tricks.com/animating-layouts-with-the-flip-technique/
       */
      setMovementEffect({
        // @ts-expect-error TS2353
        initial: {
          transform: {
            translateY: -transformation.diffTop,
          },
        },
        animate: {
          transform: {
            translateY: 0,
            duration: 'moderate1',
          },
        },
      });
    }
  }, [transformation]);
  return (
    <div ref={elementRef}>
      <Transition
        active
        // @ts-expect-error TS2322
        effect={getTransitionEffect()}
        delay={getTransitionDelay()}
        onTransitionEnd={removing ? onRemove : undefined}
        fillMode="backwards"
      >
        <DummyBox
          color="blue"
          size="listitem"
          onClick={() => setRemoving(true)}
        />
      </Transition>
    </div>
  );
};

FluidList.parameters = {
  layout: 'centered',
};
