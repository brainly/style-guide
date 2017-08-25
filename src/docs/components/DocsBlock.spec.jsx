import React from 'react';
import {shallow} from 'enzyme';
import DocsBlock, {InfoBlock, ContentBlock} from './DocsBlock';

describe('DocsBlock', () => {
  test('render', () => {
    const docsBlock = shallow(
      <DocsBlock>some text</DocsBlock>
    );

    expect(docsBlock.hasClass('docs-block')).toEqual(true);
    expect(docsBlock.find(ContentBlock)).toHaveLength(1);
    expect(docsBlock.find(InfoBlock)).toHaveLength(1);
  });

  test('children', () => {
    const docsBlock = shallow(
      <DocsBlock><div className="test" /></DocsBlock>
    );

    expect(docsBlock.find('.test')).toHaveLength(1);
  });

  test('pass properties to InfoBlock', () => {
    const info = 'test';
    const additionalInfo = 'more tests';
    const docsBlock = shallow(
      <DocsBlock info={info} additionalInfo={additionalInfo} />
    );

    const infoBlock = docsBlock.find(InfoBlock);

    expect(infoBlock.props().info).toEqual(info);
    expect(infoBlock.props().additionalInfo).toEqual(additionalInfo);
  });

  test('pass properties to ContentBlock', () => {
    const docsBlock = shallow(
      <DocsBlock toBottom centered />
    );

    const contentBlock = docsBlock.find(ContentBlock);

    expect(contentBlock.props().toBottom).toBeTruthy();
    expect(contentBlock.props().centered).toBeTruthy();
  });

  test('multi content', () => {
    const docsBlock = shallow(
      <DocsBlock multiContent={[<div key={1} className="first" />, <div key={2} className="second" />]} />
    );

    expect(docsBlock.find('.first')).toHaveLength(1);
    expect(docsBlock.find('.second')).toHaveLength(1);
    expect(docsBlock.find(ContentBlock)).toHaveLength(3);
  });
});

describe('InfoBlock', () => {
  test('empty', () => {
    const infoBlock = shallow(
      <InfoBlock />
    );

    expect(infoBlock.hasClass('docs-block__info')).toBeFalsy();
    expect(infoBlock.find('.docs-block__header')).toHaveLength(0);
  });

  test('with info', () => {
    const infoBlock = shallow(
      <InfoBlock info="test" />
    );

    expect(infoBlock.hasClass('docs-block__info')).toBeTruthy();
    expect(infoBlock.find('.docs-block__header')).toHaveLength(1);
  });

  test('with additional info', () => {
    const infoBlock = shallow(
      <InfoBlock additionalInfo="test" />
    );

    expect(infoBlock.hasClass('docs-block__info')).toBeTruthy();
    expect(infoBlock.find('.docs-block__header')).toHaveLength(0);
  });
});

describe('ContentBlock', () => {
  test('render', () => {
    const contentBlock = shallow(
      <ContentBlock />
    );

    expect(contentBlock.find('.docs-block__content')).toBeTruthy();
  });

  test('toBottom', () => {
    const contentBlock = shallow(
      <ContentBlock toBottom />
    );

    expect(contentBlock.hasClass('docs-block__content--to-bottom')).toBeTruthy();
  });

  test('centered', () => {
    const contentBlock = shallow(
      <ContentBlock centered />
    );

    expect(contentBlock.hasClass('docs-block__content--centered')).toBeTruthy();
  });
});
