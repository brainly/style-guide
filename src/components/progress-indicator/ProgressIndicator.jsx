// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type SizeType = 'xs' | 's';

export type ProgressIndicatorPropsType = {
  /**
   * ProgressIndicator size
   * @example <ProgressIndicator size="xs"/>
   * @default s
   */
  size?: SizeType,

  /**
   * Disable border radius
   * @example <ProgressIndicator noBorderRadius/>
   * @default false
   */
  noBorderRadius?: boolean,

  /**
   * Enable invisible track
   * @example <ProgressIndicator noTrack/>
   * @default false
   */
  invisibleTrack?: boolean,

  /**
   * Current value, represents current progress of the process
   * By default represents the current percentage of progress
   * @example <ProgressIndicator value={4}/>
   */
  value: number,

  /**
   * Max value
   * @example <ProgressIndicator maxValue={20}/>
   * @default 100
   */
  maxValue: number,
};

const ProgressIndicator = ({
  size = 's',
  noBorderRadius,
  invisibleTrack,
  value,
  maxValue = 100,
}: ProgressIndicatorPropsType) => {
  const trackClass = classNames(
    'sg-progress-indicator__track',
    `sg-progress-indicator__track--${String(size)}`,
    {
      'sg-progress-indicator__track--no-border-radius': noBorderRadius,
      'sg-progress-indicator__track--invisible-track': invisibleTrack,
    }
  );

  const barWidth = `${Math.round((value / maxValue) * 100)}%`;
  const barBorderRadius = barWidth === '100%' ? '0' : '0 8px 8px 0';
  const barStyle = {
    width: barWidth,
    borderRadius: barBorderRadius,
  };

  return (
    <div className={trackClass}>
      <div
        className={classNames('sg-progress-indicator__bar')}
        style={barStyle}
      />
    </div>
  );
};

export default ProgressIndicator;
