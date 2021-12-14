import * as React from 'react';
import Header from './Header';
import HeaderContainer from './HeaderContainer';
import HeaderContent from './HeaderContent';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderMiddle from './HeaderMiddle';
import HomeButton from 'home-button/HomeButton';
import Search from 'search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from 'helpers/RwdHelper';
import Button from 'buttons/Button';
import Counter from 'counters/Counter';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import IconAsButton, {
  TYPE as ICON_TYPE,
  ICON_COLOR,
} from 'icon-as-button/IconAsButton';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'default',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return <Header {...args} />;
};

Default.args = {
  children: (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLeft>left</HeaderLeft>
        <HeaderMiddle>middle</HeaderMiddle>
        <HeaderRight>right</HeaderRight>
      </HeaderContent>
    </HeaderContainer>
  ),
};

export const WithComponents = () => (
  <div className="sg-story-variant-dark-box">
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
                <Button type="solid" size="small">
                  Register
                </Button>
                <IconAsButton
                  type={ICON_TYPE.MESSAGES}
                  transparent
                  color={ICON_COLOR['icon-black']}
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
                  color={ICON_COLOR['icon-black']}
                />
              </HeaderRight>
            </div>
          </RWDHelper>
        </HeaderContent>
      </HeaderContainer>
    </Header>
  </div>
);

export const WithBottomDivider = () => (
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
              <Button type="solid" size="small">
                Register
              </Button>
              <IconAsButton
                type={ICON_TYPE.MESSAGES}
                transparent
                color={ICON_COLOR['icon-black']}
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
                color={ICON_COLOR['icon-black']}
              />
            </HeaderRight>
          </div>
        </RWDHelper>
      </HeaderContent>
    </HeaderContainer>
  </Header>
);

export const AutoHeight = () => (
  <div className="sg-story-variant-dark-box">
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
                    <Button type="solid-inverted" size="small">
                      Log in
                    </Button>
                  </ActionListHole>
                  <ActionListHole>
                    <Button type="solid" size="small">
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
                  color={ICON_COLOR['icon-black']}
                />
              </HeaderRight>
            </div>
          </RWDHelper>
        </HeaderContent>
      </HeaderContainer>
    </Header>
  </div>
);

export const FixedHeader = () => (
  <div
    style={{
      height: '2000px',
      background:
        'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(121,95,9,1) 35%, rgba(0,212,255,1) 100%)',
    }}
  >
    <Header fixed>
      <HeaderContainer>
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
                    <Button type="solid-inverted" size="small">
                      Log in
                    </Button>
                  </ActionListHole>
                  <ActionListHole>
                    <Button type="solid" size="small">
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
                  color={ICON_COLOR['icon-black']}
                />
              </HeaderRight>
            </div>
          </RWDHelper>
        </HeaderContent>
      </HeaderContainer>
    </Header>
  </div>
);
