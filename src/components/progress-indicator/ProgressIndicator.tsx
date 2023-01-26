import * as React from 'react';
import classNames from 'classnames';

type SizeType = 'xs' | 's';

export type ProgressIndicatorPropsType = {
  /**
   * ProgressIndicator size
   * @example <ProgressIndicator size="xs"/>
   * @default s
   */
  size?: SizeType;

  /**
   * Disable border radius
   * @example <ProgressIndicator noBorderRadius/>
   * @default false
   */
  noBorderRadius?: boolean;

  /**
   * Enable invisible track
   * @example <ProgressIndicator noTrack/>
   * @default false
   */
  invisibleTrack?: boolean;

  /**
   * Current value, represents current progress of the process
   * By default represents the current percentage of progress
   * @example <ProgressIndicator value={4}/>
   */
  value: number;

  /**
   * The human-readable text alternative of value
   * @example <ProgressIndicator value={4} textValue="step 4 of 10"/>
   */
  textValue?: string;

  /**
   * Max value
   * @example <ProgressIndicator maxValue={20}/>
   * @default 100
   */
  maxValue?: number;

  /**
   * Min value
   * @example <ProgressIndicator minValue={2}/>
   * @default 0
   */
  minValue?: number;

  className?: string;
};

const ProgressIndicator = ({
  size = 's',
  noBorderRadius,
  invisibleTrack,
  value,
  minValue = 0,
  maxValue = 100,
  textValue,
  className,
  ...props
}: ProgressIndicatorPropsType) => {
  const trackClass = classNames(
    'sg-progress-indicator',
    `sg-progress-indicator--${String(size)}`,
    {
      'sg-progress-indicator--no-border-radius': noBorderRadius,
      'sg-progress-indicator--invisible-track': invisibleTrack,
    }
  );

  const barWidth = Math.round(
    ((value - minValue) / (maxValue - minValue)) * 100
  );
  const barBorderRadius = barWidth === 100 ? '0' : '0 8px 8px 0';
  const barStyle = {
    width: `${barWidth}%`,
    borderRadius: barBorderRadius,
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
    >
      <div
        className={classNames('sg-progress-indicator__bar')}
        style={barStyle}
      />
    </div>
  );
};

export default ProgressIndicator;
