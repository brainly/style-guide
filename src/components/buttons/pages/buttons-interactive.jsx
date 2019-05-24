import React from 'react';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from '../ButtonPrimary';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import Icon, {TYPE as ICON_TYPES, ICON_COLOR} from 'icons/Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Buttons = () => {
  const allIcons = {};

  Object.keys(ICON_TYPES).forEach(type =>
    allIcons[type] = <Icon type={ICON_TYPES[type]} color={ICON_COLOR.ADAPTIVE} size={16} />);

  const primarySettings = [
    {
      name: 'buttonType',
      values: BUTTON_PRIMARY_TYPE
    },
    {
      name: 'wide',
      values: Boolean
    },
    {
      name: 'disabled',
      values: Boolean
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

  const secondarySettings = [
    {
      name: 'buttonType',
      values: BUTTON_SECONDARY_TYPE
    },
    {
      name: 'wide',
      values: Boolean
    },
    {
      name: 'disabled',
      values: Boolean
    },
    {
      name: 'href',
      values: String
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={primarySettings}>
        <ButtonPrimary>
          Add your answer primary
        </ButtonPrimary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={secondarySettings}>
        <ButtonSecondary>
          Add your answer secondary
        </ButtonSecondary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={primarySettings}>
        <ButtonPrimary
          icon={allIcons.FB}
          buttonType={BUTTON_PRIMARY_TYPE.FB}
        >
          Login with Facebook
        </ButtonPrimary>
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
