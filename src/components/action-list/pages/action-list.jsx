import React from 'react';
import ActionList, {DIRECTION} from '../ActionList';
import ButtonSecondary, {types as buttonSecondaryTypes} from '../../buttons/ButtonSecondary';
import ButtonPrimary, {types as buttonPrimaryTypes} from '../../buttons/ButtonPrimary';
import Icon, {types as iconTypes, colors as iconColors} from '../../icons/Icon';
import ContrastBox from '../../../docs/ContrastBox';
import DocsBlock from '../../../docs/DocsBlock';

const ActionLists = () =>
  <div>
    <DocsBlock info='Default'>
      <ContrastBox fullWidth={true}>
        <ActionList holes={[
          <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
            accept
          </ButtonSecondary>,
          <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
            Later
          </ButtonPrimary>
        ]}>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To right'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.TO_RIGHT} holes={[
          <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
            accept
          </ButtonSecondary>,
          <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
            Later
          </ButtonPrimary>
        ]}>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To top'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.TO_TOP} holes={[
          <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
            accept
          </ButtonSecondary>,
          <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
            Later
          </ButtonPrimary>
        ]}>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Centered'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.CENTERED} holes={[
          <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
            accept
          </ButtonSecondary>,
          <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
            Later
          </ButtonPrimary>
        ]}>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Space between'>
      <ActionList direction={DIRECTION.SPACE_BETWEEN} holes={[
        <div className="sg-label">
          <div className="sg-label__icon">
            <Icon type={iconTypes.answer} size={14} color={iconColors.gray_secondary}/>
          </div>
          <div className="sg-text sg-text--obscure sg-text--emphasised sg-text--gray-secondary">
            0/5
          </div>
        </div>,
        <div className="sg-label">
          <div className="sg-label__icon">
            <Icon type={iconTypes.counter} size={14} color={iconColors.gray_secondary}/>
          </div>
          <div className="sg-text sg-text--obscure sg-text--emphasised sg-text--gray-secondary">
            2d : 00h
          </div>
        </div>,
        <ButtonSecondary type={buttonSecondaryTypes.alt_inverse} small={true}>
          start
        </ButtonSecondary>
      ]}>
      </ActionList>
    </DocsBlock>

    <DocsBlock info='No wrap' multiContent={[
      <ContrastBox narrow={true}>
        <ActionList noWrap={true} holes={[
          <Icon type={iconTypes.messages} size={24} />,
          <p className="sg-text sg-text--light">
            Elements in this box will just never wrap
          </p>
        ]}>
        </ActionList>
      </ContrastBox>,
      <ContrastBox narrow={true}>
        <ActionList holes={[
          <Icon type={iconTypes.messages} size={24} />,
          <p className="sg-text sg-text--light">
            Default behaviour for elements is to wrap
          </p>
        ]}>
        </ActionList>
      </ContrastBox>
    ]}>
    </DocsBlock>
  </div>;

export default ActionLists;
