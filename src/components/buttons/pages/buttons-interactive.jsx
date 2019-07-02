import React from 'react';
import Button, {BUTTON_TYPE, BUTTON_SIZE} from '../Button';
import ButtonRound from '../ButtonRound';
import Icon, {TYPE as ICON_TYPES, ICON_COLOR} from 'icons/Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Buttons = () => {
  const allIcons = {};

  Object.keys(ICON_TYPES).forEach(type =>
    allIcons[type] = <Icon type={ICON_TYPES[type]} color={ICON_COLOR.ADAPTIVE} size={24} />);

  const roundSettings = [
    {
      name: 'href',
      values: String
    },
    {
      name: 'label',
      values: String
    }
  ];

  const buttonsSettings = [
    {
      name: 'type',
      values: BUTTON_TYPE
    },
    {
      name: 'disabled',
      values: Boolean
    },
    {
      name: 'fullWidth',
      values: Boolean
    },
    {
      name: 'size',
      values: BUTTON_SIZE
    },
    {
      name: 'icon',
      values: allIcons
    },
    {
      name: 'href',
      values: String
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={buttonsSettings}>
        <Button type={BUTTON_TYPE.PRIMARY_BLUE}>
          Ask your question
        </Button>
      </DocsActiveBlock>
      <DocsActiveBlock settings={buttonsSettings}>
        <Button
          icon={allIcons.ANSWER}
          type={BUTTON_TYPE.PRIMARY}
        >
          Answer
        </Button>
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
