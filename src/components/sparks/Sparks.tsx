/* eslint-disable no-console */
import * as React from 'react';
import cx from 'classnames';
import {useAnimation} from './animation';
import {useTimeout} from './timeout';
import {shapeAnimationMap, shapeColorMap, variants} from './presets';
import Particle from './Particle';

export interface SparksPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;
  /**
   * Optional string. Component to be warped with sparks.
   */
  children?: React.ReactNode;
  /**
   * Optional string. Shape of the sparks.
   * @default 'spark'
   * @example <Sparks shape="spark" />
   **/
  shape?: 'spark' | 'heart';
  /**
   * Optional string. Size of the sparks.
   * @default 'l'
   * @example <Sparks variant="m" />
   **/
  variant?: 's' | 'm' | 'l';
  /**
   * Optional boolean. Whether the sparks are active.
   * @default false
   * @example
   * <Sparks active/>
   * <Sparks active={false}/>
   **/
  active?: boolean;
  /**
   * Optional number. Duration of the animation.
   * @default 6000
   * @example
   * <Sparks duration={6000}/>
   * <Sparks duration={Infinity}/>
   * <Sparks duration={0}/>
   **/
  duration?: number;
  /**
   * Optional number. Delay of the animation.
   * This value is used at the beginning of each iteration.
   * @default 0
   * @example <Sparks delay={0}/>
   **/
  delay?: number;
  /**
   * Optional number. Number of iterations to play the full sequence: entry, exit, delay.
   * @default 3
   * @example
   * <Sparks iterationCount={3}/>
   * <Sparks iterationCount={Infinity}/>
   **/
  iterationCount?: number;
}

const Sparks = React.forwardRef<HTMLDivElement, SparksPropsType>(
  (
    {
      children,
      className,
      shape = 'spark',
      variant = 'l',
      active = false,
      duration = 6000,
      delay = 0,
      iterationCount = 3,
    }: SparksPropsType,
    ref
  ) => {
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

        if (duration !== Infinity) {
          restartTimeout();
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
      <div
        className={cx('sg-sparks', className, {
          'sg-sparks--s': variant === 's',
        })}
      >
        {children}
        <div className="sg-sparks__container" aria-hidden ref={ref}>
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
  }
);

Sparks.displayName = 'Sparks';
export default Sparks;
