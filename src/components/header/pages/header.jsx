import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Header from '../Header';
import HeaderContainer from '../HeaderContainer';
import HeaderContent from '../HeaderContent';
import HeaderLeft from '../HeaderLeft';
import HeaderMiddle from '../HeaderMiddle';
import HeaderRight from '../HeaderRight';
import HomeButton from 'home-button/HomeButton';
import Search, {COLOR as SEARCH_COLOR} from 'search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from 'helpers/RwdHelper';
import IconAsButton, {
  TYPE as ICON_TYPE,
  ICON_COLOR,
} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import TextBadge, {TEXT_BADGE_COLOR} from 'badges/TextBadge';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const Headers = () => (
  <div>
    <DocsBlock info="Standard">
      <Header>
        <HeaderContainer>
          <HeaderContent>
            <HeaderLeft>left</HeaderLeft>
            <HeaderMiddle>middle</HeaderMiddle>
            <HeaderRight>right</HeaderRight>
          </HeaderContent>
        </HeaderContainer>
      </Header>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <Header>
        <HeaderContainer>
          <HeaderContent>
            <HeaderLeft>
              <HomeButton />
            </HeaderLeft>
            <HeaderMiddle>
              <Search
                placeholder="Find all the answers..."
                fullWidth
                color={SEARCH_COLOR.LIGHT}
                adaptiveIco
              />
            </HeaderMiddle>
            <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
              <div>
                <HeaderRight>
                  <ButtonSecondary
                    buttonType={BUTTON_SECONDARY_TYPE.DARK}
                    small
                  >
                    Register
                  </ButtonSecondary>
                  <IconAsButton
                    type={ICON_TYPE.STD_MESSAGES}
                    transparent
                    color={ICON_COLOR.LIGHT}
                    overlay={
                      <TextBadge color={TEXT_BADGE_COLOR.PEACH} rounded>
                        1
                      </TextBadge>
                    }
                  />
                  <IconAsButton transparent>
                    <Avatar size={AVATAR_SIZE.SMALL} />
                  </IconAsButton>
                </HeaderRight>
              </div>
            </RWDHelper>
            <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
              <div>
                <HeaderRight>
                  <IconAsButton
                    type={ICON_TYPE.STD_MENU}
                    color={ICON_COLOR.LIGHT}
                  />
                </HeaderRight>
              </div>
            </RWDHelper>
          </HeaderContent>
        </HeaderContainer>
      </Header>
    </DocsBlock>
    <DocsBlock info="Container - light">
      <Header>
        <HeaderContainer light>
          <HeaderContent>
            <HeaderLeft>
              <HomeButton />
            </HeaderLeft>
            <HeaderMiddle>
              <Search placeholder="Find all the answers..." fullWidth />
            </HeaderMiddle>
            <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
              <div>
                <HeaderRight>
                  <ActionList>
                    <ActionListHole>
                      <ButtonSecondary
                        buttonType={BUTTON_SECONDARY_TYPE.DARK_INVERSE}
                        small
                      >
                        Log in
                      </ButtonSecondary>
                    </ActionListHole>
                    <ActionListHole>
                      <ButtonSecondary
                        buttonType={BUTTON_SECONDARY_TYPE.DARK}
                        small
                      >
                        Join now
                      </ButtonSecondary>
                    </ActionListHole>
                  </ActionList>
                </HeaderRight>
              </div>
            </RWDHelper>
            <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
              <div>
                <HeaderRight>
                  <IconAsButton
                    type={ICON_TYPE.STD_MENU}
                    color={ICON_COLOR.LIGHT}
                  />
                </HeaderRight>
              </div>
            </RWDHelper>
          </HeaderContent>
        </HeaderContainer>
      </Header>
    </DocsBlock>
    <DocsBlock info="Content - auto-height">
      <Header>
        <HeaderContainer>
          <HeaderContent autoHeight>
            <HeaderLeft>
              <HomeButton />
            </HeaderLeft>
            <HeaderMiddle>
              <Search placeholder="Find all the answers..." fullWidth />
            </HeaderMiddle>
            <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
              <div>
                <HeaderRight>
                  <ActionList>
                    <ActionListHole>
                      <ButtonSecondary
                        buttonType={BUTTON_SECONDARY_TYPE.DARK_INVERSE}
                        small
                      >
                        Log in
                      </ButtonSecondary>
                    </ActionListHole>
                    <ActionListHole>
                      <ButtonSecondary
                        buttonType={BUTTON_SECONDARY_TYPE.DARK}
                        small
                      >
                        Join now
                      </ButtonSecondary>
                    </ActionListHole>
                  </ActionList>
                </HeaderRight>
              </div>
            </RWDHelper>
            <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
              <div>
                <HeaderRight>
                  <IconAsButton
                    type={ICON_TYPE.STD_MENU}
                    color={ICON_COLOR.LIGHT}
                  />
                </HeaderRight>
              </div>
            </RWDHelper>
          </HeaderContent>
        </HeaderContainer>
      </Header>
    </DocsBlock>
    <DocsBlock info="Fixed header">
      <iframe
        width="600"
        height="480"
        src="components/header/small-device.html"
      />
    </DocsBlock>
  </div>
);

export default Headers;
