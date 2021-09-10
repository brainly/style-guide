import * as React from 'react';
import Button, {BUTTON_SIZE, BUTTON_TYPE} from './Button';
import Icon, {TYPE as ICON_TYPES} from 'icons/Icon';
import hex from '../colors/hex';
import {StoryVariant} from '../../../.storybook/utils';

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
  <table className="sg-button-stories-table">
    <thead>
      <tr>
        <th>type/state</th>
        <th>default</th>
        <th>disabled</th>
        <th>with icon/reversed order</th>
        <th>icon only</th>
        <th>toggle</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(BUTTON_TYPE).map(buttonType => (
        <tr
          style={{
            backgroundColor:
              buttonType === 'SOLID_INVERTED'
                ? hex.graySecondary
                : 'transparent',
          }}
          key={buttonType}
        >
          <td>{buttonType.toLowerCase()}</td>
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
              'SOLID_LIGHT',
              'OUTLINE',
              'TRANSPARENT',
              'TRANSPARENT_LIGHT',
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
  </table>
);

export const Sizes = args => (
  <div>
    {Object.values(BUTTON_SIZE).map(size => (
      <StoryVariant key={size} label={`size - ${size}`}>
        <Button {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);
