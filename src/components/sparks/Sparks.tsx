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
  shape = 'spark',
  variant = 'l',
  active = false,
  duration = 6000,
  delay = 0,
  iterationCount = 3,
}: SparksProps) => {
  const iteration = React.useRef(0);
  const animationConfig = shapeAnimationMap[shape];
  const {register, phase, setPhase} = useAnimation(animationConfig);
  const [timeoutDelay, setTimeoutDelay] = React.useState<number | null>(null);

  const restartTimeout = useTimeout(() => {
    if (!active) {
      return;
    }

    if (phase === 'entry') {
      setPhase('exit');
    } else if (iteration.current < iterationCount) {
      setPhase('entry');
    }
  }, timeoutDelay);

  React.useEffect(() => {
    if (active) {
      setPhase('initial');
    } else {
      setPhase('exit');
    }
  }, [active, setPhase]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    //console.log(`Play animation %c${phase}`, 'background: #000; color: #fff');

    if (phase === 'initial' && active) {
      iteration.current = 0;
      restartTimeout();
      setTimeoutDelay(delay);
    }

    if (phase === 'entry' && active) {
      iteration.current++;

      restartTimeout();
      if (duration !== Infinity) {
        setTimeoutDelay(duration);
      }
    }

    if (phase === 'finished') {
      restartTimeout();
      if (delay !== Infinity) {
        setTimeoutDelay(delay);
      }
    }
  }, [phase, delay, active, duration, iterationCount, restartTimeout]);

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
