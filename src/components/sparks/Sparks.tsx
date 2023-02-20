import * as React from 'react';
import cx from 'classnames';
import {useAnimation} from './animation';
import {shapeAnimationMap, shapeColorMap, variants} from './presets';
import Particle from './Particle';

interface SparksProps {
  children?: React.ReactNode;
  shape?: 'spark' | 'heart';
  variant?: 's' | 'm' | 'l';
  active?: boolean;
  duration?: number;
  delay?: number;
  iterationCount?: number;
}
function useTimeout(callback, delay) {
  const timeoutRef = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
}

const Sparks = ({
  children,
  shape = 'heart',
  variant = 's',
  active = false,
  duration = 6000,
  delay = 500,
  iterationCount = 1,
}: SparksProps) => {
  const iteration = React.useRef(1);
  const animationConfig = shapeAnimationMap[shape];
  const {register, phase, setPhase} = useAnimation(animationConfig);

  const shapeColor = shapeColorMap[shape];

  useTimeout(() => {}, delay);

  const handlMouseEnter = () => {
    setPhase('entry');
  };
  const handlMouseLeave = () => {
    setPhase('exit');
  };

  return (
    <div
      className={cx('sg-sparks', {'sg-sparks--s': variant === 's'})}
      onMouseEnter={handlMouseEnter}
      onMouseLeave={handlMouseLeave}
    >
      {children}
      <div className="sg-sparks__container">
        {variants[variant].map(
          ({style, colorIndex, animation, ...particle}, index) => (
            <Particle
              key={index}
              shape={shape}
              style={{...style, color: shapeColor[colorIndex]}}
              {...particle}
              {...register(animation)}
            />
          )
        )}
      </div>
    </div>
  );
};

Sparks.displayName = 'Sparks';
export default Sparks;
