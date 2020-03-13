import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Header from '../Header';
import HeaderContainer from '../HeaderContainer';
import HeaderContent from '../HeaderContent';
import HeaderLeft from '../HeaderLeft';
import HeaderMiddle from '../HeaderMiddle';
import HeaderRight from '../HeaderRight';
import HomeButton from 'home-button/HomeButton';
import Search from 'search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from 'helpers/RwdHelper';
import IconAsButton, {
  TYPE as ICON_TYPE,
  ICON_COLOR,
} from 'icon-as-button/IconAsButton';
import Button from 'buttons/Button';
import Counter from 'counters/Counter';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const Headers = () => (
  <div>
    <DocsBlock info="Standard">
      <ContrastBox fullWidth>
        <Header>
          <HeaderContainer>
            <HeaderContent>
              <HeaderLeft>left</HeaderLeft>
              <HeaderMiddle>middle</HeaderMiddle>
              <HeaderRight>right</HeaderRight>
            </HeaderContent>
          </HeaderContainer>
        </Header>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Example usage">
      <ContrastBox fullWidth>
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
                  withRoundButton
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
                      color={ICON_COLOR.DARK}
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
                      color={ICON_COLOR.DARK}
                    />
                  </HeaderRight>
                </div>
              </RWDHelper>
            </HeaderContent>
          </HeaderContainer>
        </Header>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="With bottom divider">
      <ContrastBox fullWidth>
        <Header withDivider>
          <HeaderContainer>
            <HeaderContent>
              <HeaderLeft>
                <HomeButton />
              </HeaderLeft>
              <HeaderMiddle>
                <Search
                  placeholder="Find all the answers..."
                  fullWidth
                  withRoundButton
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
                      color={ICON_COLOR.DARK}
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
                      color={ICON_COLOR.DARK}
                    />
                  </HeaderRight>
                </div>
              </RWDHelper>
            </HeaderContent>
          </HeaderContainer>
        </Header>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Content - auto-height">
      <ContrastBox fullWidth>
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
                        <Button type="primary-inverted" size="small">
                          Log in
                        </Button>
                      </ActionListHole>
                      <ActionListHole>
                        <Button type="primary" size="small">
                          Join now
                        </Button>
                      </ActionListHole>
                    </ActionList>
                  </HeaderRight>
                </div>
              </RWDHelper>
              <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
                <div>
                  <HeaderRight>
                    <IconAsButton
                      type={ICON_TYPE.MENU}
                      color={ICON_COLOR.DARK}
                    />
                  </HeaderRight>
                </div>
              </RWDHelper>
            </HeaderContent>
          </HeaderContainer>
        </Header>
      </ContrastBox>
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
