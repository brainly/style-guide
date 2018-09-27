import React from 'react';
import Bubble, {DIRECTION, ALIGNMENT, BUBBLE_COLOR} from '../Bubble';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import Text from 'text/Text';
import Avatar from 'avatar/Avatar';
import Breadcrumb from 'breadcrumbs/Breadcrumb';
import Link from 'text/Link';
import {TEXT_COLOR} from 'text';

const Bubbles = () => (
  <div>
    <DocsBlock info="Top (middle)" additionalInfo="--top">
      <Bubble direction={DIRECTION.TOP}>
        Hi there!!<br />
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info="Top-start" additionalInfo="--top --row-start">
      <Bubble direction={DIRECTION.TOP} alignment={ALIGNMENT.START}>
        Hi there!!<br />
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info="Top-end" additionalInfo="--top --row-end">
      <Bubble direction={DIRECTION.TOP} alignment={ALIGNMENT.END}>
        Hi there!!<br />
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info="Bottom-start" additionalInfo="--bottom --row-start (--/--row-end)">
      <Bubble direction={DIRECTION.BOTTOM} alignment={ALIGNMENT.START}>
        Hi there!!<br />
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info="Left-start" additionalInfo="--left --column-start (--/--column-end)">
      <div style={{width: '300px'}}>
        <Bubble direction={DIRECTION.LEFT} alignment={ALIGNMENT.START}>
          Hi there!! Just wondering if you have any problems with your school work.
          We&apos;ve got plenty of people who can help you here :)
          Also, my last question was answered in less than 10 minutes :D
          Anyway, you can just go ahead and try for yourself.
        </Bubble>
      </div>
    </DocsBlock>

    <DocsBlock info="Right-start" additionalInfo="--right --column-start (--/--column-end)">
      <div style={{width: '300px'}}>
        <Bubble direction={DIRECTION.RIGHT} alignment={ALIGNMENT.START}>
          Hi there!! Just wondering if you have any problems with your school work.
          We&apos;ve got plenty of people who can help you here :)
          Also, my last question was answered in less than 10 minutes :D
          Anyway, you can just go ahead and try for yourself.
        </Bubble>
      </div>
    </DocsBlock>

    <DocsBlock info="Full + left" additionalInfo="--full (makes 100% height) --top">
      <div style={{height: '200px'}}>
        <Bubble direction={DIRECTION.TOP} full>
          Hi there!!<br />
          Just wondering if you have any problems with your school work.
        </Bubble>
      </div>
    </DocsBlock>

    <DocsBlock info="Example usage" additionalInfo="--top">
      <Bubble direction={DIRECTION.TOP}>
        <ContentBox>
          <ContentBoxHeader>
            <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
            <Breadcrumb
              elements={[
                <Link key={1} href="#" color={TEXT_COLOR.GRAY}>Katie</Link>,
                <Link key={2} href="#" color={TEXT_COLOR.GRAY}>a few seconds ago</Link>
              ]}
            />
          </ContentBoxHeader>
          <ContentBoxContent>
            <Text>
              Hi there!! Just wondering if you have any problems with your school work. We&apos;ve got plenty
              of people who
              can help you here :) Also, my last question was answered in less than 10 minutes :D Anyway,
              you can just
              go ahead and try for yourself.
            </Text>
          </ContentBoxContent>
          <ContentBoxActions>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT}>
              Join us!
            </ButtonSecondary>
          </ContentBoxActions>
        </ContentBox>
      </Bubble>
    </DocsBlock>

    {Object.values(BUBBLE_COLOR).map(color => (
      <DocsBlock key={color} info={`color ${color}`}>
        <Bubble direction={DIRECTION.LEFT} color={color}>
          {color}<br />
        </Bubble>
      </DocsBlock>))
    }

    <DocsBlock info="Without shadow" additionalInfo="--no-shadow">
      <Bubble direction={DIRECTION.LEFT} color={BUBBLE_COLOR.MINT_SECONDARY} noShadow>
        Hi there!!<br />
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>
  </div>
);

export default Bubbles;
