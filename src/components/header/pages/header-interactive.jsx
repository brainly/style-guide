import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
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
import Button from 'buttons/Button';
import Counter from 'counters/Counter';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const Headers = () => {
  const settings = [
    {
      name: 'fixed',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Header>
          <HeaderContainer>
            <HeaderContent>
              <HeaderLeft>left</HeaderLeft>
              <HeaderMiddle>middle</HeaderMiddle>
              <HeaderRight>right</HeaderRight>
            </HeaderContent>
          </HeaderContainer>
        </Header>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Header>
          <HeaderContainer>
            <HeaderLeft>
              <HomeButton />
            </HeaderLeft>
            <HeaderMiddle>
              <Search
                placeholder="Find all the answers..."
                fullWidth
              />
            </HeaderMiddle>
            <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
              <div>
                <HeaderRight>
                  <Button type="primary" size="small">
                    Register
                  </Button>
                  <IconAsButton
                    type={ICON_TYPE.MESSAGES}
                    transparent
                    color={ICON_COLOR.LIGHT}
                    overlay={<Counter size="small">1</Counter>}
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
                    type={ICON_TYPE.MENU}
                    color={ICON_COLOR.LIGHT}
                  />
                </HeaderRight>
              </div>
            </RWDHelper>
          </HeaderContainer>
        </Header>
      </DocsActiveBlock>
    </div>
  );
};

export default Headers;
