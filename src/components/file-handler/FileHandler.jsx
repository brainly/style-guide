// @flow strict

import * as React from 'react';
import classNames from 'classnames';

import Text from '../text/Text';
import Link from '../text/Link';
import Icon, {ICON_COLOR} from '../icons/Icon';
import Spinner from '../spinner/Spinner';

import type {IconTypeType} from '../icons/Icon';

export type FileHandlerColorType = 'gray' | 'white';

export const COLORS_MAP = {
  gray: 'gray-secondary-light',
  white: 'white',
};

export const FILE_HANDLER_COLORS_SET = {
  GRAY: 'gray',
  WHITE: 'white',
};

export interface AriaStatusLabelType {
  loading?: string;
  uploaded?: string;
}

export type FileHandlerPropsType = $ReadOnly<{
  /**
   * Specify color of the background for FileHandler
   * @example <FileHandler color="white">
   *            text
   *          </FileHandler>
   * @default gray
   */
  color: FileHandlerColorType,
  /**
   * Specify iconType to display SG icon as the image inside FileHandler
   * @example <FileHandler iconType="answer">
   *            text
   *          </FileHandler>
   * @default attachment
   */
  iconType?: IconTypeType,
  /**
   * Specify thumbnailSrc of the image inside FileHandler
   * @example <FileHandler thumbnailSrc="https://source.unsplash.com/64x64/?bird">
   *            text
   *          </FileHandler>
   */
  thumbnailSrc?: string,
  /**
   * Specify src of the file to display it in the new tab when link is clicked
   * @example <FileHandler src="https://source.unsplash.com/64x64/?bird">
   *            text
   *          </FileHandler>
   */
  src?: string,
  /**
   * Optional boolean for loading state of FileHandler
   * @example <FileHandler loading>
   *            text
   *          </FileHandler>
   * @default false
   */
  loading?: boolean,
  /**
   * Callback, called by clicking on **close** button. If specified, button will be added automatically
   * @example <FileHandler onClose={() => doSomething()}>
   *            text
   *          </FileHandler>
   */
  onClose?: (SyntheticMouseEvent<HTMLButtonElement>) => void,
  /**
   * Callback, called by clicking on link
   * @example <FileHandler
   *           src="https://source.unsplash.com/64x64/?bird"
   *           onClose={() => doSomething()}
   *          >
   *            text
   *          </FileHandler>
   */
  onClick?: () => mixed,
  /**
   * Additional function to set ref for text
   */
  textRef?: {current: HTMLSpanElement | null},
  /**
   * Additional class names
   */
  className?: string,
  /**
   * Children to be rendered inside FileHandler
   * @example <FileHandler>
   *            text
   *          </FileHandler>
   */
  children: React.Node,
  /**
   * An accessible, short-text description of `onClose` action,
   * defaults to 'Close'
   */
  ariaCloseButtonLabel?: string,
  /**
   * An accessible, short-text description for loading
   * and uploded status.
   */
  statusLabel?: AriaStatusLabelType,
  ...
}>;

const FileHandler = ({
  children,
  color = 'gray',
  iconType = 'attachment',
  thumbnailSrc,
  src,
  loading = false,
  onClose,
  onClick,
  textRef,
  className,
  ariaCloseButtonLabel = 'Close',
  statusLabel,
  ...props
}: FileHandlerPropsType) => {
  const fileHandlerClass = classNames(
    'sg-file-handler',
    {
      'sg-file-handler--closable': onClose,
      [`sg-file-handler--${COLORS_MAP[color]}`]: color,
    },
    className
  );

  const clickProps =
    thumbnailSrc !== undefined && onClick
      ? {onClick}
      : {
          href: src,
          target: '_blank',
          rel: 'noopener noreferrer',
        };

  const ThumbnailTag = clickProps.onClick ? 'button' : 'a';

  const thumbnail = (
    <ThumbnailTag {...clickProps} aria-hidden>
      {thumbnailSrc !== undefined ? (
        <img src={thumbnailSrc} alt="" className="cursor-pointer" />
      ) : (
        <Icon type={iconType} size={24} color={ICON_COLOR['icon-black']} />
      )}
    </ThumbnailTag>
  );

  return (
    <div {...props} className={fileHandlerClass}>
      <div className="sg-file-handler__icon">
        {loading ? <Spinner size="xsmall" /> : thumbnail}
      </div>
      <span className="sg-file-handler__text" ref={textRef}>
        <span className="sg-visually-hidden" aria-live="polite">
          {loading
            ? statusLabel?.loading || 'loading'
            : statusLabel?.uploaded || 'uploaded'}
        </span>
        {src !== undefined ? (
          <Link {...clickProps} size="small" color="text-black">
            {children}
          </Link>
        ) : (
          <Text size="small" weight="bold">
            {children}
          </Text>
        )}
      </span>
      {onClose && (
        <button
          className="sg-file-handler__close-button"
          onClick={onClose}
          aria-label={ariaCloseButtonLabel}
        >
          <Icon type="close" size={16} color={ICON_COLOR['icon-black']} />
        </button>
      )}
    </div>
  );
};

export default FileHandler;
