import * as React from "react";
import "./styles.scss";
export const mergeStories = (module) => {
  const stories = Object.keys(module)
    .filter((moduleExports) => moduleExports !== "default")
    .map((moduleExportName) => {
      return {
        name: moduleExportName,
        fn: module[moduleExportName],
      };
    });
  return () =>
    stories.map((story) => {
      const Component = story.fn;
      return (
        <div key={story.name}>
          <h3 className="component__story-name">{story.name}</h3>
          <Component {...module.default.args} {...Component.args} />
        </div>
      );
    });
};