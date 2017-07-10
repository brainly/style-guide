import React from 'react';
import TopLayer, {sizes} from '../TopLayer';
import DocsBlock from '../../../docs/DocsBlock';
import Icon, {TYPE, COLOR} from '../../icons/Icon';

const content = <div className="sg-content-box">
  <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
    heading
  </div>

  <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
    content
  </div>

  <div className="sg-content-box__actions">
    actions
  </div>
</div>;

const TopLayers = () =>
  <div>
    <DocsBlock info='Standard'>
      <TopLayer>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info='Lead'>
      <TopLayer lead={true}>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info='Small'>
      <TopLayer size={sizes.small}>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info='Medium'>
      <TopLayer size={sizes.medium}>
        {content}
      </TopLayer>
    </DocsBlock>
    <DocsBlock info='Large'>
      <TopLayer size={sizes.large}>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info='fill'>
      <div style={{width: '200px', height: '200px', position: 'relative'}}>
        <TopLayer fill={true}>
          {content}
        </TopLayer>
      </div>
    </DocsBlock>

    <DocsBlock info='Example usage'>
      <TopLayer size={sizes.medium} lead={true} withBugbox={true}>
        <div className="sg-content-box">
          <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
            <h1 className="sg-text-bit sg-text-bit--alt">
              The world's largest learning community
            </h1>
          </div>

          <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">

            <h2 className="sg-header-secondary">
              Why join Brainly?
            </h2>
            <ul className="sg-list">
              <li className="sg-list__element">
                <div className="sg-list__icon sg-list__icon--spacing-right-small">
                  <Icon type={TYPE.PLUS} size={14} color={COLOR.GRAY_SECONDARY}/>
                </div>
                <div className="sg-text sg-text--emphasised">ask questions about your assignment</div>
              </li>
              <li className="sg-list__element">
                <div className="sg-list__icon sg-list__icon--spacing-right-small">
                  <Icon type={TYPE.PLUS} size={14} color={COLOR.GRAY_SECONDARY}/>
                </div>
                <div className="sg-text sg-text--emphasised">get answer with explanation</div>
              </li>
              <li className="sg-list__element">
                <div className="sg-list__icon sg-list__icon--spacing-right-small">
                  <Icon type={TYPE.PLUS} size={14} color={COLOR.GRAY_SECONDARY}/>
                </div>
                <div className="sg-text sg-text--emphasised">find similar questions</div>
              </li>
            </ul>
          </div>

          <div className="sg-content-box__content sg-content-box__content--spaced-bottom-large">
            <a className="sg-button-primary sg-button-primary--alt" href="#">
              Join us
            </a>
          </div>
        </div>
      </TopLayer>
    </DocsBlock>


    <DocsBlock info='Example usage (on small screen'>
      <iframe height="568" width="320" src='components/toplayer/notlogged_toplayer.html'></iframe>
    </DocsBlock>

    <DocsBlock info='Example usage (small spaced on small screen)'>
      <iframe height="568" width="320" src='components/toplayer/small_spaced_toplayer.html'></iframe>
    </DocsBlock>

    <DocsBlock info='Example usage (modal)'>
      <iframe height="300" width="800" src='components/toplayer/default_toplayer.html'></iframe>
    </DocsBlock>

    <DocsBlock info='Example usage (splash screen)'>
      <iframe height="300" width="800" src='components/toplayer/splash_screen_toplayer.html'></iframe>
    </DocsBlock>

  </div>;

export default TopLayers;
