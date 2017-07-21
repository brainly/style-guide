import React from 'react';
import TopLayer, {SIZE} from '../TopLayer';
import DocsBlock from 'components/DocsBlock';
import Icon, {TYPE, COLOR} from 'icons/Icon';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import ButtonPrimary, {TYPE as BUTTON_TYPE} from 'buttons/ButtonPrimary';

const content = <ContentBox>
  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    heading
  </ContentBoxContent>

  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    content
  </ContentBoxContent>

  <ContentBoxActions>
    actions
  </ContentBoxActions>
</ContentBox>;

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
      <TopLayer size={SIZE.SMALL}>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info='Medium'>
      <TopLayer size={SIZE.MEDIUM}>
        {content}
      </TopLayer>
    </DocsBlock>
    <DocsBlock info='Large'>
      <TopLayer size={SIZE.LARGE}>
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
      <TopLayer size={SIZE.MEDIUM} lead={true} withBugbox={true}>
        <ContentBox>
          <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
            <h1 className="sg-text-bit sg-text-bit--alt">
              The world's largest learning community
            </h1>
          </ContentBoxContent>

          <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>

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
          </ContentBoxContent>

          <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
            <ButtonPrimary type={BUTTON_TYPE.ALT}>
              Join us
            </ButtonPrimary>
          </ContentBoxContent>
        </ContentBox>
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
