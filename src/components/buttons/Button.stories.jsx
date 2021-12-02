import * as React from 'react';
import Button, {BUTTON_SIZE, BUTTON_TYPE} from './Button';
import Icon, {TYPE as ICON_TYPES} from 'icons/Icon';
import hex from '../colors/hex';
import {StoryVariantTable} from '../../_docs/utils';
import Headline, {TEXT_COLOR} from '../text/Headline';

const allIcons = Object.entries(ICON_TYPES).reduce(
  (acc, [key, type]) => ({
    ...acc,
    [key]: type,
  }),
  {}
);

export default {
  title: 'Components/Button',
  parameters: {
    component: Button,
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: allIcons,
      },
    },
  },
  args: {
    children: 'button',
  },
};

export const Default = args => <Button {...args} />;

export const Types = args => (
  <StoryVariantTable className="sg-button-stories-table">
    <thead>
      <tr>
        <th />
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            default
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            disabled
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            loading
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            with icon
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            icon only
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color={TEXT_COLOR['text-gray-40']}
            size="medium"
          >
            toggle
          </Headline>
        </th>
      </tr>
    </thead>
    <tbody>
      {[
        BUTTON_TYPE.SOLID,
        BUTTON_TYPE.SOLID_INVERTED,
        BUTTON_TYPE.SOLID_BLUE,
        BUTTON_TYPE.SOLID_MINT,
        BUTTON_TYPE.SOLID_LIGHT,
        BUTTON_TYPE.OUTLINE,
        BUTTON_TYPE.TRANSPARENT,
        BUTTON_TYPE.TRANSPARENT_LIGHT,
        BUTTON_TYPE.TRANSPARENT_PEACH,
        BUTTON_TYPE.TRANSPARENT_MUSTARD,
        BUTTON_TYPE.TRANSPARENT_BLUE,
        BUTTON_TYPE.TRANSPARENT_INVERTED,
        BUTTON_TYPE.FACEBOOK,
      ].map(buttonType => (
        <tr
          style={{
            backgroundColor: [
              'solid-inverted',
              'transparent-inverted',
            ].includes(buttonType)
              ? hex.black
              : 'transparent',
          }}
          key={buttonType}
        >
          <td>
            <div
              style={{
                height: 40,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Headline
                extraBold
                transform="uppercase"
                type="span"
                color={
                  ['solid-inverted', 'transparent-inverted'].includes(
                    buttonType
                  )
                    ? TEXT_COLOR['text-white']
                    : TEXT_COLOR['text-gray-40']
                }
                size="medium"
              >
                {buttonType.toLowerCase()}
              </Headline>
            </div>
          </td>
          <td>
            <div>
              <Button {...args} type={buttonType} />
            </div>
          </td>
          <td>
            <Button {...args} type={buttonType} disabled />
          </td>
          <td>
            <Button {...args} type={buttonType} loading />
          </td>
          <td>
            <Button
              {...args}
              type={buttonType}
              icon={<Icon type={ICON_TYPES.HEART_OUTLINED} color="adaptive" />}
            />
          </td>
          <td>
            <Button
              {...args}
              type={buttonType}
              iconOnly
              icon={<Icon type={ICON_TYPES.HEART_OUTLINED} color="adaptive" />}
            />
          </td>
          <td>
            {[
              'solid-light',
              'outline',
              'transparent',
              'transparent-light',
            ].includes(buttonType)
              ? ['peach', 'mustard', 'blue'].map(toggleType => (
                  <div style={{marginBottom: '15px'}} key={toggleType}>
                    <Button
                      {...args}
                      icon={<Icon type={ICON_TYPES.HEART} color="adaptive" />}
                      type={buttonType}
                      toggle={toggleType}
                    />
                  </div>
                ))
              : null}
            {[
              'TRANSPARENT_PEACH',
              'TRANSPARENT_MUSTARD',
              'TRANSPARENT_BLUE',
              'TRANSPARENT_INVERTED',
            ].includes(buttonType) ? (
              <Button
                {...args}
                type={buttonType}
                icon={<Icon type={ICON_TYPES.HEART} color="adaptive" />}
              />
            ) : null}
          </td>
        </tr>
      ))}
    </tbody>
  </StoryVariantTable>
);

export const Sizes = args => (
  <StoryVariantTable>
    <tbody>
      <tr>
        <td>
          <StoryVariantTable>
            <tbody>
              <tr>
                <td />
                <td>
                  <Headline
                    extraBold
                    transform="uppercase"
                    type="span"
                    color={TEXT_COLOR['text-gray-40']}
                    size="medium"
                  >
                    solid default
                  </Headline>
                </td>
                <td>
                  <Headline
                    extraBold
                    transform="uppercase"
                    type="span"
                    color={TEXT_COLOR['text-gray-40']}
                    size="medium"
                  >
                    solid icon left
                  </Headline>
                </td>
                <td>
                  <Headline
                    extraBold
                    transform="uppercase"
                    type="span"
                    color={TEXT_COLOR['text-gray-40']}
                    size="medium"
                  >
                    solid icon right
                  </Headline>
                </td>
              </tr>
              {Object.values(BUTTON_SIZE).map(size => (
                <tr key={size}>
                  <td>
                    <Headline
                      extraBold
                      transform="uppercase"
                      type="span"
                      color={TEXT_COLOR['text-gray-40']}
                      size="medium"
                    >
                      {size}
                    </Headline>
                  </td>
                  <td>
                    <Button {...args} size={size}>
                      button
                    </Button>
                  </td>
                  <td>
                    <Button
                      {...args}
                      size={size}
                      icon={<Icon type={ICON_TYPES.ANSWER} color="adaptive" />}
                    >
                      button
                    </Button>
                  </td>
                  <td>
                    <Button
                      {...args}
                      size={size}
                      icon={<Icon type={ICON_TYPES.ANSWER} color="adaptive" />}
                      reversedOrder
                    >
                      button
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <div style={{height: '50px'}} />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <Headline
                    extraBold
                    transform="uppercase"
                    type="span"
                    color={TEXT_COLOR['text-gray-40']}
                    size="medium"
                  >
                    transparent default
                  </Headline>
                </td>
                <td>
                  <Headline
                    extraBold
                    transform="uppercase"
                    type="span"
                    color={TEXT_COLOR['text-gray-40']}
                    size="medium"
                  >
                    transparent icon left
                  </Headline>
                </td>
                <td>
                  <Headline
                    extraBold
                    transform="uppercase"
                    type="span"
                    color={TEXT_COLOR['text-gray-40']}
                    size="medium"
                  >
                    transparent icon right
                  </Headline>
                </td>
              </tr>
              {Object.values(BUTTON_SIZE).map(size => (
                <tr key={size}>
                  <td>
                    <Headline
                      extraBold
                      transform="uppercase"
                      type="span"
                      color={TEXT_COLOR['text-gray-40']}
                      size="medium"
                    >
                      {size}
                    </Headline>
                  </td>
                  <td>
                    <Button {...args} size={size} type="transparent">
                      button
                    </Button>
                  </td>
                  <td>
                    <Button
                      {...args}
                      size={size}
                      icon={<Icon type={ICON_TYPES.ANSWER} color="adaptive" />}
                      type="transparent"
                    >
                      button
                    </Button>
                  </td>
                  <td>
                    <Button
                      {...args}
                      size={size}
                      icon={<Icon type={ICON_TYPES.ANSWER} color="adaptive" />}
                      reversedOrder
                      type="transparent"
                    >
                      button
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </StoryVariantTable>
        </td>
      </tr>
    </tbody>
  </StoryVariantTable>
);
