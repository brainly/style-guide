// @flow strict

import * as React from 'react';
import Bubble from '../../bubble/Bubble';
import Text from '../../text/Text';
import Button from '../../buttons/Button';
import Icon from '../../icons/Icon';

import Transition from '../Transition';
import Stage from './common/Stage';

const fadeEffect = {
  initial: {opacity: 0},
  animate: {opacity: 1, duration: 'moderate1', easing: 'entry'},
  exit: {opacity: 0, duration: 'quick2', easing: 'exit'},
};

const containerSlideEffect = {
  initial: {
    opacity: 0,
    transform: {translateY: '-m', scaleY: 0.5},
  },
  animate: {
    opacity: {value: 1, duration: 'quick2'},
    transform: {translateY: 0, duration: 'gentle1', origin: 'left top'},
    easing: 'entry',
  },
  exit: {
    opacity: 0,
    transform: {translateY: '-m'},
    duration: 'quick2',
    easing: 'exit',
  },
};

/**
 * A content transformation opposite to the container
 * transformation will keep the height of the content
 * while animating the container.
 */
const contentCounterSlideEffect = {
  initial: {
    // counter scale...
    transform: {scaleY: 1.5},
  },
  animate: {
    // with the same duration and easing as container
    transform: {scaleY: 1, duration: 'gentle1', origin: 'left top'},
    easing: 'entry',
  },
};

export function OffsetBehavior() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Stage portrait>
      <Transition active={isExpanded} effect={containerSlideEffect}>
        <Bubble
          color="blue-30"
          direction="top"
          style={{padding: 24, marginTop: 64}}
          noShadow
        >
          <Transition
            active={isExpanded}
            effect={fadeEffect}
            fillMode="backwards"
            delay={100}
          >
            <Transition
              active={isExpanded}
              effect={contentCounterSlideEffect}
              fillMode="backwards"
              className="sg-space-y-s"
            >
              <Text size="small" weight="bold">
                Louis Napoleon Bonaparte was the nephew of Napoleon Bonaparte.
              </Text>
              <Text size="small">
                Napoleon III, the nephew of Napoleon I, was the first elected
                President of France from 1848 to 1852. Louis Napoleon seized
                power in 1851 and served as Emperor of the French from 1852 to
                1870. He founded the Second French Empire and was its only
                emperor until the French army was defeated and he was captured
                by Prussia and its allies in the Franco-Prussian War in 1870.
              </Text>
              <Text size="small">
                He aimed to modernize the French economy, rebuilt the center of
                Paris, expanded the overseas empire.
              </Text>
            </Transition>
          </Transition>
        </Bubble>
      </Transition>

      <div
        style={{
          position: 'absolute',
          top: 24,
          left: '50%',
          marginLeft: -20,
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
