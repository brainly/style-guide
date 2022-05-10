// @flow strict

/* eslint-disable max-len */
import * as React from 'react';
import Box from '../../box/Box';
import Text from '../../text/Text';
import Button from '../../buttons/Button';

import Transition from '../Transition';
import Stage from './common/Stage';
import {useTransformationState} from './common/useTransformationState';

export function ExpandingDetails() {
  const containerRef = React.useRef(null);

  return (
    <Stage ref={containerRef} className="sg-space-y-xs" format="portrait">
      <ExpandableBox
        color="red"
        containerRef={containerRef}
        content="A hive of bees contains 27 bees when it is first discovered. After 3 days, there are 36 bees. It is determined that the population of bees increases exponentially.[break]How many bees are will there be after 30 days? Express your answer as an exact value and rounded to the nearest whole number.[break]360. When the beehive was discovered, there were 27 bees. After 3 days, the numbers of bee increased to 36. Progression Type: Exponential (also knows as geometry). Number of bees after 30 days is unknown."
      />
      <ExpandableBox
        color="yellow"
        containerRef={containerRef}
        content="Louis Napoleon Bonaparte was the nephew of Napoleon Bonaparte.[break]Napoleon III, the nephew of Napoleon I, was the first elected President of France from 1848 to 1852. Louis Napoleon seized power in 1851 and served as Emperor of the French from 1852 to 1870. He founded the Second French Empire and was its only emperor until the French army was defeated and he was captured by Prussia and its allies in the Franco-Prussian War in 1870.[break]He aimed to modernize the French economy, rebuilt the center of Paris, expanded the overseas empire."
      />
      <ExpandableBox
        color="blue"
        containerRef={containerRef}
        content="Biology is a branch of science that studies about life and living organisms. It includes physical and chemical structure, development, and evolution of all living things. It seeks to answer questions about all living things.[break]A biologist may ask about how plants maintain life processes. In Christian biology, biblical knowledge and faith are integrated in learning the evolution of the earth and the living things that consist it. Likewise, it states that God's signature is written in his creation or the living world is a testament of God's actions."
      />
    </Stage>
  );
}

const emptyEffects = {
  expanding: null,
  appearing: null,
};

function ExpandableBox({
  color,
  containerRef,
  content,
}: {
  color: 'red' | 'yellow' | 'blue',
  containerRef: {current: HTMLElement | null},
  content: string,
}) {
  const paragraphs = content.split('[break]');
  const wrapperFixedHeight = React.useRef<number | 'auto'>('auto');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [effects, setEffects] = React.useState(emptyEffects);

  const elementRef = React.useRef(null);
  const transformation = useTransformationState({
    elementRef,
    containerRef,
    updateKey: isExpanded,
  });

  const handleClosedBoxClick = () => {
    setIsExpanded(true);
    setIsAnimating(true);

    if (elementRef.current) {
      wrapperFixedHeight.current = elementRef.current.clientHeight;
    }
  };

  const handleCloseButtonClick = () => {
    setIsExpanded(false);
    setIsAnimating(true);
  };

  const handleExpandingTransitionEnd = () => {
    setIsAnimating(false);

    if (!isExpanded) {
      wrapperFixedHeight.current = 'auto';
    }
  };

  React.useLayoutEffect(() => {
    if (transformation.diffHeight === 0) {
      return;
    }

    /**
     * https://css-tricks.com/animating-layouts-with-the-flip-technique/
     */
    setEffects({
      expanding: {
        initial: {
          transform: {translateY: -transformation.diffTop},
          height: transformation.previousSnapshot?.height,
        },
        animate: {
          transform: {translateY: 0, origin: 'left top'},
          height: transformation.currentSnapshot?.height,
          duration: 'gentle1',
        },
      },
      appearing: {
        initial: {opacity: 0},
        animate: {opacity: 1, duration: 'gentle2', easing: 'entry'},
      },
    });
  }, [transformation]);

  return (
    <div style={{height: wrapperFixedHeight.current}}>
      <div ref={elementRef} style={getElementStyle({isExpanded, isAnimating})}>
        <Transition
          active
          effect={effects.expanding}
          onTransitionEnd={handleExpandingTransitionEnd}
        >
          <Box
            style={{height: '100%', position: 'relative', overflow: 'hidden'}}
            onClick={isExpanded ? undefined : handleClosedBoxClick}
            color={colorsMap[color].backgroundColor}
            borderColor={colorsMap[color].borderColor}
            border
          >
            <Transition
              active
              effect={effects.appearing}
              fillMode="backwards"
              delay={80}
            >
              {isExpanded ? (
                <>
                  <Text size="small" className="sg-space-y-m">
                    {paragraphs.map((text, index) =>
                      index === 0 ? (
                        <strong key={index}>{text}</strong>
                      ) : (
                        <p key={index}>{text}</p>
                      )
                    )}
                  </Text>
                  <Button
                    type="solid"
                    style={{
                      position: 'absolute',
                      left: 24,
                      bottom: 24,
                      right: 24,
                    }}
                    onClick={handleCloseButtonClick}
                  >
                    close
                  </Button>
                </>
              ) : (
                <Text size="small">{paragraphs[0]}</Text>
              )}
            </Transition>
          </Box>
        </Transition>
      </div>
    </div>
  );
}

ExpandingDetails.parameters = {
  layout: 'centered',
};

const getElementStyle = ({isExpanded, isAnimating}) => {
  if (isExpanded) {
    return {
      position: 'absolute',
      zIndex: 1,
      top: 16,
      left: 16,
      right: 16,
      bottom: 16,
    };
  }

  if (isAnimating) {
    return {
      height: '100%',
      position: 'relative',
      zIndex: 1,
    };
  }

  return {
    cursor: 'pointer',
  };
};

const colorsMap = {
  red: {
    backgroundColor: 'red-30',
    borderColor: 'red-40',
  },
  yellow: {
    backgroundColor: 'yellow-20',
    borderColor: 'yellow-40',
  },
  blue: {
    backgroundColor: 'blue-30',
    borderColor: 'blue-40',
  },
};
