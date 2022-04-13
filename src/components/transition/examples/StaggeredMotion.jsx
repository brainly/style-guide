// @flow strict

import * as React from 'react';
import Button from '../../buttons/Button';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';

const items = [0, 1, 2, 3, 4, 5];

const fadeEffect = {
  initial: {opacity: 0, transform: {translateY: 's'}},
  animate: {opacity: 1, duration: 'moderate1', easing: 'entry'},
  exit: {opacity: 0, duration: 'quick1', easing: 'exit'},
};

export function StaggeredMotion() {
  const [open, setOpen] = React.useState(false);

  return (
    <Stage className="sg-space-y-xs" portrait>
      <Button type="outline" onClick={() => setOpen(b => !b)} fullWidth>
        {open ? 'close' : 'open'}
      </Button>

      {items.map((id, index) => (
        <Transition
          key={id}
          active={open}
          effect={fadeEffect}
          delay={open ? index * 20 : 0}
        >
          <DummyBox color="blue" size="listitem" />
        </Transition>
      ))}
    </Stage>
  );
}

StaggeredMotion.parameters = {
  layout: 'centered',
};
