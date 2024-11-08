import * as React from 'react';
import './styles.scss';
import HoverStyle from './HoverStyle';
import {
  breakpoints,
  ResponsivePropType,
} from '../components/utils/responsive-props';

// This any type might be improved by looking at storybook types
export const generateChromaticStory: any = (
  module: any,
  options: {storiesToHover?: Array<string | React.FC>} = {}
) => {
  const mergedStories = mergeStories(module);
  const {storiesToHover} = options;

  return () => (
    <div>
      {mergedStories}
      {storiesToHover &&
        storiesToHover.map((storyToHover, i) => {
          const isNew = typeof storyToHover !== 'string';
          const HoverStory = isNew
            ? storyToHover || null
            : module[storyToHover];

          const storyName = !isNew && storyToHover;

          return (
            // @ts-ignore TS2322
            <HoverStyle storyName={storyName} key={storyName || i}>
              <HoverStory {...module.default.args} {...HoverStory.args} />
            </HoverStyle>
          );
        })}
    </div>
  );
};

// @ts-ignore TS7006
const mergeStories: any = module => {
  const stories = Object.keys(module)
    .filter(
      moduleExports =>
        moduleExports !== 'default' &&
        !module[moduleExports].parameters?.chromatic?.disableSnapshot
    )
    .map(moduleExportName => {
      return {
        name: moduleExportName,
        fn: module[moduleExportName],
      };
    });

  return stories.map(story => {
    const Component = story.fn;

    return (
      <div key={story.name}>
        <h3 className="component__story-name">{story.name}</h3>
        <Component {...module.default.args} {...Component.args} />
      </div>
    );
  });
};

export const responsivePropsStoryLabel = (
  prop: string,
  respValue: ResponsivePropType<any>
): React.ReactNode => {
  let formattedValue = '';

  if (Array.isArray(respValue)) {
    for (let i = 0; i < 4; i++) {
      formattedValue += `${breakpoints[i]}: ${respValue[i]} ${
        i < 3 ? ' / ' : ''
      }`;
    }
  } else if (typeof respValue === 'object') {
    breakpoints.forEach(breakpoint => {
      formattedValue += `${breakpoint}: ${respValue[breakpoint]} ${
        breakpoint !== 'xl' ? ' / ' : ''
      }`;
    });
  }

  return (
    <div>
      {prop}
      <div>{formattedValue}</div>
    </div>
  );
};
