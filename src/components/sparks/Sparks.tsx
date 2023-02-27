/* eslint-disable no-console */
import * as React from 'react';
import cx from 'classnames';
import {useAnimation} from './animation';
import {useTimeout} from './timeout';
import {shapeAnimationMap, shapeColorMap, variants} from './presets';
import useReducedMotion from '../utils/useReducedMotion';
import Particle from './Particle';

export interface SparksPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  /**
   * Optional object. Style object to be applied to the component.
   * @example <Sparks style={{color: 'red'}} />
   **/
  style?: React.CSSProperties;

  /**
   * Optional ReacNode. Component to be warped with sparks.
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
   * This value is used at the beginning of the whole animation
   * @default 0
   * @example <Sparks delay={0}/>
   **/
  delay?: number;

  /**
   * Optional number. Delay of the animation.
   * This value is used between each iteration of the animation
   * @default 500
   * @example <Sparks iterationDelay={1000}/>
   **/
  iterationDelay?: number;

  /**
   * Optional number. Number of iterations to play the full sequence: entry, exit, iterationDelay.
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
      style,
      shape = 'spark',
      variant = 'l',
      active = false,
      duration = 6000,
      delay = 0,
      iterationDelay = 500,
      iterationCount = 3,
    }: SparksPropsType,
    ref
  ) => {
    const iteration = React.useRef(0);
    const hasReduceMotion = useReducedMotion();
    const animationConfig =
      shapeAnimationMap[shape][hasReduceMotion ? 'reduced' : 'default'];
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
        if (iterationDelay !== Infinity) {
          setTimeoutDelay(iterationDelay);
        }
      }
    }, [
      phase,
      delay,
      iterationDelay,
      active,
      duration,
      iterationCount,
      restartTimeout,
    ]);

    const shapeColor = shapeColorMap[shape];

    return (
      <div
        className={cx('sg-sparks', className, {
          'sg-sparks--s': variant === 's',
        })}
        style={style}
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

export default Sparks;
