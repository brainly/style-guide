import React from 'react';
import ActionList, {DIRECTION, ALIGNMENT} from '../ActionList';
import Button from 'buttons/Button';
import Headline, {
  HEADLINE_SIZE,
  HEADLINE_TYPE,
  HEADLINE_COLOR,
} from 'text/Headline';
import LabelDeprecated, {
  SIZE as LABEL_SIZE,
  ICON_COLOR,
  ICON_TYPE,
} from 'labels-deprecated/LabelDeprecated';
import Icon from 'icons/Icon';
import Text, {TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from 'text/Text';

import ContrastBox from 'components/ContrastBox';
import DocsBlock from 'components/DocsBlock';
import ActionListHole, {ACTION_LIST_HOLE_SPACING} from '../ActionListHole';
import SeparatorVertical, {
  SIZE as SEPARATOR_VERTICAL_SIZE,
} from 'separators/SeparatorVertical';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {
  ALIGNMENT as CB_ALIGNMENT,
} from 'content-box/ContentBoxContent';
import Radio from 'form-elements/Radio';

const ActionLists = () => (
  <div>
    <DocsBlock info="Default">
      <ContrastBox fullWidth>
        <ActionList>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              accept
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-inverted">Later</Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="To right">
      <ContrastBox fullWidth>
        <ActionList direction={DIRECTION.TO_RIGHT}>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              accept
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-inverted">Later</Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="To top">
      <ContrastBox fullWidth>
        <ActionList toTop>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              accept
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-inverted">Later</Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Baseline">
      <ContrastBox fullWidth>
        <ActionList align={ALIGNMENT.BASELINE}>
          <ActionListHole>
            <Text>Normale text</Text>
          </ActionListHole>
          <ActionListHole>
            <Text weight={TEXT_WEIGHT.BOLD}>Bold text</Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Centered">
      <ContrastBox fullWidth>
        <ActionList direction={DIRECTION.CENTERED}>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              accept
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-inverted">Later</Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Space between">
      <ActionList direction={DIRECTION.SPACE_BETWEEN}>
        <ActionListHole>
          <LabelDeprecated
            iconType={ICON_TYPE.ANSWER}
            iconColor={ICON_COLOR.GRAY_SECONDARY}
            secondary
            size={LABEL_SIZE.SMALL}
          >
            <Text
              size={TEXT_SIZE.SMALL}
              weight={TEXT_WEIGHT.BOLD}
              color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}
            >
              0/5
            </Text>
          </LabelDeprecated>
        </ActionListHole>
        <ActionListHole>
          <LabelDeprecated
            iconType={ICON_TYPE.COUNTER}
            iconColor={ICON_COLOR.GRAY_SECONDARY}
            secondary
            size={LABEL_SIZE.SMALL}
          >
            <Text
              size={TEXT_SIZE.SMALL}
              weight={TEXT_WEIGHT.BOLD}
              color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}
            >
              2d: 00h
            </Text>
          </LabelDeprecated>
        </ActionListHole>
        <ActionListHole>
          <Button type="secondary" size="small">
            start
          </Button>
        </ActionListHole>
      </ActionList>
    </DocsBlock>

    <DocsBlock info="Space around">
      <ActionList direction={DIRECTION.SPACE_AROUND}>
        <ActionListHole>
          <LabelDeprecated
            iconType={ICON_TYPE.ANSWER}
            iconColor={ICON_COLOR.GRAY_SECONDARY}
            secondary
            size={LABEL_SIZE.SMALL}
          >
            <Text
              size={TEXT_SIZE.SMALL}
              weight={TEXT_WEIGHT.BOLD}
              color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}
            >
              0/5
            </Text>
          </LabelDeprecated>
        </ActionListHole>
        <ActionListHole>
          <LabelDeprecated
            iconType={ICON_TYPE.COUNTER}
            iconColor={ICON_COLOR.GRAY_SECONDARY}
            secondary
            size={LABEL_SIZE.SMALL}
          >
            <Text
              size={TEXT_SIZE.SMALL}
              weight={TEXT_WEIGHT.BOLD}
              color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}
            >
              2d: 00h
            </Text>
          </LabelDeprecated>
        </ActionListHole>
        <ActionListHole>
          <Button type="secondary" size="small">
            start
          </Button>
        </ActionListHole>
      </ActionList>
    </DocsBlock>

    <DocsBlock info="Space evenly">
      <ActionList direction={DIRECTION.SPACE_EVENLY}>
        <ActionListHole>
          <LabelDeprecated
            iconType={ICON_TYPE.ANSWER}
            iconColor={ICON_COLOR.GRAY_SECONDARY}
            secondary
            size={LABEL_SIZE.SMALL}
          >
            <Text
              size={TEXT_SIZE.SMALL}
              weight={TEXT_WEIGHT.BOLD}
              color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}
            >
              0/5
            </Text>
          </LabelDeprecated>
        </ActionListHole>
        <ActionListHole>
          <LabelDeprecated
            iconType={ICON_TYPE.COUNTER}
            iconColor={ICON_COLOR.GRAY_SECONDARY}
            secondary
            size={LABEL_SIZE.SMALL}
          >
            <Text
              size={TEXT_SIZE.SMALL}
              weight={TEXT_WEIGHT.BOLD}
              color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}
            >
              2d: 00h
            </Text>
          </LabelDeprecated>
        </ActionListHole>
        <ActionListHole>
          <Button type="secondary" size="small">
            start
          </Button>
        </ActionListHole>
      </ActionList>
    </DocsBlock>

    <DocsBlock
      info="No wrap"
      multiContent={[
        <ContrastBox key={1} narrow>
          <ActionList noWrap>
            <ActionListHole>
              <Icon type={ICON_TYPE.MESSAGES} size={24} />
            </ActionListHole>
            <ActionListHole>
              <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
                Elements in this box will just never wrap
              </Text>
            </ActionListHole>
          </ActionList>
        </ContrastBox>,
        <ContrastBox key={2} narrow>
          <ActionList>
            <ActionListHole>
              <Icon type={ICON_TYPE.MESSAGES} size={24} />
            </ActionListHole>
            <ActionListHole>
              <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
                Default behaviour for elements is to wrap
              </Text>
            </ActionListHole>
          </ActionList>
        </ContrastBox>,
      ]}
    />

    <DocsBlock info="Hole - as container">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole asContainer>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              You can position absolute elements here
            </Text>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              Default behaviour
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - spaced small">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.SMALL}>
            <Button type="solid-blue" size="small">
              Without default margin
            </Button>
          </ActionListHole>
          <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.SMALL}>
            <Button type="solid-blue" size="small">
              Without default margin
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              Last hole does not have margin
            </Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - spaced xsmall">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.XSMALL}>
            <Button type="solid-blue" size="small">
              Without default margin
            </Button>
          </ActionListHole>
          <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.XSMALL}>
            <Button type="solid-blue" size="small">
              Without default margin
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              Last hole does not have margin
            </Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - no-spacing">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole noSpacing>
            <Button type="solid-blue" size="small">
              Without default margin
            </Button>
          </ActionListHole>
          <ActionListHole noSpacing>
            <Button type="solid-blue" size="small">
              Without default margin
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              Last hole does not have margin
            </Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - space-bellow">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole spaceBellow>
            <Button type="solid-blue" size="small">
              With space bellow
            </Button>
          </ActionListHole>
          <ActionListHole spaceBellow>
            <Button type="solid-blue" size="small">
              With space bellow
            </Button>
          </ActionListHole>
          <ActionListHole spaceBellow>
            <Button type="solid-blue" size="small">
              With space bellow
            </Button>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - grow">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole grow>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              This component will grow to fill all remaining size
            </Text>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              This component has default width
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - no-shrink">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole grow>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              This component will grow to fill all remaining size
            </Text>
          </ActionListHole>
          <ActionListHole noShrink>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              This component will not be shrinked even if its width is smaller
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - to-right">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              This is default component
            </Text>
          </ActionListHole>
          <ActionListHole toRight>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.WHITE}>
              This component will stick to right side
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - to-end">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole>
            <Headline
              size={HEADLINE_SIZE.XXXLARGE}
              type={HEADLINE_TYPE.SPAN}
              color={HEADLINE_COLOR.LIGHT}
            >
              $14.95
            </Headline>
          </ActionListHole>
          <ActionListHole toEnd>
            <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
              per month
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - stretch">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole>
            <Headline
              size={HEADLINE_SIZE.XXXLARGE}
              type={HEADLINE_TYPE.SPAN}
              color={HEADLINE_COLOR.LIGHT}
            >
              $14.95
            </Headline>
          </ActionListHole>
          <ActionListHole stretch>
            <SeparatorVertical size={SEPARATOR_VERTICAL_SIZE.FULL} />
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - equal width">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole equalWidth>
            <ContentBox>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
                  short text
                </Text>
                <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                  <Radio />
                </ContentBoxContent>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
          <ActionListHole equalWidth>
            <ContentBox>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
                  and medium text
                </Text>
                <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                  <Radio />
                </ContentBoxContent>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
          <ActionListHole equalWidth>
            <ContentBox>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
                  and some longer text
                </Text>
                <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                  <Radio />
                </ContentBoxContent>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
          <ActionListHole equalWidth>
            <ContentBox>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
                  and medium text
                </Text>
                <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                  <Radio />
                </ContentBoxContent>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
          <ActionListHole equalWidth>
            <ContentBox>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
                  short text
                </Text>
                <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                  <Radio />
                </ContentBoxContent>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
          <ActionListHole equalWidth>
            <ContentBox>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Text type={TEXT_TYPE.SPAN} color={TEXT_COLOR.WHITE}>
                  and medium text
                </Text>
              </ContentBoxContent>
              <ContentBoxContent align={CB_ALIGNMENT.CENTER}>
                <Radio />
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - hide overflow">
      <ActionList noWrap>
        <ActionListHole hideOverflow>
          <div style={{height: '16px', lineHeight: '16px'}}>
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test
          </div>
        </ActionListHole>
      </ActionList>
    </DocsBlock>
  </div>
);

export default ActionLists;
