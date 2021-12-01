import * as React from 'react';
import Label, {
  ICON_TYPE,
  LABEL_COLORS_SET,
  LABEL_TYPE,
  COLORS_DEFAULT_MAP,
  COLORS_SOLID_MAP,
} from './Label';
import {StoryVariantTable} from '../../_docs/utils';
import Headline, {HEADLINE_COLOR} from '../text/Headline';
import hex from '../colors/hex';

const noop = () => null;

const TRANSPARENT_COLOR_TEXT_MAP = {
  blue: 'blue',
  mint: 'mint',
  lavender: 'lavender',
  peach: 'peach',
  mustard: 'mustard',
  gray: 'gray-secondary',
  achromatic: 'dark',
};

const TRANSPARENT_ICON_COLOR_MAP = {
  blue: 'blue',
  mint: 'mint',
  lavender: 'lavender',
  peach: 'peach',
  mustard: 'mustard',
  gray: 'gray-secondary',
  achromatic: 'dark',
};

export default {
  title: 'Components/Label',
  parameters: {
    component: Label,
  },
  args: {
    type: 'default',
    children: 'label',
  },
  argTypes: {
    iconType: {control: {type: 'select', options: ICON_TYPE}},
    color: {control: {type: 'select', options: LABEL_COLORS_SET}},
    type: {control: {type: 'select', options: LABEL_TYPE}},
    onClose: {control: null},
  },
};

export const Default = args => <Label {...args} />;

export const Types = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            default
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            default (no icon, close)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            default (icon)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            default (icon, close)
          </Headline>
        </td>
      </tr>
      {Object.keys(COLORS_DEFAULT_MAP).map(color => (
        <tr key={color}>
          <td
            style={{
              backgroundColor:
                color === 'achromatic' ? hex.black : 'transparent',
            }}
          >
            <Label {...args} color={color}>
              label
            </Label>
          </td>
          <td
            style={{
              backgroundColor:
                color === 'achromatic' ? hex.black : 'transparent',
            }}
          >
            <Label {...args} color={color} onClose={noop}>
              label
            </Label>
          </td>
          <td
            style={{
              backgroundColor:
                color === 'achromatic' ? hex.black : 'transparent',
            }}
          >
            <Label {...args} color={color} iconType="attachment">
              label with icon
            </Label>
          </td>
          <td
            style={{
              backgroundColor:
                color === 'achromatic' ? hex.black : 'transparent',
            }}
          >
            <Label {...args} color={color} onClose={noop} iconType="attachment">
              label with icon
            </Label>
          </td>
        </tr>
      ))}
      <tr>
        <td style={{height: '100px'}} />
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            solid
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            solid (no icon, close)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            solid (icon)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            solid (icon, close)
          </Headline>
        </td>
      </tr>
      {Object.keys(COLORS_SOLID_MAP).map(color => (
        <tr key={color}>
          <td>
            <Label {...args} type="solid" color={color}>
              label
            </Label>
          </td>
          <td>
            <Label {...args} type="solid" color={color} onClose={noop}>
              label
            </Label>
          </td>
          <td>
            <Label {...args} type="solid" color={color} iconType="attachment">
              label with icon
            </Label>
          </td>
          <td>
            <Label
              {...args}
              type="solid"
              color={color}
              onClose={noop}
              iconType="attachment"
            >
              label with icon
            </Label>
          </td>
        </tr>
      ))}
      <tr>
        <td style={{height: '100px'}} />
      </tr>
      <tr>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            transparent color
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            transparent color (close)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            transparent color (icon)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            transparent color (icon, close)
          </Headline>
        </td>
      </tr>
      {Object.keys(TRANSPARENT_COLOR_TEXT_MAP).map(color => (
        <tr key={color}>
          <td>
            <Label {...args} type={LABEL_TYPE.TRANSPARENT_COLOR} color={color}>
              label
            </Label>
          </td>
          <td>
            <Label
              {...args}
              type={LABEL_TYPE.TRANSPARENT_COLOR}
              color={color}
              onClose={noop}
            >
              label
            </Label>
          </td>
          <td>
            <Label
              {...args}
              type={LABEL_TYPE.TRANSPARENT_COLOR}
              color={color}
              iconType="attachment"
            >
              label with icon
            </Label>
          </td>
          <td>
            <Label
              {...args}
              type={LABEL_TYPE.TRANSPARENT_COLOR}
              color={color}
              onClose={noop}
              iconType="attachment"
            >
              label with icon
            </Label>
          </td>
        </tr>
      ))}
      <tr>
        <td style={{height: '100px'}} />
      </tr>
      <tr>
        <td />
        <td />
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            transparent (icon)
          </Headline>
        </td>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={HEADLINE_COLOR['text-gray-40']}
            size="medium"
          >
            transparent (icon, close)
          </Headline>
        </td>
      </tr>
      {Object.keys(TRANSPARENT_ICON_COLOR_MAP).map(color => (
        <tr key={color}>
          <td />
          <td />
          <td>
            <Label
              {...args}
              type={LABEL_TYPE.TRANSPARENT}
              color={color}
              iconType="attachment"
            >
              label with icon
            </Label>
          </td>
          <td>
            <Label
              {...args}
              type={LABEL_TYPE.TRANSPARENT}
              color={color}
              onClose={noop}
              iconType="attachment"
            >
              label with icon
            </Label>
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);

export const TrimmedText = args => {
  const {children} = args;

  return (
    <div>
      <Headline
        extraBold
        transform="uppercase"
        size="medium"
        color={HEADLINE_COLOR['text-gray-40']}
      >
        wide
      </Headline>
      <div
        style={{
          width: '250px',
          border: '1px solid',
          borderColor: hex['gray-40'],
          padding: '20px',
          marginTop: '10px',
        }}
      >
        <Label {...args}>{children}</Label>
      </div>

      <Headline
        extraBold
        transform="uppercase"
        size="medium"
        style={{marginTop: 20}}
        color={HEADLINE_COLOR['text-gray-40']}
      >
        narrow
      </Headline>
      <div
        style={{
          width: '150px',
          border: '1px solid',
          borderColor: hex['gray-40'],
          padding: '20px',
          marginTop: '10px',
        }}
      >
        <Label {...args}>{children}</Label>
      </div>
    </div>
  );
};

TrimmedText.args = {
  title: 'Long long long text',
  children: 'Very very long label',
  onClose: {control: noop},
  color: LABEL_COLORS_SET.BLUE,
};
