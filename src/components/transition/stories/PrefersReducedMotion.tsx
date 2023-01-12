import * as React from 'react';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';

const fadeEffect = Transition.createEffect({
  type: 'fade',
});
const slideUpFadeEffect = Transition.createEffect({
  type: 'slideUpFade',
});

export const PrefersReducedMotion = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Stage
      onClick={() => setVisible(b => !b)}
      description={`click to ${visible ? 'hide' : 'show'}`}
      centered
    >
      <Transition
        active={visible}
        effect={reduced => (reduced ? fadeEffect : slideUpFadeEffect)}
      >
        <DummyBox size="medium" color="blue" />
      </Transition>
    </Stage>
  );
};
PrefersReducedMotion.parameters = {
  layout: 'centered',
};
