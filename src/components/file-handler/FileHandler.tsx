import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import Link from '../text/Link';
import Icon from '../icons/Icon';
import Spinner from '../spinner/Spinner';
import type {IconTypeType} from '../icons/Icon';

export type FileHandlerColorType = 'gray-20' | 'white';
export const COLORS_MAP = {
  'gray-20': 'gray-20',
  white: 'white',
} as const;

type AriaStatusLabelType = {
  loading?: string;
  uploaded?: string;
};
export type FileHandlerPropsType = Readonly<
  {
    /**
     * Specify color of the background for FileHandler
     * @example <FileHandler color="white">
     *            text
     *          </FileHandler>
     * @default 'gray-20'
     */
    color?: FileHandlerColorType;

    /**
     * Specify iconType to display SG icon as the image inside FileHandler
     * @example <FileHandler iconType="answer">
     *            text
     *          </FileHandler>
     * @default attachment
     */
    iconType?: IconTypeType;

    /**
     * Specify thumbnailSrc of the image inside FileHandler
     * @example <FileHandler thumbnailSrc="https://source.unsplash.com/64x64/?bird">
     *            text
     *          </FileHandler>
     */
    thumbnailSrc?: string;

    /**
     * Specify src of the file to display it in the new tab when link is clicked
     * @example <FileHandler src="https://source.unsplash.com/64x64/?bird">
     *            text
     *          </FileHandler>
     */
    src?: string;

    /**
     * Optional boolean for loading state of FileHandler
     * @example <FileHandler loading>
     *            text
     *          </FileHandler>
     * @default false
     */
    loading?: boolean;

    /**
     * Callback, called by clicking on **close** button. If specified, button will be added automatically
     * @example <FileHandler onClose={() => doSomething()}>
     *            text
     *          </FileHandler>
     */
    onClose?: (arg0: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Callback, called by clicking on link
     * @example <FileHandler
     *           src="https://source.unsplash.com/64x64/?bird"
     *           onClose={() => doSomething()}
     *          >
     *            text
     *          </FileHandler>
     */
    onClick?: (
      arg0: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => unknown;

    /**
     * Additional function to set ref for text
     */
    textRef?: {
      current: HTMLSpanElement | null;
    };

    /**
     * Additional class names
     */
    className?: string;

    /**
     * Children to be rendered inside FileHandler
     * @example <FileHandler>
     *            text
     *          </FileHandler>
     */
    children?: React.ReactNode;

    /**
     * An accessible, short-text description of `onClose` action,
     * defaults to 'Close'
     */
    ariaCloseButtonLabel?: string;

    /**
     * An accessible, short-text description for loading
     * and uploded status.
     */
    statusLabel?: AriaStatusLabelType;
  } & Omit<
    React.AllHTMLAttributes<HTMLElement>,
    | 'color'
    | 'iconType'
    | 'thumbnailSrc'
    | 'src'
    | 'loading'
    | 'onClose'
    | 'onClick'
    | 'textRef'
    | 'className'
    | 'children'
    | 'ariaCloseButtonLabel'
    | 'statusLabel'
  >
>;

const FileHandler = ({
  children,
  color = 'gray-20',
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
  const isActionProvided = src !== undefined || onClick;
  const clickProps = onClick
    ? {
        onClick,
      }
    : ({
        href: src,
      } as const);
  const role = clickProps.onClick && 'button';
  const asLink = clickProps.onClick ? 'button' : 'a';
  const thumbnail =
    thumbnailSrc !== undefined ? (
      <img src={thumbnailSrc} alt="" className="cursor-pointer" />
    ) : (
      <Icon type={iconType} size={24} color="icon-black" />
    );
  const interactiveThumbnail = isActionProvided ? (
    <a
      {...clickProps}
      role={role}
      tabIndex={0}
      aria-hidden
      className="sg-file-handler__link"
    >
      {thumbnail}
    </a>
  ) : (
    thumbnail
  );

  return (
    <div {...props} className={fileHandlerClass}>
      <div className="sg-file-handler__icon">
        {loading ? (
          <Spinner
            size="xsmall"
            aria-label={statusLabel?.loading || 'uploading'}
          />
        ) : (
          interactiveThumbnail
        )}
      </div>
      <span className="sg-file-handler__text" ref={textRef}>
        <span className="sg-visually-hidden" aria-live="polite">
          {!loading && (statusLabel?.uploaded || 'uploaded')}
        </span>
        {isActionProvided ? (
          <Link
            {...clickProps}
            size="small"
            color="text-black"
            as={asLink}
            className="sg-file-handler__link"
          >
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
          <Icon type="close" size={16} color="icon-black" />
        </button>
      )}
    </div>
  );
};

export default FileHandler;
