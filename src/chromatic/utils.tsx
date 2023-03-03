import * as React from 'react';
import './styles.scss';
import HoverStory from './HoverStory';

// This any type might be improved by looking at storybook types
export const mergeStories: any = (module, storyToHoverName) => {
  const stories = Object.keys(module)
    .filter(moduleExports => moduleExports !== 'default')
    .map(moduleExportName => {
      return {
        name: moduleExportName,
        fn: module[moduleExportName],
      };
    });

  return () => (
    <div>
      {stories.map(story => {
        const Component = story.fn;

        return (
          <div key={story.name}>
            <h3 className="component__story-name">{story.name}</h3>
            <Component {...module.default.args} {...Component.args} />
          </div>
        );
      })}
      {storyToHoverName && (
        <HoverStory module={module} storyToHoverName={storyToHoverName} />
      )}
    </div>
  );
};
