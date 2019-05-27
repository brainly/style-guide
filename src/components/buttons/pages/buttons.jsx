import React from 'react';
import ButtonRound from '../ButtonRound';
import Button, {BUTTON_TYPE, BUTTON_SIZE} from '../Button';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Icon, {TYPE as iconTypes, ICON_COLOR} from 'icons/Icon';

const Buttons = () => (
  <div>
    <DocsBlock info="Primary buttons">
      <Button type={BUTTON_TYPE.PRIMARY}>
        Button primary
      </Button>
      &nbsp;
      <Button type={BUTTON_TYPE.PRIMARY_BLUE}>
        Button primary blue
      </Button>
      &nbsp;
      <br />
      <br />
      <Button type={BUTTON_TYPE.PRIMARY_MINT}>
        Button primary mint
      </Button>
      &nbsp;
      <ContrastBox>
        <Button type={BUTTON_TYPE.PRIMARY_INVERTED}>
          Button primary inverted
        </Button>
      </ContrastBox>
      &nbsp;
      <br />
      <br />
    </DocsBlock>
    <DocsBlock info="Button secondary">
      <Button type={BUTTON_TYPE.SECONDARY}>
        Button secondary
      </Button>
      &nbsp;
      <br />
      <br />
    </DocsBlock>
    <DocsBlock info="Special buttons">
      <Button type={BUTTON_TYPE.FACEBOOK}>
        Button facebook
      </Button>
      &nbsp;
      <Button type={BUTTON_TYPE.WARNING}>
        Button warning
      </Button>
      &nbsp;
      <Button type={BUTTON_TYPE.DETRUCTIVE}>
        Button destructive
      </Button>
      &nbsp;
      <br />
      <br />
    </DocsBlock>
    <DocsBlock info="Link buttons">
      <Button type={BUTTON_TYPE.LINK_BUTTON}>
        Link button
      </Button>
      &nbsp;
      <ContrastBox>
        <Button type={BUTTON_TYPE.LINK_BUTTON_INVERTED}>
          Link button inverted
        </Button>
      </ContrastBox>
      &nbsp;
      <br />
      <br />
      <Button type={BUTTON_TYPE.LINK_BUTTON_PEACH}>
        Link button peach
      </Button>
      &nbsp;
      <Button type={BUTTON_TYPE.LINK_BUTTON_MUSTRAD}>
        Link button mustard
      </Button>
      &nbsp;
    </DocsBlock>
    <DocsBlock info="Buttons avalaible sizes">
      <Button type={BUTTON_TYPE.PRIMARY} size={BUTTON_SIZE.LARGE}>
        Large
      </Button>
      &nbsp;
      <Button type={BUTTON_TYPE.PRIMARY} size={BUTTON_SIZE.MEDIUM}>
        Medium
      </Button>
      &nbsp;
      <Button type={BUTTON_TYPE.PRIMARY} size={BUTTON_SIZE.SMALL}>
        Small
      </Button>
    </DocsBlock>
    <DocsBlock info="Buttons with icons">
      <Button
        size={BUTTON_SIZE.LARGE}
        type={BUTTON_TYPE.FACEBOOK}
        icon={<Icon type={iconTypes.FB} color={ICON_COLOR.LIGHT} size={32} />}
      >
        FB button
      </Button>
      &nbsp;
      <Button
        type={BUTTON_TYPE.FACEBOOK}
        icon={<Icon type={iconTypes.FB} color={ICON_COLOR.LIGHT} size={24} />}
      >
        FB button
      </Button>
      &nbsp;
      <Button
        size={BUTTON_SIZE.SMALL}
        type={BUTTON_TYPE.FACEBOOK}
        icon={<Icon type={iconTypes.FB} color={ICON_COLOR.LIGHT} size={16} />}
      >
        FB button
      </Button>
      <br />
      <br />
      <Button
        size={BUTTON_SIZE.LARGE}
        type={BUTTON_TYPE.LINK_BUTTON_PEACH}
        icon={<Icon type={iconTypes.HEART} color={ICON_COLOR.PEACH} size={32} />}
      >
        Thank you
      </Button>
      &nbsp;
      <Button
        type={BUTTON_TYPE.LINK_BUTTON_PEACH}
        icon={<Icon type={iconTypes.HEART} color={ICON_COLOR.PEACH} size={24} />}
      >
        Thank you
      </Button>
      &nbsp;
      <Button
        size={BUTTON_SIZE.SMALL}
        type={BUTTON_TYPE.LINK_BUTTON_PEACH}
        icon={<Icon type={iconTypes.HEART} color={ICON_COLOR.PEACH} size={16} />}
      >
        Thank you
      </Button>
      &nbsp;
      <Button
        size={BUTTON_SIZE.LARGE}
        type={BUTTON_TYPE.LINK_BUTTON_MUSTRAD}
        icon={<Icon type={iconTypes.EXCELLENT} color={ICON_COLOR.MUSTARD} size={32} />}
      >
        Mark as best
      </Button>
      &nbsp;
      <Button
        type={BUTTON_TYPE.LINK_BUTTON_MUSTRAD}
        icon={<Icon type={iconTypes.EXCELLENT} color={ICON_COLOR.MUSTARD} size={24} />}
      >
        Mark as best
      </Button>
      &nbsp;
      <Button
        size={BUTTON_SIZE.SMALL}
        type={BUTTON_TYPE.LINK_BUTTON_MUSTRAD}
        icon={<Icon type={iconTypes.EXCELLENT} color={ICON_COLOR.MUSTARD} size={16} />}
      >
        Mark as best
      </Button>
      &nbsp;
    </DocsBlock>

    <DocsBlock info="Primary round button">
      <ButtonRound label="Add question">
        <Icon type={iconTypes.PLUS} size={16} />
      </ButtonRound>
    </DocsBlock>
  </div>
);

export default Buttons;
