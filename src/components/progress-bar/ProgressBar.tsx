import * as React from 'react';
import classNames from 'classnames';

type SizeType = 'xs' | 's';

const getTransitionDuration = (
  minValue: number,
  maxValue: number,
  trackRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (!trackRef.current || !trackRef.current.clientWidth) {
    return;
  }
  const stepWidth = trackRef.current.clientWidth / (maxValue - minValue);

  if (stepWidth >= 600) {
    return '1000ms';
  }

  return `${Math.floor(stepWidth / 100) * 100 + 400}ms`;
};

export type ProgressBarPropsType = {
  /**
   * ProgressBar size
   * @example <ProgressBar size="xs"/>
   * @default s
   */
  size?: SizeType;

  /**
   * Disable border radius
   * @example <ProgressBar value={4} noBorderRadius/>
   * @default false
   */
  noBorderRadius?: boolean;

  /**
   * Enable invisible track
   * @example <ProgressBar value={4} invisibleTrack/>
   * @default false
   */
  invisibleTrack?: boolean;

  /**
   * Current value, represents current progress of the process
   * By default represents the current percentage of progress
   * @example <ProgressBar value={4}/>
   */
  value: number;

  /**
   * The human-readable text alternative of value
   * @example <ProgressBar value={4} textValue="step 4 of 10"/>
   */
  textValue?: string;

  /**
   * Max value
   * @example <ProgressBar value={4} maxValue={20}/>
   * @default 100
   */
  maxValue?: number;

  /**
   * Min value
   * @example <ProgressBar value={4} minValue={2}/>
   * @default 0
   */
  minValue?: number;

  className?: string;
};

const ProgressBar = ({
  size = 's',
  noBorderRadius,
  invisibleTrack,
  value,
  minValue = 0,
  maxValue = 100,
  textValue,
  className,
  ...props
}: ProgressBarPropsType) => {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [transitionDuration, setTransitionDuration] = React.useState(() => {
    // @ts-expect-error TS2345
    return getTransitionDuration(minValue, maxValue, trackRef);
  });

  React.useEffect(() => {
    // @ts-expect-error TS2345
    setTransitionDuration(getTransitionDuration(minValue, maxValue, trackRef));
  }, [minValue, maxValue]);

  const trackClass = classNames(
    'sg-progress-bar',
    `sg-progress-bar--${String(size)}`,
    {
      'sg-progress-bar--no-border-radius': noBorderRadius,
      'sg-progress-bar--invisible-track': invisibleTrack,
    }
  );

  const barWidth = Math.round(
    ((value - minValue) / (maxValue - minValue)) * 100
  );
  const barBorderRadius =
    barWidth === 100 && noBorderRadius ? '0' : '0 8px 8px 0';

  const barStyle = {
    width: `${barWidth}%`,
    borderRadius: barBorderRadius,
    transitionDuration,
  };

  return (
    <div
      {...props}
      className={classNames(trackClass, className)}
      role="progressbar"
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-valuenow={value}
      aria-valuetext={textValue || String(value)}
      ref={trackRef}
    >
      <div className={classNames('sg-progress-bar__bar')} style={barStyle} />
    </div>
  );
};

export default ProgressBar;
