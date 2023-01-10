import * as React from 'react';
import Flex from '../../flex/Flex';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {predefinedEffects} from '../predefinedEffects';
import type {PredefinedEffectType} from '../predefinedEffects';

const predefinedEffectTypes = Object.keys(predefinedEffects);
export const PredefinedEffects = () => (
  <Flex
    style={{
      gap: 16,
    }}
    wrap
    justifyContent="center"
  >
    {predefinedEffectTypes.map(type => (
      <PredefinedEffect key={type} type={type} />
    ))}
  </Flex>
);

const PredefinedEffect = ({type}: {type: PredefinedEffectType}) => {
  const [active, setActive] = React.useState(false);
  const effect = React.useMemo(() => {
    return Transition.createEffect({
      type,
    });
  }, [type]);
  return (
    <Stage
      format="listitem"
      description={type}
      onClick={() => setActive(b => !b)}
      centered
    >
      <Transition active={active} effect={effect}>
        <DummyBox size="small" color="blue" />
      </Transition>
    </Stage>
  );
};
