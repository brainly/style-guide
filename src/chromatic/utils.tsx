import * as React from 'react';
import './styles.scss';
import HoverStyle from './HoverStyle';

// This any type might be improved by looking at storybook types
export const generateChromaticStory: any = (
  module: any,
  options: {storiesToHover?: Array<string | React.FC>}
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
            <HoverStyle storyName={storyName} key={storyName || i}>
              <HoverStory {...module.default.args} {...HoverStory.args} />
            </HoverStyle>
          );
        })}
    </div>
  );
};

const mergeStories: any = module => {
  const stories = Object.keys(module)
    .filter(moduleExports => moduleExports !== 'default')
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
