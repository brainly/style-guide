import React from 'react';
import {useFirstPaint} from './useFirstPaint';
import './_use-first-paint-example.scss';

export const Example = () => {
  const expandableRef = React.useRef<HTMLDivElement>();
  const isFirstPaintRef = useFirstPaint();
  const [isToggled, setIsToggled] = React.useState(true);

  const handleClick = React.useCallback(() => {
    setIsToggled(!isToggled);
  }, [isToggled]);

  return (
    <div style={{height: 300, width: 600}}>
      <div
        onClick={handleClick}
        ref={expandableRef}
        style={{
          position: 'absolute',
          height: 200,
          width: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--blue-40)',
          color: 'var(--white)',
          borderRadius: 'var(--border-radius-xs)',
          cursor: 'pointer',
          animationName: isToggled
            ? 'useFirstPaintExampleToggleOn'
            : 'useFirstPaintExampleToggleOff',
          animationDuration: isFirstPaintRef.current ? '0' : '1000ms',
          animationFillMode: 'both',
          fontWeight: 'bold',
        }}
      >
        Click me
      </div>
    </div>
  );
};
