import * as React from 'react';
import Button from '../../buttons/Button';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';

const items = [0, 1, 2, 3, 4, 5];
const fadeEffect = {
  initial: {
    opacity: 0,
    transform: {
      translateY: 's',
    },
  },
  animate: {
    opacity: 1,
    duration: 'moderate1',
    easing: 'entry',
  },
  exit: {
    opacity: 0,
    duration: 'quick1',
    easing: 'exit',
  },
};
const delayOffset = 20;

export const StaggeredMotion = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Stage className="sg-space-y-xs" format="portrait">
      <Button variant="outline" onClick={() => setOpen(b => !b)} fullWidth>
        {open ? 'close' : 'open'}
      </Button>

      {items.map((id, index) => (
        <Transition
          key={id}
          active={open}
          effect={fadeEffect}
          delay={open ? delayOffset * index : 0}
        >
          <DummyBox color="blue" size="listitem" />
        </Transition>
      ))}
    </Stage>
  );
};
StaggeredMotion.parameters = {
  layout: 'centered',
};
