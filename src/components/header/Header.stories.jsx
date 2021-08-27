import * as React from 'react';
import Header from './Header';
import HeaderContainer from './HeaderContainer';
import HeaderContent from './HeaderContent';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderMiddle from './HeaderMiddle';

export default {
  title: 'Components/Header',
  parameters: {
    component: Header,
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
