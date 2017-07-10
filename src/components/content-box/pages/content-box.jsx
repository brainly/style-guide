import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContentBox from '../ContentBox';
import ContentBoxActions from '../ContentBoxActions';
import ContentBoxTitle, {ALIGNMENT, SPACE_SIZE, SPACE} from '../ContentBoxTitle';
import ContentBoxContent from '../ContentBoxContent';
import ContentBoxHeader from '../ContentBoxHeader';
import ButtonSecondary from '../../buttons/ButtonSecondary';
import ButtonPrimary from '../../buttons/ButtonPrimary';

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

const ContentBoxes = () =>
  <div>
    <DocsBlock info="Simple with header">
      <ContentBox>
        <ContentBoxHeader>
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray sg-link--emphasised" href="#">Math</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray sg-link--emphasised" href="#">10 pts</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray" href="#">2 min ago</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <div className="sg-badge sg-badge--mustard">
                <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">HOT</div>
              </div>
            </li>
          </ul>
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
            <div className="sg-avatar">
              <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
            </div>
            <div className="sg-overlayed-box__overlay">
              <svg className="sg-sticker">
                <use className="sg-sticker__back" xlinkHref="#icon-answering"></use>
                <use className="sg-sticker__front" xlinkHref="#icon-answering"></use>
              </svg>
            </div>
          </div>
          <div className="sg-separator"></div>
          <div className="sg-avatar sg-avatar--small">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?cat"/>
          </div>
          <div className="sg-avatar sg-avatar--small">
            <div className="sg-avatar__image sg-avatar__image--icon">
              <svg className="sg-icon sg-icon--x24 sg-icon--gray">
                <use xlinkHref="#icon-profile"></use>
              </svg>
            </div>
          </div>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--inverse">
            Answer
          </button>
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
            <div className="sg-avatar">
              <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?dog"/>
            </div>
            <div className="sg-overlayed-box__overlay">
              <svg className="sg-sticker">
                <use className="sg-sticker__back" xlinkHref="#icon-answering"></use>
                <use className="sg-sticker__front" xlinkHref="#icon-answering"></use>
              </svg>
            </div>
          </div>
          <div className="sg-separator"></div>
          <div className="sg-avatar sg-avatar--small">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?car"/>
          </div>
          <div className="sg-avatar sg-avatar--small">
            <div className="sg-avatar__image sg-avatar__image--icon">
              <svg className="sg-icon sg-icon--x24 sg-icon--gray">
                <use xlinkHref="#icon-profile"></use>
              </svg>
            </div>
          </div>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--inverse">
            Answer
          </button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header">
      <ContentBox>
        <ContentBoxTitle>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxHeader>
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray sg-link--emphasised" href="#">Math</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray sg-link--emphasised" href="#">10 pts</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray" href="#">2 min ago</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <div className="sg-badge sg-badge--mustard">
                <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">HOT</div>
              </div>
            </li>
          </ul>
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
            <div className="sg-avatar">
              <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
            </div>
            <div className="sg-overlayed-box__overlay">
              <svg className="sg-sticker">
                <use className="sg-sticker__back" xlinkHref="#icon-answering"></use>
                <use className="sg-sticker__front" xlinkHref="#icon-answering"></use>
              </svg>
            </div>
          </div>
          <div className="sg-separator"></div>
          <div className="sg-avatar sg-avatar--small">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?cat"/>
          </div>
          <div className="sg-avatar sg-avatar--small">
            <div className="sg-avatar__image sg-avatar__image--icon">
              <svg className="sg-icon sg-icon--x24 sg-icon--gray">
                <use xlinkHref="#icon-profile"></use>
              </svg>
            </div>
          </div>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--inverse">
            Answer
          </button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and header (spaced)">
      <ContentBox isSpaced={true}>
        <ContentBoxTitle isSpaced={true}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxHeader isSpaced={true}>
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray sg-link--emphasised" href="#">Math</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray sg-link--emphasised" href="#">10 pts</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray" href="#">2 min ago</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <div className="sg-badge sg-badge--mustard">
                <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">HOT</div>
              </div>
            </li>
          </ul>
        </ContentBoxHeader>
        <ContentBoxContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
          lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
          Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
          vel eros.
        </ContentBoxContent>
        <ContentBoxActions>
          <div className="sg-overlayed-box">
            <div className="sg-avatar">
              <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?dog"/>
            </div>
            <div className="sg-overlayed-box__overlay">
              <svg className="sg-sticker">
                <use className="sg-sticker__back" xlinkHref="#icon-answering"></use>
                <use className="sg-sticker__front" xlinkHref="#icon-answering"></use>
              </svg>
            </div>
          </div>
          <div className="sg-separator"></div>
          <div className="sg-avatar sg-avatar--small">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?car"/>
          </div>
          <div className="sg-avatar sg-avatar--small">
            <div className="sg-avatar__image sg-avatar__image--icon">
              <svg className="sg-icon sg-icon--x24 sg-icon--gray">
                <use xlinkHref="#icon-profile"></use>
              </svg>
            </div>
          </div>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--inverse">
            Answer
          </button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with content (full)">
      <ContentBox>
        <ContentBoxContent full={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
          lorem quis, gravida ex. Phasellus semper orci nulla, sit amet egestas orci mattis sit amet.
          Aenean laoreet, dolor ac aliquet porta, velit libero euismod purus, quis dignissim ante sem
          vel eros.</ContentBoxContent>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Simple with title and actions">
      <ContentBox>
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
            <div className="sg-avatar">
              <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
            </div>
            <div className="sg-overlayed-box__overlay">
              <svg className="sg-sticker">
                <use className="sg-sticker__back" xlinkHref="#icon-answering"></use>
                <use className="sg-sticker__front" xlinkHref="#icon-answering"></use>
              </svg>
            </div>
          </div>
          <div className="sg-separator"></div>
          <div className="sg-avatar sg-avatar--small">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?cat"/>
          </div>
          <div className="sg-avatar sg-avatar--small">
            <div className="sg-avatar__image sg-avatar__image--icon">
              <svg className="sg-icon sg-icon--x24 sg-icon--gray">
                <use xlinkHref="#icon-profile"></use>
              </svg>
            </div>
          </div>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--inverse">
            Answer
          </button>
        </ContentBoxActions>
      </ContentBox>
      <ContentBox>
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
            <div className="sg-avatar">
              <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?dog"/>
            </div>
            <div className="sg-overlayed-box__overlay">
              <svg className="sg-sticker">
                <use className="sg-sticker__back" xlinkHref="#icon-answering"></use>
                <use className="sg-sticker__front" xlinkHref="#icon-answering"></use>
              </svg>
            </div>
          </div>
          <div className="sg-separator"></div>
          <div className="sg-avatar sg-avatar--small">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?car"/>
          </div>
          <div className="sg-avatar sg-avatar--small">
            <div className="sg-avatar__image sg-avatar__image--icon">
              <svg className="sg-icon sg-icon--x24 sg-icon--gray">
                <use xlinkHref="#icon-profile"></use>
              </svg>
            </div>
          </div>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--inverse">
            Answer
          </button>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced">
      <ContentBox isSpaced={true}>
        <ContentBoxHeader>
          <div className="sg-avatar sg-avatar--spaced">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
          </div>
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray" href="#">Katie</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link sg-link--gray" href="#">Answerer</a>
            </li>
          </ul>
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
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link" href="#">Comments (9)</a>
            </li>
            <li className="sg-breadcrumb-list__element">
              <a className="sg-link" href="#">Report</a>
            </li>
          </ul>
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--active-inverse">
            <div className="sg-label sg-label--secondary sg-label--unstyled">
              <div className="sg-label__icon">
                <svg className="sg-icon sg-icon--x16 sg-icon--adaptive">
                  <use xlinkHref="#icon-heart"></use>
                </svg>
              </div>
              <div className="sg-label__text">Thank you</div>
              <div className="sg-label__number">21</div>
            </div>
          </button>

          <div className="sg-rate-box sg-rate-box--active sg-rate-box--small">
            <span className="sg-rate-box__star sg-rate-box__star--checked">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star sg-rate-box__star--checked">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__counter">34</span>
          </div>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced-bottom elements inside" additionalInfo={spacedBottomOptions}>
      <ContentBox>
        <ContentBoxTitle space={SPACE.BOTTOM} spaceSize={SPACE_SIZE.XLARGE}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxContent space={SPACE.BOTTOM} spaceSize={SPACE_SIZE.XLARGE}>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </div>
        </ContentBoxContent>
        <ContentBoxActions space={SPACE.BOTTOM} spaceSize={SPACE_SIZE.XLARGE}>Action elements</ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Spaced-top elements inside" additionalInfo={spacedTopOptions}>
      <ContentBox>
        <ContentBoxTitle space={SPACE.TOP} spaceSize={SPACE_SIZE.XLARGE}>
          <h2 className="sg-header-secondary">This is a title for context box</h2>
        </ContentBoxTitle>
        <ContentBoxContent space={SPACE.TOP} spaceSize={SPACE_SIZE.XLARGE}>
          <div className="sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui porttitor, tincidunt
            lorem quis, gravida ex.
          </div>
        </ContentBoxContent>
        <ContentBoxActions space={SPACE.TOP} SPACESIZE={SPACE_SIZE.XLARGE}>
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
          <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--active-inverse">
            <div className="sg-label sg-label--secondary sg-label--unstyled">
              <div className="sg-label__icon">
                <svg className="sg-icon sg-icon--x16 sg-icon--adaptive">
                  <use xlinkHref="#icon-heart"></use>
                </svg>
              </div>
              <div className="sg-label__text">Thank you</div>
              <div className="sg-label__number">21</div>
            </div>
          </button>
          <div className="sg-rate-box sg-rate-box--active sg-rate-box--small">
            <span className="sg-rate-box__star sg-rate-box__star--checked">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star sg-rate-box__star--checked">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__star">
              <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </span>
            <span className="sg-rate-box__counter">34</span>
          </div>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Actions with elements moved to right">
      <ContentBox>
        <ContentBoxActions align={ALIGNMENT.RIGHT}>
          <div className="sg-content-box__actions sg-content-box__actions--with-elements-to-right">
            <ul className="sg-breadcrumb-list">
              <li className="sg-breadcrumb-list__element">
                <a className="sg-link" href="#">Comments (9)</a>
              </li>
              <li className="sg-breadcrumb-list__element">
                <a className="sg-link" href="#">Report</a>
              </li>
            </ul>
            <button className="sg-button-secondary sg-button-secondary--small sg-button-secondary--active-inverse">
              <div className="sg-label sg-label--secondary sg-label--unstyled">
                <div className="sg-label__icon">
                  <svg className="sg-icon sg-icon--x16 sg-icon--adaptive">
                    <use xlinkHref="#icon-heart"></use>
                  </svg>
                </div>
                <div className="sg-label__text">Thank you</div>
                <div className="sg-label__number">21</div>
              </div>
            </button>
            <div className="sg-rate-box sg-rate-box--active sg-rate-box--small">
              <span className="sg-rate-box__star sg-rate-box__star--checked">
                <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </span>
              <span className="sg-rate-box__star sg-rate-box__star--checked">
                <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </span>
              <span className="sg-rate-box__star">
                <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </span>
              <span className="sg-rate-box__star">
                <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </span>
              <span className="sg-rate-box__star">
                <svg className="sg-icon sg-icon--x14 sg-icon--adaptive">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </span>
              <span className="sg-rate-box__counter">34</span>
            </div>
          </div>
        </ContentBoxActions>
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <ContentBox isSpaced={true}>
        <ContentBoxHeader>
          <div className="sg-avatar sg-avatar--spaced">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
          </div>
          <ul className="sg-breadcrumb-list">
            <li className="sg-breadcrumb-list__element">
              <span className="sg-link sg-link--gray">The Brain</span>
            </li>
            <li className="sg-breadcrumb-list__element">
              <span className="sg-link sg-link--gray">Answerer</span>
            </li>
          </ul>
        </ContentBoxHeader>
        <ContentBoxContent>
          <div className="sg-header-primary sg-header-primary--small">Hey! Still not sure about the answer?</div>
          <button className="sg-button-primary sg-button-primary--alt">
            Check similar answers
          </button>
        </ContentBoxContent>
      </ContentBox>
    </DocsBlock>
  </div>;

export default ContentBoxes;
