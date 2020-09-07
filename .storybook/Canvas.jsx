import React, {useState} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

// TODO just proof of concept, needs refactor
export function Canvas({children}) {
  const [isVisible, setIsVisible] = useState(false);

  const childrenArray = Array.isArray(children) ? children : [children];

  const stories = childrenArray.filter(
    (c) => c.props && (c.props.id || c.props.name)
  );

  function toggleShowCode() {
    setIsVisible(!isVisible);
  }

  return <>
    <div style={{position: 'relative', padding: '16px 16px 48px 16px', border: '1px solid #ededed', borderRadius: '8px'}}>
      {children}
      <button onClick={toggleShowCode} style={{position: 'absolute', bottom: 0, right: 0}}>{isVisible ? 'hide code' : 'show code'}</button>
    </div>

      {isVisible && <div style={{background: '#ededed', margin: '24px 0px', fontFamily: 'monospace', fontSize: '14px'}}>
        {stories.map(story => {
          const storyChildren = story.props.children;
          const storyChildrenArray = Array.isArray(storyChildren) ? storyChildren : [storyChildren];

          return storyChildrenArray.map((storyChild, index) => {
            const element = typeof storyChild === 'function' ? storyChild() : storyChild;
            const staticMarkup = renderToStaticMarkup(element);

            return staticMarkup
          })
        })}
      </div>}
  </>;
}
