import * as React from 'react';
import Text from '../components/text/Text';
import Headline from '../components/text/Headline';
import cc from 'classnames';

type StoryVariantBorderBoxPropsType = {
  children: React.ReactNode;
  height?: string;
};
export const StoryVariantBorderBox = ({
  children,
  height = 'auto',
}: StoryVariantBorderBoxPropsType) => (
  <div>
    <Text size="xsmall">parent container</Text>
    <div
      className="sg-story-variant-border-box"
      style={{
        height,
      }}
    >
      {children}
    </div>
  </div>
);
type StoryVariantPropsType = {
  children: React.ReactNode;
  height?: string;
  width?: string;
  label: string;
  whiteText?: boolean;
};
export const StoryVariant = ({
  children,
  height = 'auto',
  width = 'auto',
  label,
  whiteText,
}: StoryVariantPropsType) => (
  <div
    className="sg-story-variant"
    style={{
      height,
      width,
    }}
  >
    <Headline
      extraBold
      transform="uppercase"
      as="span"
      color={whiteText ? 'text-white' : 'text-gray-60'}
      size="xsmall"
      className="sg-story-variant__name"
    >
      {label}
    </Headline>
    {children}
  </div>
);
type StoryVariantTablePropsType = {
  children: React.ReactNode;
  className?: string;
  alignTop?: boolean;
};
export const StoryVariantTable = ({
  children,
  className = '',
  alignTop,
}: StoryVariantTablePropsType) => (
  <table
    className={cc(
      'sg-story-variant-table',
      {
        'sg-story-variant-table--align-items-top': alignTop,
      },
      className
    )}
  >
    {children}
  </table>
);
export const formatTags = (values: Array<string>): string => values.join('|');
