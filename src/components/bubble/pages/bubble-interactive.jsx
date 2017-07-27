import React from 'react';
import Bubble, {DIRECTION, ALIGNMENT} from '../Bubble';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import ButtonSecondary, {TYPE} from 'buttons/ButtonSecondary';
import Breadcrumb from 'breadcrumbs/Breadcrumb';
import Avatar from 'avatar/Avatar';
import Text from 'text/Text';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Link, {COLOR as LINK_COLOR} from 'text/Link';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Bubbles = () => {
  const settings = [
    {
      name: 'direction',
      values: DIRECTION,
      required: true
    },
    {
      name: 'alignment',
      values: ALIGNMENT
    },
    {
      name: 'full',
      values: Boolean
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings} backgroundColor="dark">
      <Bubble direction={DIRECTION.TOP}>
        Hi there!!<br/>
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsActiveBlock>

    <DocsActiveBlock settings={settings} backgroundColor="dark">
      <Bubble direction={DIRECTION.TOP}>
        <ContentBox>
          <ContentBoxHeader>
            <ActionList>
              <ActionListHole>
                <Avatar imgSrc="https://source.unsplash.com/64x64/?parrot"/>
              </ActionListHole>
              <ActionListHole>
                <Breadcrumb elements={[<Link color={LINK_COLOR.GRAY}>Katie</Link>,
                  <Link color={LINK_COLOR.GRAY}>a few seconds ago</Link>]}/>
              </ActionListHole>
            </ActionList>
          </ContentBoxHeader>
          <ContentBoxContent>
            <Text>
              Hi there!! Just wondering if you have any problems with your school work. We've got plenty
              of people who can help you here :) Also, my last question was answered in less than 10 minutes :D
              Anyway, you can just go ahead and try for yourself.
            </Text>
          </ContentBoxContent>
          <ContentBoxActions>
            <ButtonSecondary type={TYPE.ALT}>Join us!</ButtonSecondary>
          </ContentBoxActions>
        </ContentBox>
      </Bubble>
    </DocsActiveBlock>
  </div>;
};


export default Bubbles;
