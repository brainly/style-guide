import * as React from 'react';
import Button, {
  BUTTON_SIZE,
  BUTTON_TYPE,
  BUTTON_TOGGLE,
} from './Button.vanilla';
import Icon, {TYPE as ICON_TYPES} from 'icons/Icon';
import hex from '../colors/hex';
import {StoryVariantTable} from '../../docs/utils';
import Headline from '../text/Headline';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ICON_TYPES,
      },
    },
  },
  args: {
    children: 'button',
  },
};

export const Default = args => {
  let iconSize;

  if (args.size === BUTTON_SIZE.S) {
    iconSize = 16;
  } else if (args.size === BUTTON_SIZE.M) {
    iconSize = 24;
  } else if (args.size === BUTTON_SIZE.L) {
    iconSize = 32;
  }

  return (
    <Button
      {...args}
      icon={
        args.icon ? (
          <Icon size={iconSize} type={args.icon} color="adaptive" />
        ) : null
      }
    />
  );
};

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
            color="text-gray-40"
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
            color="text-gray-40"
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
            color="text-gray-40"
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
            color="text-gray-40"
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
            color="text-gray-40"
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
            color="text-gray-40"
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
        BUTTON_TYPE.SOLID_INDIGO,
        BUTTON_TYPE.SOLID_INDIGO_INVERTED,
        BUTTON_TYPE.SOLID_LIGHT,
        BUTTON_TYPE.OUTLINE,
        BUTTON_TYPE.OUTLINE_INDIGO,
        BUTTON_TYPE.OUTLINE_INVERTED,
        BUTTON_TYPE.TRANSPARENT,
        BUTTON_TYPE.TRANSPARENT_LIGHT,
        BUTTON_TYPE.TRANSPARENT_RED,
        BUTTON_TYPE.TRANSPARENT_INVERTED,
        BUTTON_TYPE.FACEBOOK,
        BUTTON_TYPE.GOOGLE,
        BUTTON_TYPE.APPLE,
      ].map(buttonType => (
        <tr
          style={{
            backgroundColor: [
              'solid-inverted',
              'solid-indigo-inverted',
              'transparent-inverted',
              'outline-inverted',
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
                  [
                    'solid-inverted',
                    'solid-indigo-inverted',
                    'transparent-inverted',
                    'outline-inverted',
                  ].includes(buttonType)
                    ? 'text-white'
                    : 'text-gray-40'
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
            {[
              BUTTON_TYPE.SOLID,
              BUTTON_TYPE.SOLID_INVERTED,
              BUTTON_TYPE.SOLID_INDIGO,
              BUTTON_TYPE.SOLID_INDIGO_INVERTED,
              BUTTON_TYPE.SOLID_LIGHT,
              BUTTON_TYPE.OUTLINE,
              BUTTON_TYPE.OUTLINE_INDIGO,
              BUTTON_TYPE.OUTLINE_INVERTED,
              BUTTON_TYPE.TRANSPARENT,
              BUTTON_TYPE.TRANSPARENT_LIGHT,
              BUTTON_TYPE.TRANSPARENT_RED,
              BUTTON_TYPE.TRANSPARENT_INVERTED,
            ].includes(buttonType) ? (
              <Button
                {...args}
                type={buttonType}
                icon={
                  <Icon type={ICON_TYPES.HEART_OUTLINED} color="adaptive" />
                }
              />
            ) : null}
            {buttonType === BUTTON_TYPE.GOOGLE ? (
              <Button
                {...args}
                type={buttonType}
                icon={<Icon type={ICON_TYPES.GOOGLE} color="adaptive" />}
              />
            ) : null}
            {buttonType === BUTTON_TYPE.FACEBOOK ? (
              <Button
                {...args}
                type={buttonType}
                icon={<Icon type={ICON_TYPES.FACEBOOK} color="adaptive" />}
              />
            ) : null}
            {buttonType === BUTTON_TYPE.APPLE ? (
              <Button
                {...args}
                type={buttonType}
                icon={<Icon type={ICON_TYPES.APPLE} color="adaptive" />}
              />
            ) : null}
          </td>
          <td>
            {[
              BUTTON_TYPE.SOLID,
              BUTTON_TYPE.SOLID_INVERTED,
              BUTTON_TYPE.SOLID_INDIGO,
              BUTTON_TYPE.SOLID_INDIGO_INVERTED,
              BUTTON_TYPE.SOLID_LIGHT,
              BUTTON_TYPE.OUTLINE,
              BUTTON_TYPE.OUTLINE_INDIGO,
              BUTTON_TYPE.OUTLINE_INVERTED,
              BUTTON_TYPE.TRANSPARENT,
              BUTTON_TYPE.TRANSPARENT_LIGHT,
              BUTTON_TYPE.TRANSPARENT_RED,
              BUTTON_TYPE.TRANSPARENT_INVERTED,
            ].includes(buttonType) ? (
              <Button
                {...args}
                type={buttonType}
                iconOnly
                icon={
                  <Icon type={ICON_TYPES.HEART_OUTLINED} color="adaptive" />
                }
              />
            ) : null}
          </td>
          <td>
            {[
              'solid-light',
              'outline',
              'transparent',
              'transparent-light',
            ].includes(buttonType)
              ? [null, ...Object.values(BUTTON_TOGGLE)].map(toggleType => (
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
              'outline-indigo',
              'outline-inverted',
              'transparent-red',
              'transparent-inverted',
            ].includes(buttonType) ? (
              <div style={{marginBottom: '15px'}} key={buttonType}>
                <Button
                  {...args}
                  icon={<Icon type={ICON_TYPES.HEART} color="adaptive" />}
                  type={buttonType}
                />
              </div>
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
                    color="text-gray-40"
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
                    color="text-gray-40"
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
                    color="text-gray-40"
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
                      color="text-gray-40"
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
                    color="text-gray-40"
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
                    color="text-gray-40"
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
                    color="text-gray-40"
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
                      color="text-gray-40"
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
