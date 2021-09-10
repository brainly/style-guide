import * as React from 'react';
import {StoryVariant} from '../../../.storybook/utils';
import TopLayer, {SIZE} from './TopLayer';
import hex from '../colors/hex';
import ContentBox, {CONTENT_BOX_SPACING_SIZE} from '../content-box/ContentBox';
import ContentBoxContent from '../content-box/ContentBoxContent';
import ContentBoxActions from '../content-box/ContentBoxActions';

const Container = Story => (
  <div
    style={{
      minHeight: '300px',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      background: hex.graySecondary,
      padding: 15,
      display: 'flex',
    }}
  >
    <Story />
  </div>
);

export default {
  title: 'Components/TopLayer',
  parameters: {
    component: TopLayer,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Mollit in eu excepteur occaecat nisi incididunt culpa officia.',
  },
  decorators: [Container],
};

export const Default = args => <TopLayer {...args} />;

export const Lead = args => <TopLayer {...args} lead />;

export const Fill = args => <TopLayer {...args} fill />;

export const Modal = args => <TopLayer {...args} modal />;

export const WithBugbox = args => <TopLayer {...args} withBugbox />;

export const SmallSpaced = args => <TopLayer {...args} smallSpaced />;

export const SplashScreen = args => (
  <TopLayer {...args} splashScreen>
    <ContentBox>
      <ContentBoxContent spacedBottom={CONTENT_BOX_SPACING_SIZE.LARGE}>
        heading
      </ContentBoxContent>

      <ContentBoxContent spacedBottom={CONTENT_BOX_SPACING_SIZE.LARGE}>
        content
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        enim diam, dictum et maximus sit amet, pulvinar vel ante. Maecenas id
        tempus lacus. Cras vitae lectus vehicula, pretium odio sed, pretium
        nulla. Nunc ultrices nibhorci, sit amet gravida metus dapibus nec. Sed
        orci nisi, volutpat varius auctor sit amet, eleifend eu elit. Fusceeget
        nunc tristique nibh viverra lobortis. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </ContentBoxContent>

      <ContentBoxActions>actions</ContentBoxActions>
    </ContentBox>
  </TopLayer>
);

export const LimitedWidth = args => <TopLayer {...args} limitedWidth />;

export const Row = args => <TopLayer {...args} row />;

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <TopLayer {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);
export const Transparent = args => <TopLayer {...args} transparent />;

export const NoPadding = args => <TopLayer {...args} noPadding />;
