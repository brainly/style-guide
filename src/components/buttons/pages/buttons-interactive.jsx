/* eslint-disable react/prop-types */
import * as React from 'react';
import Button, {BUTTON_TYPE, BUTTON_SIZE, BUTTON_TOGGLE} from '../Button';
import ButtonRound from '../ButtonRound';
import Icon, {TYPE as ICON_TYPES, ICON_COLOR} from 'icons/Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const ButtonIconAligner = props => {
  let iconElement;

  if (props.icon) {
    let iconSize;

    if (props.size === BUTTON_SIZE.S) {
      iconSize = 16;
    } else if (props.size === BUTTON_SIZE.M) {
      iconSize = 24;
    } else if (props.size === BUTTON_SIZE.L) {
      iconSize = 32;
    }

    iconElement = (
      <Icon type={props.icon} color={ICON_COLOR.ADAPTIVE} size={iconSize} />
    );
  }

  return <Button {...props} icon={iconElement} />;
};

const Buttons = () => {
  const allIcons = Object.entries(ICON_TYPES).reduce(
    (acc, [key, type]) => ({
      ...acc,
      [key]: type,
    }),
    {}
  );

  const roundSettings = [
    {
      name: 'href',
      values: String,
    },
    {
      name: 'label',
      values: String,
    },
  ];

  const buttonsSettings = [
    {
      name: 'type',
      values: BUTTON_TYPE,
    },
    {
      name: 'disabled',
      values: Boolean,
    },
    {
      name: 'loading',
      values: Boolean,
    },
    {
      name: 'fullWidth',
      values: Boolean,
    },
    {
      name: 'size',
      values: BUTTON_SIZE,
    },
    {
      name: 'icon',
      values: allIcons,
    },
    {
      name: 'iconOnly',
      values: Boolean,
    },
    {
      name: 'reversedOrder',
      values: Boolean,
    },
    {
      name: 'toggle',
      values: BUTTON_TOGGLE,
    },
    {
      name: 'href',
      values: String,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={buttonsSettings}>
        <ButtonIconAligner type={BUTTON_TYPE.SOLID_BLUE}>
          Ask your question
        </ButtonIconAligner>
      </DocsActiveBlock>
      <DocsActiveBlock settings={buttonsSettings}>
        <ButtonIconAligner icon={allIcons.ANSWER} type={BUTTON_TYPE.SOLID}>
          Answer
        </ButtonIconAligner>
      </DocsActiveBlock>

      <DocsActiveBlock settings={roundSettings}>
        <ButtonRound label="Add question">
          <Icon type={ICON_TYPES.PLUS} size={16} />
        </ButtonRound>
      </DocsActiveBlock>
    </div>
  );
};

export default Buttons;
