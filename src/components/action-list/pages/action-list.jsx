import React from 'react';
import ActionList, {DIRECTION} from '../ActionList';
import ButtonSecondary, {types as buttonSecondaryTypes} from '../../buttons/ButtonSecondary';
import ButtonPrimary, {types as buttonPrimaryTypes} from '../../buttons/ButtonPrimary';
import Icon, {TYPE as iconTypes, COLOR as iconColors} from '../../icons/Icon';
import ContrastBox from '../../../docs/ContrastBox';
import DocsBlock from '../../../docs/DocsBlock';
import ActionListHole from '../ActionListHole';

const ActionLists = () =>
  <div>
    <DocsBlock info='Default'>
      <ContrastBox fullWidth={true}>
        <ActionList>
          <ActionListHole>
            <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To right'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.TO_RIGHT}>
          <ActionListHole>
            <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To top'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.TO_TOP}>
          <ActionListHole>
            <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Centered'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.CENTERED}>
          <ActionListHole>
            <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Space between'>
      <ActionList direction={DIRECTION.SPACE_BETWEEN}>
        <ActionListHole>
          <div className="sg-label">
            <div className="sg-label__icon">
              <Icon type={iconTypes.ANSWER} size={14} color={iconColors.GRAY_SECONDARY}/>
            </div>
            <div className="sg-text sg-text--obscure sg-text--emphasised sg-text--gray-secondary">
              0/5
            </div>
          </div>
        </ActionListHole>
        <ActionListHole>
          <div className="sg-label">
            <div className="sg-label__icon">
              <Icon type={iconTypes.COUNTER} size={14} color={iconColors.GRAY_SECONDARY}/>
            </div>
            <div className="sg-text sg-text--obscure sg-text--emphasised sg-text--gray-secondary">
              2d : 00h
            </div>
          </div>
        </ActionListHole>
        <ActionListHole><ButtonSecondary type={buttonSecondaryTypes.alt_inverse} small={true}>
          start
        </ButtonSecondary>
        </ActionListHole>
      </ActionList>
    </DocsBlock>

    <DocsBlock info='No wrap' multiContent={[
      <ContrastBox narrow={true}>
        <ActionList noWrap={true}>
          <ActionListHole>
            <Icon type={iconTypes.MESSAGES} size={24}/>
          </ActionListHole>
          <ActionListHole>
            <p className="sg-text sg-text--light">
              Elements in this box will just never wrap
            </p>
          </ActionListHole>
        </ActionList>
      </ContrastBox>,
      <ContrastBox narrow={true}>
        <ActionList>
          <ActionListHole>
            <Icon type={iconTypes.MESSAGES} size={24}/>
          </ActionListHole>
          <ActionListHole>
            <p className="sg-text sg-text--light">
              Default behaviour for elements is to wrap
            </p>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    ]}>
    </DocsBlock>
  </div>;

export default ActionLists;
