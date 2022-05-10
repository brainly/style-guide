// @flow strict

import * as React from 'react';
import Button from '../../buttons/Button';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {useTransformationEffect} from '../useTransformationEffect';
import {TransformationContainer} from '../TransformationContainer';

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
  const [items, setItems] = React.useState(initialItems);

  const addItem = () => {
    setItems(prev => [++lastUniqueId, ...prev]);
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(n => n !== id));
  };

  return (
    <TransformationContainer stateKey={items.length}>
      <Stage className="sg-space-y-xs" format="portrait">
        <Button type="outline" onClick={addItem} fullWidth>
          add item
        </Button>

        {items.map((id, index) => (
          <FluidListItem
            key={id}
            index={index}
            isNewlyCreated={id === lastUniqueId}
            isSingleItem={items.length === 1}
            onRemove={() => removeItem(id)}
          />
        ))}
      </Stage>
    </TransformationContainer>
  );
}

const FluidListItem = ({
  index,
  isNewlyCreated,
  isSingleItem,
  onRemove,
}: {
  index: number,
  isNewlyCreated: boolean,
  isSingleItem: boolean,
  onRemove: () => void,
}) => {
  const elementRef = React.useRef(null);
  const [isRemoving, setIsRemoving] = React.useState(false);
  const movementEffect = useTransformationEffect({
    elementRef,
    duration: 'moderate1',
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
    const isMovingUp =
      Number(movementEffect?.initial?.transform?.translateY) > 0;

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
