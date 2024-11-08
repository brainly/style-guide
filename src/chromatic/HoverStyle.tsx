import * as React from 'react';

const generateUnhoveredSelector = (
  rule: CSSStyleRule,
  hoverContainerId: string,
  conditionText?: string
) => {
  const {selectorText} = rule;

  if (!selectorText) {
    return;
  }

  const hoverSelectorText = selectorText
    .split(', ')
    .filter(
      text =>
        (text.includes(':hover') || text.includes('--hover')) &&
        !text.includes(':not(:hover)')
    )
    .map(selector =>
      `#${hoverContainerId} ${selector}`
        .replace(/:hover/i, '')
        .replace(/--hover/i, '')
    )
    .join(', ');

  if (!hoverSelectorText) {
    return;
  }

  const newSelectorText = rule.cssText.replace(selectorText, hoverSelectorText);

  return conditionText && !conditionText.includes('hover: hover')
    ? `@media ${conditionText}) {${newSelectorText}}`
    : newSelectorText;
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

  // @ts-expect-error TS18047
  if (!hoverStylesheet.cssRules || hoverStylesheet.cssRules.length !== 0) {
    return;
  }

  const insertUnhoveredRule = (unhoveredSelector: string) => {
    if (unhoveredSelector) {
      // @ts-expect-error TS18047
      hoverStylesheet.insertRule(
        unhoveredSelector,
        // @ts-expect-error TS18047
        hoverStylesheet.cssRules.length
      );
    }
  };

  // insert "hover" styles to the new stylesheet
  Array.from(stylesheets).forEach(stylesheet => {
    Array.from(stylesheet.cssRules).forEach(rule => {
      const {conditionText} = rule as CSSMediaRule;

      if (conditionText) {
        Array.from((rule as CSSGroupingRule).cssRules).forEach(r => {
          insertUnhoveredRule(
            // @ts-expect-error TS2345
            generateUnhoveredSelector(
              r as CSSStyleRule,
              hoverContainerId,
              conditionText
            )
          );
        });
      } else {
        insertUnhoveredRule(
          // @ts-expect-error TS2345
          generateUnhoveredSelector(rule as CSSStyleRule, hoverContainerId)
        );
      }
    });
  });
};

// This any type might be improved by looking at storybook types
const HoverStyle = ({
  children,
  storyName,
}: {
  children: React.ReactNode;
  storyName?: string;
}) => {
  const styleheetRef = React.useRef<HTMLLinkElement>(null);

  const hoverContainerId = 'hover-container';

  React.useEffect(() => {
    // @ts-expect-error TS2345
    applyHoverStates(hoverContainerId, styleheetRef.current);
  }, []);

  return (
    <div id={hoverContainerId}>
      <style ref={styleheetRef} />
      <h3 className="component__story-name">{storyName} - hover styles</h3>
      {children}
    </div>
  );
};

export default HoverStyle;
