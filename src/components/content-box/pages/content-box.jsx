import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContentBox from '../ContentBox';
import ContentBoxActions, {SIZE, ALIGNMENT} from '../ContentBoxActions';
import ContentBoxTitle from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import ContentBoxHeader from '../ContentBoxHeader';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import Breadcrumbs from 'breadcrumbs/Breadcrumb';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';
import Sticker, {TYPE as STICKER_TYPE} from 'stickers/Sticker';
import Label, {ICON_COLOR, ICON_TYPE} from 'labels/Label';
import Rating from 'rating/Rating';
import Text from 'text/Text';
import Link, {COLOR as LINK_COLOR} from 'text/Link';
import HeaderPrimary, {SIZE as HEADER_SIZE, TYPE as HEADER_TYPE} from 'text/HeaderPrimary';
import HeaderSecondary from 'text/HeaderSecondary';
import SeparatorVertical from 'separators/SeparatorVertical';
import OverlayedBox from 'overlayed-box/OverlayedBox';

const link1 = <Link href="#" color={LINK_COLOR.GRAY} emphasised>Math</Link>;
const link2 = <Link href="#" color={LINK_COLOR.GRAY} emphasised>10 pts</Link>;
const link3 = <Link href="#" color={LINK_COLOR.GRAY}>2 min ago</Link>;
const breadcrumbs = [link1, link2, link3];
const breadcrumbsSpaced = [<Link key={1} color={LINK_COLOR.GRAY}>Katie</Link>,
  <Link key={2} href="#" color={LINK_COLOR.GRAY}>Answerer</Link>];
const breadcrumbsSpaced2 = [<Link key={1}>Comments (9)</Link>,
  <Link key={2} href="#">Report</Link>];

const spacedBottomOptions =
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
  </div>;

const spacedTopOptions =
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
  </div>;

const examplePart1 =
  <ContentBox>
    <ContentBoxTitle>
      <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
    </ContentBoxTitle>
    <ContentBoxActions>
      <ButtonSecondary>Search!</ButtonSecondary>
    </ContentBoxActions>
    <ContentBoxContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
        lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
        Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
        vel eros.
      </Text>
    </ContentBoxContent>
    <ContentBoxActions>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?dog" />
      </OverlayedBox>
      <SeparatorVertical />
      <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?dog" />
      <Avatar size={AVATAR_SIZE.SMALL} />
      <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
    </ContentBoxActions>
  </ContentBox>;

const examplePart2 =
  <ContentBox>
    <ContentBoxTitle>
      <HeaderPrimary type={HEADER_TYPE.H2}>This is a title for context box</HeaderPrimary>
    </ContentBoxTitle>
    <ContentBoxActions>
      <ButtonPrimary>Search!</ButtonPrimary>
    </ContentBoxActions>
    <ContentBoxContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
        lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
        Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
        vel eros.
      </Text>
    </ContentBoxContent>
    <ContentBoxActions>
      <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
        <Avatar imgSrc="https://source.unsplash.com/64x64/?bird" />
      </OverlayedBox>
      <SeparatorVertical />
      <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?bird" />
      <Avatar size={AVATAR_SIZE.SMALL} />
      <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
    </ContentBoxActions>
  </ContentBox>;

const ContentBoxes = () =>
  <div>
    <DocsBlock info="Simple with header">
      <ContentBox>
        <ContentBoxHeader>
          <Breadcrumbs elements={breadcrumbs} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
            <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
          </OverlayedBox>
          <SeparatorVertical />
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?cat" />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title">
      <ContentBox>
        <ContentBoxTitle>
          <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
        </ContentBoxTitle>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
            <Avatar imgSrc="https://source.unsplash.com/64x64/?dog" />
          </OverlayedBox>
          <SeparatorVertical />
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?bird" />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header">
      <ContentBox>
        <ContentBoxTitle>
          <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
        </ContentBoxTitle>
        <ContentBoxHeader>
          <Breadcrumbs elements={breadcrumbs} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
            <Avatar imgSrc="https://source.unsplash.com/64x64/?cat" />
          </OverlayedBox>
          <SeparatorVertical />
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?bird" />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header (spaced)">
      <ContentBox spaced>
        <ContentBoxTitle spaced>
          <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
        </ContentBoxTitle>
        <ContentBoxHeader spaced>
          <Breadcrumbs elements={breadcrumbs} />
        </ContentBoxHeader>
        <ContentBoxContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
          lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
          Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
          vel eros.
        </ContentBoxContent>
        <ContentBoxActions>
          <OverlayedBox overlay={<Sticker type={STICKER_TYPE.ANSWER} />}>
            <Avatar imgSrc="https://source.unsplash.com/64x64/?lion" />
          </OverlayedBox>
          <SeparatorVertical />
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?kitten" />
          <Avatar size={AVATAR_SIZE.SMALL} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with content (full)">
      <ContentBox>
        <ContentBoxContent full>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
          lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
          Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
          vel eros.
        </ContentBoxContent>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and actions" multiContent={[examplePart1, examplePart2]}>
    </DocsBlock>
    <DocsBlock info="Spaced">
      <ContentBox spaced>
        <ContentBoxHeader>
          <Avatar spaced imgSrc="https://source.unsplash.com/64x64/?woman" />
          <Breadcrumbs elements={breadcrumbsSpaced} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros. Maecenas posuere sit amet urna quis faucibus. Maecenas a lorem mi. Morbi interdum
            tincidunt neque, nec mollis nulla tincidunt ac. Suspendisse potenti.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions>
          <Breadcrumbs elements={breadcrumbsSpaced2} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE}>
            <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
              iconColor={ICON_COLOR.ADAPTIVE} secondary unstyled />
          </ButtonSecondary>
          <Rating rate={2} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced-bottom elements inside" additionalInfo={spacedBottomOptions}>
      <ContentBox>
        <ContentBoxTitle spacedBottom={SIZE.XLARGE}>
          <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
        </ContentBoxTitle>
        <ContentBoxContent spacedBottom={SIZE.XLARGE}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions spacedBottom={SIZE.XLARGE}>
          Action elements
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced-top elements inside" additionalInfo={spacedTopOptions}>
      <ContentBox>
        <ContentBoxTitle spacedTop={SIZE.XLARGE}>
          <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
        </ContentBoxTitle>
        <ContentBoxContent spacedTop={SIZE.XLARGE}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
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
          <HeaderSecondary type={HEADER_TYPE.H2}>This is a title for context box</HeaderSecondary>
        </ContentBoxTitle>
        <ContentBoxContent align={ALIGNMENT.CENTER}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </Text>
        </ContentBoxContent>
        <ContentBoxActions align={ALIGNMENT.CENTER}>
          <Breadcrumbs elements={[
            <Link key={1} href="#">Comments (9)</Link>,
            <Link key={2} href="#">Report</Link>
          ]} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE}>
            <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
              iconColor={ICON_COLOR.ADAPTIVE} secondary unstyled />
          </ButtonSecondary>
          <Rating rate={3} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Actions with elements moved to right">
      <ContentBox>
        <ContentBoxActions align={ALIGNMENT.RIGHT}>
          <Breadcrumbs elements={breadcrumbsSpaced2} />
          <ButtonSecondary small buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE}>
            <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
              iconColor={ICON_COLOR.ADAPTIVE} secondary unstyled />
          </ButtonSecondary>
          <Rating rate={3} counter={34} active />
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <ContentBox spaced>
        <ContentBoxHeader>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man" />
          <Breadcrumbs elements={['The Brain', 'Answerer']} />
        </ContentBoxHeader>
        <ContentBoxContent>
          <HeaderPrimary size={HEADER_SIZE.SMALL}>Hey! Still not sure about the answer?</HeaderPrimary>
          <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>Check similar answers</ButtonPrimary>
        </ContentBoxContent>
      </ContentBox>
    </DocsBlock>
  </div>;

export default ContentBoxes;
