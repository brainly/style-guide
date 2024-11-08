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
   * Optional string. Variant of the sparks which determines the size and the number of sparks.
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

  /**
   * Optional array of strings. Colors of the particles. If not provided, the colors will be chosen based on the shape.
   * @example <Sparks colors={['var(--indigo-20)', 'var(--indigo-30)', 'var(--indigo-40)', 'var(--indigo-50)']} />
   **/
  colors?: [string, string, string, string];

  /**
   * Optional string. The placement property is a shorthand property for setting the top, right, bottom, and left properties (inset) of an internal canvas.
   * Thanks to that you can adjust the position of the canvas thus the position of the sparks to always keep them in line with the edge of the container
   * no matter what the size of the container and the variant of the sparks is. It is useful when specific variant of the sparks is used in a container
   * of the size that is not covered perfectly by the default positioning.
   * @remarks
   * @example
   * // This will move the sparks 8px outside the container top and bottom edge and 0px outside the container left and right edge.
   * <Sparks inset="-8 0" />
   * @example
   * // this will move the sparks 16px outside the container top and bottom endge and 0px outside the container left and right edge.
   * <Sparks inset="-16 0" />
   **/
  placement?: React.CSSProperties['inset'];

  /**
   * Optional string. The display property specifies the display behavior (the type of rendering box) of spark container.
   * It's exposed directly from the CSS to conveniently change the display behavior of the spark container.
   */
  display?: React.CSSProperties['display'];

  /**
   * Optional string. The width property specifies the width of the spark container.
   * It's exposed directly from the CSS to conveniently change the width of the spark container.
   * @example <Sparks width="100%" />
   */
  width?: React.CSSProperties['width'];

  /**
   * Optional string. The height property specifies the height of the spark container.
   * It's exposed directly from the CSS to conveniently change the height of the spark container.
   * @example <Sparks height="100%" />
   */
  height?: React.CSSProperties['height'];
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
      colors,
      placement,
      display,
      width,
      height,
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

    const componnetCssVariables = {
      '--sparks-display': display,
      '--sparks-width': width,
      '--sparks-height': height,
    };

    const canvasCssVariables = {
      '--sparks-inset': placement,
    } as React.CSSProperties;

    return (
      <div
        className={cx('sg-sparks', className, {
          'sg-sparks--s': variant === 's',
        })}
        style={{...style, ...componnetCssVariables}}
      >
        {children}
        <div
          className="sg-sparks__canvas"
          ref={ref}
          aria-hidden
          role="img"
          aria-label=""
          style={canvasCssVariables}
        >
          {variants[variant].map(
            ({style, colorIndex, animation, ...particle}, index) => (
              <Particle
                key={index}
                shape={shape}
                // @ts-expect-error TS2322
                style={{
                  ...style,
                  color: colors?.[colorIndex] || shapeColor[colorIndex],
                }}
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
