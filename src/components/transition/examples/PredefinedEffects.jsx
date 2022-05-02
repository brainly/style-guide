// @flow strict

import * as React from 'react';
import Flex from '../../flex/Flex';
import Transition from '../Transition';
import DummyBox from './common/DummyBox';
import Stage from './common/Stage';
import {predefinedEffects} from '../predefinedEffects';
import type {PredefinedEffectType} from '../predefinedEffects';

const predefinedEffectTypes = Object.keys(predefinedEffects);

export function PredefinedEffects() {
  return (
    <Flex style={{gap: 16}} wrap>
      {predefinedEffectTypes.map(type => (
        <PredefinedEffect key={type} type={type} />
      ))}
    </Flex>
  );
}

function PredefinedEffect({type}: {type: PredefinedEffectType}) {
  const [isActive, setIsActive] = React.useState(false);

  const effect = React.useMemo(() => {
    return Transition.createEffect({type});
  }, [type]);

  return (
    <Stage
      format="listitem"
      description={type}
      onClick={() => setIsActive(b => !b)}
      centered
    >
      <Transition active={isActive} effect={effect}>
        <DummyBox size="small" color="blue" />
      </Transition>
    </Stage>
  );
}
