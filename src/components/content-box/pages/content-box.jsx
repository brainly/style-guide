import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContentBox from '../ContentBox';
import ContentBoxActions, {SIZE, ALIGNMENT} from '../ContentBoxActions';
import ContentBoxTitle from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import ContentBoxHeader from '../ContentBoxHeader';
import ButtonSecondary, {TYPE as BUTTON_TYPE} from '../../buttons/ButtonSecondary';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import Breadcrumbs from '../../breadcrumbs/Breadcrumb';
import Avatar, {SIZE as AVATAR_SIZE} from '../../avatar/Avatar';
import Sticker, {TYPE as STICKER_TYPE} from '../../stickers/Sticker';
import Icon, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../../icons/Icon';
import Rating from '../../rating/Rating';

const link1 = <a className="sg-link sg-link--gray sg-link--emphasised" href="#">Math</a>;
const link2 = <a className="sg-link sg-link--gray sg-link--emphasised" href="#">10 pts</a>;
const link3 = <a className="sg-link sg-link--gray" href="#">2 min ago</a>;
const breadcrumbs = [link1, link2, link3];
const breadcrumbsSpaced = [<a className="sg-link sg-link--gray" href="#">Katie</a>,
  <a className="sg-link sg-link--gray" href="#">Answerer</a>];
const breadcrumbsSpaced2 = [<a className="sg-link" href="#">Comments (9)</a>,
  <a className="sg-link" href="#">Report</a>];

const spacedBottomOptions = <div>
  <div className="sg-text">Options:</div>
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

const spacedTopOptions = <div>
  <div className="sg-text">Options:</div>
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

const examplePart1 = <ContentBox>
  <ContentBoxTitle>
    <h2 className="sg-header-secondary">This is a title for context box</h2>
  </ContentBoxTitle>
  <ContentBoxActions>
    <ButtonSecondary>Search!</ButtonSecondary>
  </ContentBoxActions>
  <ContentBoxContent>
    <div className="sg-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
      lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
      Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
      vel eros.
    </div>
  </ContentBoxContent>
  <ContentBoxActions>
    <div className="sg-overlayed-box">
      <Avatar imgSrc="https://source.unsplash.com/64x64/?dog"/>
      <div className="sg-overlayed-box__overlay">
        <Sticker type={STICKER_TYPE.ANSWER}/>
      </div>
    </div>
    <div className="sg-separator"></div>
    <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?dog"/>
    <Avatar size={AVATAR_SIZE.SMALL} iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
    <ButtonSecondary small={true} type={BUTTON_TYPE.INVERSE}>Answer</ButtonSecondary>
  </ContentBoxActions>
</ContentBox>;

const examplePart2 = <ContentBox>
  <ContentBoxTitle>
    <h2 className="sg-header-primary">This is a title for context box</h2>
  </ContentBoxTitle>
  <ContentBoxActions>
    <ButtonPrimary>Search!</ButtonPrimary>
  </ContentBoxActions>
  <ContentBoxContent>
    <div className="sg-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
      lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
      Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
      vel eros.
    </div>
  </ContentBoxContent>
  <ContentBoxActions>
    <div className="sg-overlayed-box">
      <Avatar imgSrc="https://source.unsplash.com/64x64/?bird"/>
      <div className="sg-overlayed-box__overlay">
        <Sticker type={STICKER_TYPE.ANSWER}/>
      </div>
    </div>
    <div className="sg-separator"></div>
    <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?bird"/>
    <Avatar size={AVATAR_SIZE.SMALL} iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
    <ButtonSecondary small={true} type={BUTTON_TYPE.INVERSE}>Answer</ButtonSecondary>
  </ContentBoxActions>
</ContentBox>;

const ContentBoxes = () =>
  <div>
    <DocsBlock info="Simple with header">
      <ContentBox>
        <ContentBoxHeader>
          <Breadcrumbs elements={breadcrumbs}/>
        </ContentBoxHeader>
        <ContentBoxContent>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros.
          </div>
        </ContentBoxContent>
        <ContentBoxActions>
          <div className="sg-overlayed-box">
            <Avatar imgSrc="https://source.unsplash.com/64x64/?man"/>
            <div className="sg-overlayed-box__overlay">
              <Sticker type={STICKER_TYPE.ANSWER}/>
            </div>
          </div>
          <div className="sg-separator"></div>
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?cat"/>
          <Avatar size={AVATAR_SIZE.SMALL} iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
          <ButtonSecondary small={true} type={BUTTON_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title">
      <ContentBox>
        <ContentBoxTitle>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxContent>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros.
          </div>
        </ContentBoxContent>
        <ContentBoxActions>
          <div className="sg-overlayed-box">
            <Avatar imgSrc="https://source.unsplash.com/64x64/?dog"/>
            <div className="sg-overlayed-box__overlay">
              <Sticker type={STICKER_TYPE.ANSWER}/>
            </div>
          </div>
          <div className="sg-separator"></div>
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?bird"/>
          <Avatar size={AVATAR_SIZE.SMALL} iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
          <ButtonSecondary small={true} type={BUTTON_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header">
      <ContentBox>
        <ContentBoxTitle>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxHeader>
          <Breadcrumbs elements={breadcrumbs}/>
        </ContentBoxHeader>
        <ContentBoxContent>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros.
          </div>
        </ContentBoxContent>
        <ContentBoxActions>
          <div className="sg-overlayed-box">
            <Avatar imgSrc="https://source.unsplash.com/64x64/?dog"/>
            <div className="sg-overlayed-box__overlay">
              <Sticker type={STICKER_TYPE.ANSWER}/>
            </div>
          </div>
          <div className="sg-separator"></div>
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?bird"/>
          <Avatar size={AVATAR_SIZE.SMALL} iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
          <ButtonSecondary small={true} type={BUTTON_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header (spaced)">
      <ContentBox spaced={true}>
        <ContentBoxTitle spaced={true}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxHeader spaced={true}>
          <Breadcrumbs elements={breadcrumbs}/>
        </ContentBoxHeader>
        <ContentBoxContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
          lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
          Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
          vel eros.
        </ContentBoxContent>
        <ContentBoxActions>
          <div className="sg-overlayed-box">
            <Avatar imgSrc="https://source.unsplash.com/64x64/?kitten"/>
            <div className="sg-overlayed-box__overlay">
              <Sticker type={STICKER_TYPE.ANSWER}/>
            </div>
          </div>
          <div className="sg-separator"></div>
          <Avatar size={AVATAR_SIZE.SMALL} imgSrc="https://source.unsplash.com/64x64/?kitten"/>
          <Avatar size={AVATAR_SIZE.SMALL} iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
          <ButtonSecondary small={true} type={BUTTON_TYPE.INVERSE}>Answer</ButtonSecondary>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with content (full)">
      <ContentBox>
        <ContentBoxContent full={true}>
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
      <ContentBox spaced={true}>
        <ContentBoxHeader>
          <Avatar spaced={true} imgSrc="https://source.unsplash.com/64x64/?woman"/>
          <Breadcrumbs elements={breadcrumbsSpaced}/>
        </ContentBoxHeader>
        <ContentBoxContent>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
            Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
            vel eros. Maecenas posuere sit amet urna quis faucibus. Maecenas a lorem mi. Morbi interdum
            tincidunt neque, nec mollis nulla tincidunt ac. Suspendisse potenti.
          </div>
        </ContentBoxContent>
        <ContentBoxActions>
          <Breadcrumbs elements={breadcrumbsSpaced2}/>
          <ButtonSecondary small={true} type={BUTTON_TYPE.ACTIVE_INVERSE}>
            <div className="sg-label sg-label--secondary sg-label--unstyled">
              <div className="sg-label__icon">
                <Icon type={ICON_TYPE.HEART} color={ICON_COLOR.ADAPTIVE} size={16}/>
              </div>
              <div className="sg-label__text">Thank you</div>
              <div className="sg-label__number">21</div>
            </div>
          </ButtonSecondary>
          <Rating rate={2} counter={34} active={true}/>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced-bottom elements inside" additionalInfo={spacedBottomOptions}>
      <ContentBox>
        <ContentBoxTitle spacedBottom={SIZE.XLARGE}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxContent spacedBottom={SIZE.XLARGE}>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </div>
        </ContentBoxContent>
        <ContentBoxActions spacedBottom={SIZE.XLARGE}>
          Action elements
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced-top elements inside" additionalInfo={spacedTopOptions}>
      <ContentBox>
        <ContentBoxTitle spacedTop={SIZE.XLARGE}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxContent spacedTop={SIZE.XLARGE}>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </div>
        </ContentBoxContent>
        <ContentBoxActions spacedTop={SIZE.XLARGE}>
          Action elements
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Centered elements inside">
      <ContentBox>
        <ContentBoxTitle align={ALIGNMENT.CENTER}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxContent align={ALIGNMENT.CENTER}>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </div>
        </ContentBoxContent>
        <ContentBoxActions align={ALIGNMENT.CENTER}>
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link" href="#">Comments (9)</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link" href="#">Report</a>
            </li>
          </ul>
          <ButtonSecondary small={true} type={BUTTON_TYPE.ACTIVE_INVERSE}>
            <div className="sg-label sg-label--secondary sg-label--unstyled">
              <div className="sg-label__icon">
                <Icon type={ICON_TYPE.HEART} color={ICON_COLOR.ADAPTIVE} size={16}/>
              </div>
              <div className="sg-label__text">Thank you</div>
              <div className="sg-label__number">21</div>
            </div>
          </ButtonSecondary>
          <Rating rate={3} counter={34} active={true}/>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Actions with elements moved to right">
      <ContentBox>
        <ContentBoxActions align={ALIGNMENT.RIGHT}>
          <Breadcrumbs elements={breadcrumbsSpaced2}/>
          <ButtonSecondary small={true} type={BUTTON_TYPE.ACTIVE_INVERSE}>
            <div className="sg-label sg-label--secondary sg-label--unstyled">
              <div className="sg-label__icon">
                <Icon type={ICON_TYPE.HEART} color={ICON_COLOR.ADAPTIVE} size={16}/>
              </div>
              <div className="sg-label__text">Thank you</div>
              <div className="sg-label__number">21</div>
            </div>
          </ButtonSecondary>
          <Rating rate={3} counter={34} active={true}/>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <ContentBox spaced={true}>
        <ContentBoxHeader>
          <Avatar imgSrc="https://source.unsplash.com/64x64/?man"/>
          <Breadcrumbs elements={['The Brain', 'Answerer']}/>
        </ContentBoxHeader>
        <ContentBoxContent>
          <div className="sg-header-primary sg-header-primary--small">Hey! Still not sure about the answer?</div>
          <ButtonPrimary type={BUTTON_TYPE.ALT}>Check similar answers</ButtonPrimary>
        </ContentBoxContent>
      </ContentBox>
    </DocsBlock>
  </div>;

export default ContentBoxes;
