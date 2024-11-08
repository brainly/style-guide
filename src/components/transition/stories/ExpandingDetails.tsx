/* eslint-disable max-len */
import * as React from 'react';
import Box from '../../box/Box';
import Text from '../../text/Text';
import Button from '../../buttons/Button';
import Transition from '../Transition';
import Stage from './common/Stage';
import {useIsomorphicLayoutEffect} from '../../utils/useIsomorphicLayoutEffect';
import {useTransformationState} from './common/useTransformationState';

type ExampleDataType = Array<{
  color: string;
  shortContent: string;
  fullContent: React.ReactNode;
}>;
export const ExpandingDetails = () => {
  const containerRef = React.useRef(null);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <Stage ref={containerRef} className="sg-space-y-xs" format="portrait">
      {exampleData.map((dataProps, index) => (
        <ExpandableBox
          key={index}
          expanded={index === expandedIndex}
          containerRef={containerRef}
          onExpand={() => setExpandedIndex(index)}
          onCollapse={() => setExpandedIndex(null)}
          {...dataProps}
        />
      ))}
    </Stage>
  );
};

const ExpandableBox = ({
  color,
  expanded,
  containerRef,
  onExpand,
  onCollapse,
  ...contentProps
}: {
  color: string;
  shortContent: React.ReactNode;
  fullContent: React.ReactNode;
  expanded: boolean;
  containerRef: {
    current: HTMLElement | null;
  };
  onExpand: () => void;
  onCollapse: () => void;
}) => {
  const [animating, setAnimating] = React.useState(false);
  const [effects, setEffects] = React.useState({
    expandingBox: null,
    appearingContent: null,
  });
  const elementRef = React.useRef<HTMLDivElement>(null);
  const transformation = useTransformationState({
    elementRef,
    containerRef,
    updateKey: expanded,
  });
  const wrapperFixedHeight = React.useRef<number | string>();

  const handleExpand = () => {
    onExpand();

    if (elementRef.current) {
      wrapperFixedHeight.current = elementRef.current.clientHeight;
    }
  };

  const handleTransitionStart = () => {
    setAnimating(true);
  };

  const handleTransitionEnd = () => {
    setAnimating(false);

    if (!expanded) {
      wrapperFixedHeight.current = 'auto';
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (transformation.diffHeight === 0) {
      return;
    }

    /**
     * https://css-tricks.com/animating-layouts-with-the-flip-technique/
     */
    setEffects({
      // @ts-expect-error TS2322
      expandingBox: {
        initial: {
          transform: {
            translateY: -transformation.diffTop,
          },
          height: transformation.previousSnapshot?.height,
        },
        animate: {
          transform: {
            translateY: 0,
            origin: 'left top',
          },
          height: transformation.currentSnapshot?.height,
          duration: 'gentle1',
        },
      },
      // @ts-expect-error TS2322
      appearingContent: {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          duration: 'gentle2',
          easing: 'entry',
        },
      },
    });
  }, [transformation]);
  return (
    <div
      style={{
        height: wrapperFixedHeight.current,
      }}
    >
      <div ref={elementRef} style={getElementStyle(expanded, animating)}>
        <Transition
          active
          effect={effects.expandingBox}
          onTransitionStart={handleTransitionStart}
          onTransitionEnd={handleTransitionEnd}
        >
          <Box
            {...getBoxStylingProps(color)}
            onClick={expanded ? undefined : handleExpand}
          >
            <Transition
              active
              effect={effects.appearingContent}
              fillMode="backwards"
              delay={80}
            >
              <ExpandableBoxContent
                {...contentProps}
                expanded={expanded}
                onButtonClick={onCollapse}
              />
            </Transition>
          </Box>
        </Transition>
      </div>
    </div>
  );
};

const ExpandableBoxContent = ({
  expanded,
  shortContent,
  fullContent,
  onButtonClick,
}: {
  expanded: boolean;
  shortContent: React.ReactNode;
  fullContent: React.ReactNode;
  onButtonClick: () => void;
}) => {
  if (!expanded) {
    return <Text size="small">{shortContent}</Text>;
  }

  return (
    <>
      <Text size="small" className="sg-space-y-m">
        {fullContent}
      </Text>
      <Button
        variant="solid"
        style={{
          position: 'absolute',
          left: 24,
          bottom: 24,
          right: 24,
        }}
        onClick={onButtonClick}
      >
        close
      </Button>
    </>
  );
};

const exampleData: ExampleDataType = [
  {
    color: 'red',
    shortContent:
      'A hive of bees contains 27 bees when it is first discovered. After 3 days, there are 36 bees. It is determined that the population of bees increases exponentially.',
    fullContent: (
      <>
        <Text weight="bold" inherited>
          A hive of bees contains 27 bees when it is first discovered. After 3
          days, there are 36 bees. It is determined that the population of bees
          increases exponentially.
        </Text>
        <Text inherited>
          How many bees are will there be after 30 days? Express your answer as
          an exact value and rounded to the nearest whole number.
        </Text>
        <Text inherited>
          360. When the beehive was discovered, there were 27 bees. After 3
          days, the numbers of bee increased to 36. Progression Type:
          Exponential (also knows as geometry). Number of bees after 30 days is
          unknown.
        </Text>
      </>
    ),
  },
  {
    color: 'yellow',
    shortContent:
      'Louis Napoleon Bonaparte was the nephew of Napoleon Bonaparte.',
    fullContent: (
      <>
        <Text weight="bold" inherited>
          Louis Napoleon Bonaparte was the nephew of Napoleon Bonaparte.
        </Text>
        <Text inherited>
          Napoleon III, the nephew of Napoleon I, was the first elected
          President of France from 1848 to 1852. Louis Napoleon seized power in
          1851 and served as Emperor of the French from 1852 to 1870. He founded
          the Second French Empire and was its only emperor until the French
          army was defeated and he was captured by Prussia and its allies in the
          Franco-Prussian War in 1870.
        </Text>
        <Text inherited>
          He aimed to modernize the French economy, rebuilt the center of Paris,
          expanded the overseas empire.
        </Text>
      </>
    ),
  },
  {
    color: 'blue',
    shortContent:
      'Biology is a branch of science that studies about life and living organisms. It includes physical and chemical structure, development, and evolution of all living things. It seeks to answer questions about all living things.',
    fullContent: (
      <>
        <Text weight="bold" inherited>
          Biology is a branch of science that studies about life and living
          organisms. It includes physical and chemical structure, development,
          and evolution of all living things. It seeks to answer questions about
          all living things.
        </Text>
        <Text inherited>
          A biologist may ask about how plants maintain life processes. In
          Christian biology, biblical knowledge and faith are integrated in
          learning the evolution of the earth and the living things that consist
          it. Likewise, it states that God&apos;s signature is written in his
          creation or the living world is a testament of God&apos;s actions.
        </Text>
      </>
    ),
  },
];

// @ts-expect-error TS7006
const getElementStyle = (expanded, animating) => {
  if (expanded) {
    return {
      position: 'absolute',
      zIndex: 1,
      top: 16,
      left: 16,
      right: 16,
      bottom: 16,
    } as const;
  }

  if (animating) {
    return {
      height: '100%',
      position: 'relative',
      zIndex: 1,
    } as const;
  }

  return {
    cursor: 'pointer',
  } as const;
};

// @ts-expect-error TS7006
const getBoxStylingProps = color => {
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
  } as const;

  return {
    style: {
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    // @ts-expect-error TS7053
    color: colorsMap[color].backgroundColor,
    // @ts-expect-error TS7053
    borderColor: colorsMap[color].borderColor,
    border: true,
  } as const;
};

ExpandingDetails.parameters = {
  layout: 'centered',
};
