import * as React from 'react';
import Text from '../components/text/Text';
import Headline from '../components/text/Headline';

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
  dark?: boolean;
};
export const StoryVariant = ({
  children,
  height = 'auto',
  width = 'auto',
  label,
  whiteText,
  dark = false,
}: StoryVariantPropsType) => (
  <div
    className={`sg-story-variant ${dark && 'sg-story-variant-dark-box'}`}
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
};
export const StoryVariantTable = ({
  children,
  className = '',
}: StoryVariantTablePropsType) => (
  <table className={`sg-story-variant-table ${className}`}>{children}</table>
);
export const formatTags = (values: Array<string>): string => values.join('|');
