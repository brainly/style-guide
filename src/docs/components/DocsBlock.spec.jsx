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

  test('with info', () => {
    const info = 'test';
    const docsBlock = shallow(
      <DocsBlock info={info}/>
    );

    const infoBlock = docsBlock.find(InfoBlock);

    expect(infoBlock.props().info).toEqual(info);
  });
});

describe('InfoBlock', () => {
  test('render', () => {
    const infoBlock = shallow(
      <InfoBlock/>
    );

    expect(infoBlock.find('docs-block__info')).toBeTruthy();
    expect(infoBlock.find('docs-block__header')).toBeTruthy();
  });
});

