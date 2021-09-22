// @flow

import * as React from 'react';
import Text from '../components/text/Text';
import Headline from '../components/text/Headline';

type StoryVariantBorderBoxPropsType = {
  children: React.Node,
  height?: string,
};

export const StoryVariantBorderBox = ({
  children,
  height = 'auto',
}: StoryVariantBorderBoxPropsType) => (
  <div>
    <Text size="xsmall">parent container</Text>
    <div className="sg-story-variant-border-box" style={{height}}>
      {children}
    </div>
  </div>
);

type StoryVariantPropsType = {
  children: React.Node,
  height?: string,
  width?: string,
  label: string,
};

export const StoryVariant = ({
  children,
  height = 'auto',
  width = 'auto',
  label,
}: StoryVariantPropsType) => (
  <div className="sg-story-variant" style={{height, width}}>
    <Headline
      extraBold
      transform="uppercase"
      type="span"
      color="gray-secondary"
      size="xsmall"
      className="sg-story-variant__name"
    >
      {label}
    </Headline>
    {children}
  </div>
);

type StoryVariantTablePropsType = {
  children: React.Node,
  className?: string,
};

export const StoryVariantTable = ({
  children,
  className,
}): StoryVariantTablePropsType => (
  <table className={`sg-story-variant-table ${className}`}>{children}</table>
);
