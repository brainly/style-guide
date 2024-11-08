import React from 'react';
import {useFirstPaint} from './useFirstPaint';
import './_use-first-paint-example.scss';
import classNames from 'classnames';

export const Example = () => {
  const animatedElementRef = React.useRef<HTMLDivElement>();
  const shouldAnimateRef = React.useRef(false);
  const [isToggled, setIsToggled] = React.useState(true);
  const handleClick = React.useCallback(() => {
    setIsToggled(!isToggled);

    if (shouldAnimateRef.current) {
      // @ts-expect-error TS18048
      animatedElementRef.current.style.animationDuration = '';
    }
  }, [isToggled]);

  React.useLayoutEffect(() => {
    // @ts-expect-error TS18048
    animatedElementRef.current.style.animationDuration = '0ms';
  }, []);

  useFirstPaint(() => {
    shouldAnimateRef.current = true;
  });

  return (
    <div>
      <div style={{height: 300, width: 600}}>
        <div
          className={classNames('use-first-paint-example-box', {
            'use-first-paint-example-box--toggled': isToggled,
          })}
          onClick={handleClick}
          // @ts-expect-error TS2322
          ref={animatedElementRef}
        >
          Click me
        </div>
      </div>
    </div>
  );
};
