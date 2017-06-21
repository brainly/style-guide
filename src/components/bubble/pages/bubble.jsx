import React from 'react';
import Bubble from '../Bubble';
import DocsBlock from '../../../docs/DocsBlock';

const Bubbles = () =>
  <div>
    <DocsBlock info='Top (middle)' additionalInfo='--top'>
      <Bubble direction='top'>
        Hi there!!<br/>
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info='Top-start' additionalInfo='--top --row-start'>
      <Bubble direction='top' alignment='start'>
        Hi there!!<br/>
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info='Top-end' additionalInfo='--top --row-end'>
      <Bubble direction='top' alignment='end'>
        Hi there!!<br/>
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info='Bottom-start' additionalInfo='--bottom --row-start (--/--row-end)'>
      <Bubble direction='bottom' alignment='start'>
        Hi there!!<br/>
        Just wondering if you have any problems with your school work.
      </Bubble>
    </DocsBlock>

    <DocsBlock info='Left-start' additionalInfo='--left --column-start (--/--column-end)'>
      <div style={{width: '300px'}}>
        <Bubble direction='left' alignment='start'>
          Hi there!! Just wondering if you have any problems with your school work.
          We've got plenty of people who can help you here :)
          Also, my last question was answered in less than 10 minutes :D
          Anyway, you can just go ahead and try for yourself.
        </Bubble>
      </div>
    </DocsBlock>

    <DocsBlock info='Right-start' additionalInfo='--right --column-start (--/--column-end)'>
      <div style={{width: '300px'}}>
        <Bubble direction='right' alignment='start'>
          Hi there!! Just wondering if you have any problems with your school work.
          We've got plenty of people who can help you here :)
          Also, my last question was answered in less than 10 minutes :D
          Anyway, you can just go ahead and try for yourself.
        </Bubble>
      </div>
    </DocsBlock>

    <DocsBlock info='Full + left' additionalInfo='--full (makes 100% height) --top'>
      <div style={{height: '200px'}}>
        <Bubble direction='top' full={true}>
          Hi there!!<br/>
          Just wondering if you have any problems with your school work.
        </Bubble>
      </div>
    </DocsBlock>

    <DocsBlock info='Example usage' additionalInfo='--top'>
      <Bubble direction='top'>
        <div className="sg-bubble__hole">
          <div className="sg-content-box">
            <div className="sg-content-box__header">
              <div className="sg-avatar">
                <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
              </div>
              <ul className="sg-breadcrumb-list">
                <li className="sg-breadcrumb-list__element">
                  <a className="sg-link sg-link--gray" href="#">Katie</a>
                </li>
                <li className="sg-breadcrumb-list__element">
                  <a className="sg-link sg-link--gray" href="#">a few seconds ago</a>
                </li>
              </ul>
            </div>
            <div className="sg-content-box__content">
              <div className="sg-text">
                Hi there!! Just wondering if you have any problems with your school work. We've got plenty
                of people who
                can help you here :) Also, my last question was answered in less than 10 minutes :D Anyway,
                you can just
                go ahead and try for yourself.
              </div>
            </div>
            <div className="sg-content-box__actions">
              <button className="sg-button-secondary sg-button-secondary--alt">
                Join us!
              </button>
            </div>
          </div>
        </div>
      </Bubble>
    </DocsBlock>

  </div>;


export default Bubbles;
