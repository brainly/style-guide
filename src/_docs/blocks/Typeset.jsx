// @flow strict

// TODO: use built in component after issue resolved
// https://github.com/storybookjs/storybook/issues/12786

import React from 'react';
import {styled} from '@storybook/theming';
import {transparentize} from 'polished';

import {withReset} from '@storybook/components/dist/typography/shared';
import {getBlockBackgroundStyle} from '@storybook/components/dist/blocks/BlockBackgroundStyles';

const Label = styled.div<{}>(({theme}) => ({
  marginRight: 30,
  fontSize: `${theme.typography.size.s1}px`,
  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

const Sample = styled.div({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  lineHeight: 'normal',
});

const TypeSpecimen = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  '&:not(:last-child)': {marginBottom: '1rem'},
});

const Wrapper = styled.div<{}>(withReset, ({theme}) => ({
  ...getBlockBackgroundStyle(theme),
  margin: '25px 0 40px',
  padding: '30px 20px',
}));

export interface TypesetProps {
  fontFamily?: string;
  fontSizes: Array<string>;
  fontWeight?: number;
  sampleText?: string;
}

export const Typeset = ({
  fontFamily,
  fontSizes,
  lineHeights,
  fontWeight,
  sampleText,
  ...props
}: TypesetProps) => (
  <Wrapper {...props} className="docblock-typeset">
    {fontSizes.map((size, index) => (
      <TypeSpecimen key={size}>
        <Label>{size}</Label>
        <Sample
          style={{
            fontFamily,
            fontSize: size,
            fontWeight,
            lineHeight: lineHeights?.[index] || lineHeights?.[0] || '',
          }}
        >
          {sampleText || 'Was he a beast if music could move him so?'}
        </Sample>
      </TypeSpecimen>
    ))}
  </Wrapper>
);
