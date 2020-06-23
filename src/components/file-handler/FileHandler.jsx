// @flow strict

import React from 'react';

import classNames from 'classnames';
import Text from '../text/Text';
import Link from '../text/Link';
import Icon from '../icons/Icon';
import Spinner from '../spinner/Spinner';

// const {default: Icon, TYPE: ICON_TYPE} = IconModule;

export type FileHandlerColorType = 'gray' | 'mono';

export const COLORS_MAP = {
  gray: 'gray-secondary-light',
  mono: 'white',
};

export const LABEL_COLORS_SET = {
  GRAY: 'gray',
  MONO: 'mono',
};

type PropsType = $ReadOnly<{
  /**
   * Specify color for file handler
   * @example <FileHandler
   *           color="white"
   *          >
   *            text
   *          </FileHandler>
   * @see color="gray" https://styleguide.brainly.com/latest/docs/interactive.html?color="gray"#labels
   * @see color="mono" https://styleguide.brainly.com/latest/docs/interactive.html?color="mono"#labels
   */
  color: FileHandlerColorType,
  ...
}>;

const FileHandler = ({
  setTextRef,
  children,
  thumbnailSrc,
  src,
  loading = false,
  iconType = 'attachment',
  color = 'gray-secondary-light',
  onClose,
  onClick,
}: PropsType) => {
  const clickProps = thumbnailSrc
    ? {onClick}
    : {
        href: src,
        target: '_blank',
        rel: 'noopener noreferrer',
      };

  const thumbnail = thumbnailSrc ? (
    <img {...clickProps} src={thumbnailSrc} alt="" className="cursor-pointer" />
  ) : (
    <a {...clickProps}>
      <Icon type={iconType} size={24} color="dark" />
    </a>
  );

  return (
    <div
      className={classNames('sg-file-handler', {
        [`sg-file-handler--${color}`]: color,
      })}
    >
      <div className="sg-file-handler__icon">
        {loading ? <Spinner size="small" /> : thumbnail}
      </div>
      <span className="sg-file-handler__text" ref={setTextRef}>
        {src ? (
          <Link {...clickProps} size="small" color="black">
            {children}
          </Link>
        ) : (
          <Text size="small" weight="bold">
            {children}
          </Text>
        )}
      </span>
      {onClose && (
        <button className="sg-label__close-button" onClick={onClose}>
          <Icon type="close" size={16} color="dark" />
        </button>
      )}
    </div>
  );
};

export default FileHandler;
