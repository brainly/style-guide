import * as React from 'react';

const generateUnhoveredSelector = (
  rule: CSSStyleRule,
  hoverContainerId: string
) => {
  const {selectorText} = rule;

  if (!selectorText) {
    return;
  }

  const hoverSelectorText = selectorText
    .split(', ')
    .filter(text => text.includes(':hover') || text.includes('--hover'))
    .map(selector =>
      `#${hoverContainerId} ${selector}`
        .replace(/:hover/i, '')
        .replace(/--hover/i, '')
    )
    .join(', ');

  if (!hoverSelectorText) {
    return;
  }

  return `${rule.cssText.replace(selectorText, hoverSelectorText)}`;
};

const applyHoverStates = (
  hoverContainerId: string,
  hStylesheet: HTMLLinkElement
) => {
  const stylesheets = document.styleSheets;

  if (!stylesheets || !hStylesheet) {
    return;
  }

  const hoverStylesheet = hStylesheet.sheet;

  if (!hoverStylesheet.cssRules || hoverStylesheet.cssRules.length !== 0) {
    return;
  }

  const insertUnhoveredRule = (unhoveredSelector: string) => {
    if (unhoveredSelector) {
      hoverStylesheet.insertRule(
        unhoveredSelector,
        hoverStylesheet.cssRules.length
      );
    }
  };

  // insert "hover" styles to the new stylesheet
  Array.from(stylesheets).forEach(stylesheet => {
    Array.from(stylesheet.cssRules).forEach(rule => {
      insertUnhoveredRule(
        generateUnhoveredSelector(rule as CSSStyleRule, hoverContainerId)
      );

      if ((rule as CSSMediaRule).media) {
        Array.from((rule as CSSGroupingRule).cssRules).forEach(rule => {
          insertUnhoveredRule(
            generateUnhoveredSelector(rule as CSSStyleRule, hoverContainerId)
          );
        });
      }
    });
  });
};

// This any type might be improved by looking at storybook types
const HoverStory = ({
  module,
  storyToHoverName,
}: {
  module: any;
  storyToHoverName: string;
}) => {
  const Component = module[storyToHoverName];
  const styleheetRef = React.useRef<HTMLLinkElement>(null);

  const hoverContainerId = 'hover-container';

  React.useEffect(() => {
    applyHoverStates(hoverContainerId, styleheetRef.current);
  }, []);

  return (
    <div id={hoverContainerId}>
      <style ref={styleheetRef} />
      <h3 className="component__story-name">hover styles</h3>
      <Component {...module.default.args} {...Component.args} />
    </div>
  );
};

export default HoverStory;
