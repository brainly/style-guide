/* eslint-disable no-console */
import * as React from 'react';
import cx from 'classnames';
import {useAnimation} from './animation';
import {useTimeout} from './timeout';
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

const Sparks = ({
  children,
  shape = 'heart',
  variant = 's',
  active = false,
  duration = 6000,
  delay = 1000,
  iterationCount = 3,
}: SparksProps) => {
  const iteration = React.useRef(1);
  const animationConfig = shapeAnimationMap[shape];
  const {register, phase, setPhase} = useAnimation(animationConfig);
  const [timeoutDelay, setTimeoutDelay] = React.useState(null);

  useTimeout(() => {
    if (phase !== 'entry') {
      setPhase('entry');
    } else {
      setPhase('exit');
    }
  }, timeoutDelay);

  React.useEffect(() => {
    console.log(phase);

    if (!active) {
      setPhase('initial');
      setTimeoutDelay(null);
      return;
    }

    if (phase === 'initial') {
      iteration.current = 1;
      setTimeoutDelay(null);
      setTimeoutDelay(delay);
    }

    if (phase === 'entry') {
      setTimeoutDelay(null);
      setTimeoutDelay(duration);
    }

    if (phase === 'finished') {
      if (iteration.current < iterationCount) {
        iteration.current++;
        setTimeoutDelay(null);
        setTimeoutDelay(delay);
      }
    }
  }, [phase, delay, duration, active, iterationCount, setPhase]);

  const shapeColor = shapeColorMap[shape];

  return (
    <div className={cx('sg-sparks', {'sg-sparks--s': variant === 's'})}>
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
