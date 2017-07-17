import React from 'react';
import Header from '../Header';
import HeaderLeft from '../HeaderLeft';
import HeaderMiddle from '../HeaderMiddle';
import HeaderRight from '../HeaderRight';
import HomeButton from '../../home-button/HomeButton';
import Search, {COLOR as SEARCH_COLOR} from '../../search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from '../../helpers/RwdHelper';
import IconAsButton, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../../icon-as-button/IconAsButton';
import ButtonSecondary, {TYPE as BUTTON_TYPE} from '../../buttons/ButtonSecondary';
import Badge, {COLOR as BADGE_COLOR} from '../../badges/Badge';

const SmallDeviceExample = () =>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="../../../style-guide.css"/>
      <link rel="stylesheet" href="../../css/main.css"/>
    </head>
    <body className="docs--header-small-example">
      <script src="images/icons.js"></script>
      <Header fixed={true}>
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
              {/* FIXME: There should be an avatar */}
              <IconAsButton  color={ICON_COLOR.transparent} type={ICON_TYPE.PROFILE}/>
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
    </body>
  </html>;

export default SmallDeviceExample;
