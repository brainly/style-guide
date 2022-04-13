// @flow strict

import * as React from 'react';
import Box from '../../box/Box';
import Text from '../../text/Text';
import Button from '../../buttons/Button';
import Icon from '../../icons/Icon';

import Transition from '../Transition';
import Stage from './common/Stage';

const slideEffect = {
  initial: {
    opacity: 0,
    transform: {translateY: 'm'},
  },
  animate: {
    opacity: {value: 1, duration: 'quick2'},
    transform: {translateY: 0, duration: 'moderate2'},
    easing: 'entry',
  },
  exit: {
    opacity: 0,
    transform: {translateY: 'm'},
    duration: 'quick2',
    easing: 'exit',
  },
};

export function OffsetBehavior() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Stage portrait centered>
      <Transition effect={slideEffect} active={isExpanded}>
        <Box color="blue-30" className="sg-space-y-s">
          <Text size="small" weight="bold">
            Louis Napoleon Bonaparte was the nephew of Napoleon Bonaparte.
          </Text>
          <Text size="small">
            Napoleon III, the nephew of Napoleon I, was the first elected
            President of France from 1848 to 1852. Louis Napoleon seized power
            in 1851 and served as Emperor of the French from 1852 to 1870. He
            founded the Second French Empire and was its only emperor until the
            French army was defeated and he was captured by Prussia and its
            allies in the Franco-Prussian War in 1870.
          </Text>
          <Text size="small">
            He aimed to modernize the French economy, rebuilt the center of
            Paris, expanded the overseas empire.
          </Text>
        </Box>
      </Transition>

      <div
        style={{
          position: 'absolute',
          marginLeft: -20,
          left: '50%',
          bottom: 24,
        }}
      >
        <Button
          type="solid"
          icon={<Icon type={isExpanded ? 'close' : 'plus'} />}
          onClick={() => setIsExpanded(b => !b)}
          iconOnly
        />
      </div>
    </Stage>
  );
}

OffsetBehavior.parameters = {
  layout: 'centered',
};
