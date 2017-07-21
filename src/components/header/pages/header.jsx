import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Header from '../Header';
import HeaderLeft from '../HeaderLeft';
import HeaderMiddle from '../HeaderMiddle';
import HeaderRight from '../HeaderRight';
import HomeButton from 'home-button/HomeButton';
import Search, {COLOR as SEARCH_COLOR} from 'search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from 'helpers/RwdHelper';
import IconAsButton, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {TYPE as BUTTON_TYPE} from 'buttons/ButtonSecondary';
import Badge, {COLOR as BADGE_COLOR} from 'badges/Badge';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const Headers = () =>
  <div>
    <DocsBlock info="Standard">
      <Header>
        <HeaderLeft>left</HeaderLeft>
        <HeaderMiddle>middle</HeaderMiddle>
        <HeaderRight>right</HeaderRight>
      </Header>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <Header>
        <HeaderLeft>
          <HomeButton/>
        </HeaderLeft>
        <HeaderMiddle>
          <Search placeholder="Find all the answers..." fullWidth={true} color={SEARCH_COLOR.LIGHT}
            adaptiveIco={true}/>
        </HeaderMiddle>
        <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
          <div>
            <HeaderRight>
              <ButtonSecondary type={BUTTON_TYPE.DARK} small={true}>Register</ButtonSecondary>
              <IconAsButton type={ICON_TYPE.MESSAGES} transparent={true} color={ICON_COLOR.LIGHT} overlay={
                <Badge color={BADGE_COLOR.PEACH} rounded={true}>1</Badge>
              }/>
              <IconAsButton transparent={true}>
                <Avatar size={AVATAR_SIZE.SMALL}/>
              </IconAsButton>
            </HeaderRight>
          </div>
        </RWDHelper>
        <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
          <div>
            <HeaderRight>
              <IconAsButton type={ICON_TYPE.MENU} color={ICON_COLOR.LIGHT}/>
            </HeaderRight>
          </div>
        </RWDHelper>
      </Header>
    </DocsBlock>
    <DocsBlock info="Light">
      <Header light={true}>
        <HeaderLeft>
          <HomeButton/>
        </HeaderLeft>
        <HeaderMiddle>
          <Search placeholder="Find all the answers..." fullWidth={true}/>
        </HeaderMiddle>
        <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
          <div>
            <HeaderRight>
              <ActionList>
                <ActionListHole>
                  <ButtonSecondary type={BUTTON_TYPE.DARK_INVERSE} small={true}>Log in</ButtonSecondary>
                </ActionListHole>
                <ActionListHole>
                  <ButtonSecondary type={BUTTON_TYPE.DARK} small={true}>Join now</ButtonSecondary>
                </ActionListHole>
              </ActionList>
            </HeaderRight>
          </div>
        </RWDHelper>
        <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
          <div>
            <HeaderRight>
              <IconAsButton type={ICON_TYPE.MENU} color={ICON_COLOR.LIGHT}/>
            </HeaderRight>
          </div>
        </RWDHelper>
      </Header>
    </DocsBlock>
    <DocsBlock info="Fixed header">
      <iframe width="600" height="480" src='components/header/small-device.html'></iframe>
    </DocsBlock>
  </div>;

export default Headers;
