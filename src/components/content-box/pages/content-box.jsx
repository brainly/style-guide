import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContentBox from '../ContentBox';
import ContentBoxActions, {SIZE, ALIGNMENT} from '../ContentBoxActions';
import ContentBoxTitle from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import ContentBoxHeader from '../ContentBoxHeader';
import Button from 'buttons/Button';
import Breadcrumb from 'breadcrumb/Breadcrumb';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import Rating from 'rating/Rating';
import Text from 'text/Text';
import Icon, {ICON_COLOR} from 'icons/Icon';
import Link from 'text/Link';
import Headline, {HEADLINE_TYPE, HEADLINE_SIZE} from 'text/Headline';
import SeparatorVertical from 'separators/SeparatorVertical';
import Flex from 'flex/Flex';

const link1 = (
  <Link href="#" color="text-gray-70">
    Math
  </Link>
);
const link2 = (
  <Link href="#" color="text-gray-70">
    10 pts
  </Link>
);
const link3 = (
  <Link href="#" color="text-gray-70">
    2 min ago
  </Link>
);
const breadcrumb = [link1, link2, link3];
const breadcrumbSpaced = [
  <Link key={1} href="#" color="text-gray-70">
    Katie
  </Link>,
  <Link key={2} href="#" color="text-gray-70">
    Answerer
  </Link>,
];
const breadcrumbSpaced2 = [
  <Link key={1} as="button">
    Comments (9)
  </Link>,
  <Link key={2} href="#">
    Report
  </Link>,
];

const spacedBottomOptions = (
  <div>
    <Text>Options:</Text>
    <ul>
      <li>spaced-top</li>
      <li>spaced-top-small</li>
      <li>spaced-top-xsmall</li>
      <li>spaced-top-xxsmall</li>
      <li>spaced-top-large</li>
      <li>spaced-top-xlarge</li>
      <li>spaced-top-xxlarge</li>
    </ul>
  </div>
);

const spacedTopOptions = (
  <div>
    <Text>Options:</Text>
    <ul>
      <li>spaced-top</li>
      <li>spaced-top-small</li>
      <li>spaced-top-xsmall</li>
      <li>spaced-top-xxsmall</li>
      <li>spaced-top-large</li>
      <li>spaced-top-xlarge</li>
      <li>spaced-top-xxlarge</li>
    </ul>
  </div>
);

const examplePart1 = (
  <ContentBox>
    <ContentBoxTitle>
      <Headline type={HEADLINE_TYPE.H2}>
        This is a title for context box
      </Headline>
    </ContentBoxTitle>
    <ContentBoxActions>
      <Button>Search!</Button>
    </ContentBoxActions>
    <ContentBoxContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui
        porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci
        nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac
        aliquet porta, velit libero euismod purus, quis dignissim ante sem vel
        eros.
      </Text>
    </ContentBoxContent>
    <ContentBoxActions>
      <Avatar imgSrc="https://source.unsplash.com/64x64/?dog" />
      <SeparatorVertical />
      <Avatar
        size={AVATAR_SIZE.SMALL}
        imgSrc="https://source.unsplash.com/64x64/?dog"
      />
      <Avatar size={AVATAR_SIZE.SMALL} />
      <Button type="solid-inverted">Answer</Button>
    </ContentBoxActions>
  </ContentBox>
);

const examplePart2 = (
  <ContentBox>
    <ContentBoxTitle>
      <Headline type={HEADLINE_TYPE.H2}>
        This is a title for context box
      </Headline>
    </ContentBoxTitle>
    <ContentBoxActions>
      <Button>Search!</Button>
    </ContentBoxActions>
    <ContentBoxContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui
        porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci
        nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac
        aliquet porta, velit libero euismod purus, quis dignissim ante sem vel
        eros.
      </Text>
    </ContentBoxContent>
    <ContentBoxActions>
      <Avatar imgSrc="https://source.unsplash.com/64x64/?bird" />
      <SeparatorVertical />
      <Avatar
        size={AVATAR_SIZE.SMALL}
        imgSrc="https://source.unsplash.com/64x64/?bird"
      />
      <Avatar size={AVATAR_SIZE.SMALL} />
      <Button type="solid-inverted">Answer</Button>
    </ContentBoxActions>
  </ContentBox>
);

const ContentBoxes = () => (
  <div>
    <Flex marginBottom="m">
      <Text color="text-red-60">
        This component is deprecated, please use{' '}
        <Link href="./containers.html#flexbox">Flex</Link> instead
      </Text>
    </Flex>
    <DocsBlock info="Simple with header">
      <ContentBox>
        <ContentBoxHeader>
          <Breadcrumb elements={breadcrumb} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper
            orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet,
            dolor ac aliquet porta, velit libero euismod purus, quis dignissim
            ante sem vel eros.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
          <SeparatorVertical />
          <Avatar
            size={AVATAR_SIZE.SMALL}
            imgSrc="https://source.unsplash.com/64x64/?cat"
          />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <Button type="solid-inverted">Answer</Button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title">
      <ContentBox>
        <ContentBoxTitle>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper
            orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet,
            dolor ac aliquet porta, velit libero euismod purus, quis dignissim
            ante sem vel eros.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?dog" />
          <SeparatorVertical />
          <Avatar
            size={AVATAR_SIZE.SMALL}
            imgSrc="https://source.unsplash.com/64x64/?bird"
          />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <Button type="solid-inverted">Answer</Button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header">
      <ContentBox>
        <ContentBoxTitle>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxHeader>
          <Breadcrumb elements={breadcrumb} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper
            orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet,
            dolor ac aliquet porta, velit libero euismod purus, quis dignissim
            ante sem vel eros.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
          <SeparatorVertical />
          <Avatar
            size={AVATAR_SIZE.SMALL}
            imgSrc="https://source.unsplash.com/64x64/?bird"
          />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <Button type="solid-inverted">Answer</Button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header (spaced)">
      <ContentBox spaced>
        <ContentBoxTitle spaced>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxHeader spaced>
          <Breadcrumb elements={breadcrumb} />
        </ContentBoxHeader>
        <ContentBoxContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui
          porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci
          nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac
          aliquet porta, velit libero euismod purus, quis dignissim ante sem vel
          eros.
        </ContentBoxContent>
        <ContentBoxActions>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?lion" />
          <SeparatorVertical />
          <Avatar
            size={AVATAR_SIZE.SMALL}
            imgSrc="https://source.unsplash.com/64x64/?kitten"
          />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <Button type="solid-inverted">Answer</Button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header (spaced small)">
      <ContentBox spaced>
        <ContentBoxTitle spacedSmall>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxHeader spacedSmall>
          <Breadcrumb elements={breadcrumb} />
        </ContentBoxHeader>
        <ContentBoxContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui
          porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci
          nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac
          aliquet porta, velit libero euismod purus, quis dignissim ante sem vel
          eros.
        </ContentBoxContent>
        <ContentBoxActions>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?lion" />
          <SeparatorVertical />
          <Avatar
            size={AVATAR_SIZE.SMALL}
            imgSrc="https://source.unsplash.com/64x64/?kitten"
          />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <Button type="solid-inverted">Answer</Button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with content (full)">
      <ContentBox>
        <ContentBoxContent full>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui
          porttitor, tincidunt lorem quis, gravida ex. Phasellus semper orci
          nulla, sit amet egestas orci mattis sit amet. Aenean laoreet, dolor ac
          aliquet porta, velit libero euismod purus, quis dignissim ante sem vel
          eros.
        </ContentBoxContent>
      </ContentBox>
    </DocsBlock>
    <DocsBlock
      info="Simple with title and actions"
      multiContent={[examplePart1, examplePart2]}
    />
    <DocsBlock info="Spaced">
      <ContentBox spaced>
        <ContentBoxHeader>
          <Avatar spaced imgSrc="https://source.unsplash.com/64x64/?woman" />
          <Breadcrumb elements={breadcrumbSpaced} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper
            orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet,
            dolor ac aliquet porta, velit libero euismod purus, quis dignissim
            ante sem vel eros. Maecenas posuere sit amet urna quis faucibus.
            Maecenas a lorem mi. Morbi interdum tincidunt neque, nec mollis
            nulla tincidunt ac. Suspendisse potenti.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <Breadcrumb elements={breadcrumbSpaced2} />
          <Button
            type="transparent-red"
            icon={<Icon type="heart" color={ICON_COLOR['icon-red-50']} />}
          >
            Thank you
          </Button>
          <Rating rate={2} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced small">
      <ContentBox spacedSmall>
        <ContentBoxHeader>
          <Avatar spaced imgSrc="https://source.unsplash.com/64x64/?woman" />
          <Breadcrumb elements={breadcrumbSpaced} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex. Phasellus semper
            orci nulla, sit amet egestas orci mattis sit amet. Aenean laoreet,
            dolor ac aliquet porta, velit libero euismod purus, quis dignissim
            ante sem vel eros. Maecenas posuere sit amet urna quis faucibus.
            Maecenas a lorem mi. Morbi interdum tincidunt neque, nec mollis
            nulla tincidunt ac. Suspendisse potenti.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <Breadcrumb elements={breadcrumbSpaced2} />
          <Button
            type="transparent-red"
            icon={<Icon type="heart" color={ICON_COLOR['icon-red-50']} />}
          >
            Thank you
          </Button>
          <Rating rate={2} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock
      info="Spaced-bottom elements inside"
      additionalInfo={spacedBottomOptions}
    >
      <ContentBox>
        <ContentBoxTitle spacedBottom={SIZE.XLARGE}>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxContent spacedBottom={SIZE.XLARGE}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions spacedBottom={SIZE.XLARGE}>
          Action elements
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock
      info="Spaced-top elements inside"
      additionalInfo={spacedTopOptions}
    >
      <ContentBox>
        <ContentBoxTitle spacedTop={SIZE.XLARGE}>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxContent spacedTop={SIZE.XLARGE}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions spacedTop={SIZE.XLARGE}>
          Action elements
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Centered elements inside">
      <ContentBox>
        <ContentBoxTitle align={ALIGNMENT.CENTER}>
          <Headline type={HEADLINE_TYPE.H2}>
            This is a title for context box
          </Headline>
        </ContentBoxTitle>
        <ContentBoxContent align={ALIGNMENT.CENTER}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dui porttitor, tincidunt lorem quis, gravida ex.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions align={ALIGNMENT.CENTER}>
          <Breadcrumb
            elements={[
              <Link key={1} href="#">
                Comments (9)
              </Link>,
              <Link key={2} href="#">
                Report
              </Link>,
            ]}
          />
          <Button
            type="transparent-red"
            icon={<Icon type="heart" color={ICON_COLOR['icon-red-50']} />}
          >
            Thank you
          </Button>
          <Rating rate={3} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Actions with elements moved to right">
      <ContentBox>
        <ContentBoxActions align={ALIGNMENT.RIGHT}>
          <Breadcrumb elements={breadcrumbSpaced2} />
          <Button
            type="transparent-red"
            icon={<Icon type="heart" color={ICON_COLOR['icon-red-50']} />}
          >
            Thank you
          </Button>
          <Rating rate={3} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <ContentBox spaced>
        <ContentBoxHeader>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
          <Breadcrumb elements={['The Brain', 'Answerer']} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Headline size={HEADLINE_SIZE.SMALL}>
            Hey! Still not sure about the answer?
          </Headline>
          <Button type="solid-indigo">Check similar answers</Button>
        </ContentBoxContent>
      </ContentBox>
    </DocsBlock>
  </div>
);

export default ContentBoxes;
