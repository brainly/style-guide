import React from 'react';
import Header from '../Header';
import HeaderContainer from '../HeaderContainer';
import HeaderContent from '../HeaderContent';
import HeaderLeft from '../HeaderLeft';
import HeaderMiddle from '../HeaderMiddle';
import HeaderRight from '../HeaderRight';
import HomeButton from '../../home-button/HomeButton';
import Search, {COLOR as SEARCH_COLOR} from 'search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from 'helpers/RwdHelper';
import IconAsButton, {TYPE as ICON_TYPE, ICON_COLOR} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import Badge, {COLOR as BADGE_COLOR} from 'badges/Badge';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const SmallDeviceExample = () => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href="../../../style-guide.css" />
      <link rel="stylesheet" href="../../css/main.css" />
    </head>
    <body className="docs--header-small-example">
      <script src="images/icons.js" />
      <Header fixed>
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
                  <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK} small>Register</ButtonSecondary>
                  <IconAsButton
                    type={ICON_TYPE.MESSAGES}
                    transparent
                    color={ICON_COLOR.LIGHT}
                    overlay={
                      <Badge color={BADGE_COLOR.PEACH} rounded>1</Badge>
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
                  <IconAsButton type={ICON_TYPE.MENU} color={ICON_COLOR.LIGHT} />
                </HeaderRight>
              </div>
            </RWDHelper>
          </HeaderContent>
        </HeaderContainer>
      </Header>
    </body>
  </html>
);

export default SmallDeviceExample;
