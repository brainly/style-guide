import * as React from 'react';
import Spinner from '../spinner/Spinner';
import type {SpinnerColorType, SpinnerSizeType} from '../spinner/Spinner';
import classnames from 'classnames';

export {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';
type AriaStatusLabelType = {
  loading?: string;
  loaded?: string;
};
export type AriaLiveType = 'polite' | 'assertive';
export type SpinnerContainerPropsType = {
  loading?: boolean;
  color?: SpinnerColorType;
  fullWidth?: boolean;
  size?: SpinnerSizeType;
  children?: React.ReactNode;
  ariaStatusLabel?: AriaStatusLabelType;
  'aria-live'?: AriaLiveType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'loading'
  | 'color'
  | 'fullWidth'
  | 'size'
  | 'children'
  | 'ariaStatusLabel'
  | 'undefined'
>;

const SpinnerContainer = ({
  loading,
  color,
  fullWidth,
  size,
  children,
  ariaStatusLabel = {
    loaded: 'content loaded',
    loading: 'content is loading',
  },
  'aria-live': ariaLive = 'assertive',
  ...props
}: SpinnerContainerPropsType) => {
  const childrenWithAriaBusy = React.useMemo(() => {
    if (!loading) {
      return children;
    }

    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          // @ts-ignore ts migration
          'aria-busy': loading,
        });
      }

      return child;
    });
  }, [children, loading]);

  return (
    <div
      {...props}
      className={classnames('sg-spinner-container', {
        'sg-spinner-container--full-width': fullWidth,
      })}
    >
      {loading ? (
        <div className="sg-spinner-container__overlay">
          <Spinner
            color={color}
            size={size}
            aria-label={ariaStatusLabel.loading}
            aria-live={ariaLive}
          />
        </div>
      ) : (
        <span
          className="sg-visually-hidden"
          aria-live={ariaLive}
          role="status"
          aria-atomic="true"
        >
          {ariaStatusLabel.loaded}
        </span>
      )}
      {childrenWithAriaBusy}
    </div>
  );
};

export default SpinnerContainer;
