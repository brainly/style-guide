import * as React from 'react';
import Button, {BUTTON_SIZE, BUTTON_TYPE} from './Button';
import Icon, {TYPE as ICON_TYPES} from 'icons/Icon';
import hex from '../colors/hex';
import {StoryVariantTable} from '../../_docs/utils';
import Headline from '../text/Headline';

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

export const Buttons = args => (
  <StoryVariantTable>
    <thead>
      <tr>
        <th />
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary"
            size="small"
          >
            default
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary"
            size="small"
          >
            disabled
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary"
            size="small"
          >
            with icon
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary"
            size="small"
          >
            icon only
          </Headline>
        </th>
        <th>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="gray-secondary"
            size="small"
          >
            toggle
          </Headline>
        </th>
      </tr>
    </thead>
    <tbody>
      {Object.values(BUTTON_TYPE).map(buttonType => (
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
            <Headline
              extraBold
              transform="uppercase"
              type="span"
              color={
                ['solid-inverted', 'transparent-inverted'].includes(buttonType)
                  ? 'white'
                  : 'gray-secondary'
              }
              size="small"
            >
              {buttonType.toLowerCase()}
            </Headline>
          </td>
          <td>
            <Button {...args} type={buttonType} />
          </td>
          <td>
            <Button {...args} type={buttonType} disabled />
          </td>
          <td>
            <div style={{marginBottom: '10px'}}>
              <Button
                {...args}
                type={buttonType}
                icon={
                  <Icon type={ICON_TYPES.HEART_OUTLINED} color="adaptive" />
                }
              />
            </div>
            <div>
              <Button
                {...args}
                type={buttonType}
                icon={
                  <Icon type={ICON_TYPES.HEART_OUTLINED} color="adaptive" />
                }
                reversedOrder
              />
            </div>
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
                  <div style={{marginBottom: '10px'}} key={toggleType}>
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
  <StoryVariantTable
    rowNames={Object.values(BUTTON_SIZE)}
    matrix={Object.values(BUTTON_SIZE).map(size => [
      <Button key={size} {...args} size={size} />,
    ])}
  />
);
