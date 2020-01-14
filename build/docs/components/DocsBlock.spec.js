import React from 'react';
import { shallow } from 'enzyme';
import DocsBlock, { InfoBlock, ContentBlock } from './DocsBlock';
describe('DocsBlock', function () {
  test('render', function () {
    var docsBlock = shallow(React.createElement(DocsBlock, null, "some text"));
    expect(docsBlock.hasClass('docs-block')).toEqual(true);
    expect(docsBlock.find(ContentBlock)).toHaveLength(1);
    expect(docsBlock.find(InfoBlock)).toHaveLength(1);
  });
  test('children', function () {
    var docsBlock = shallow(React.createElement(DocsBlock, null, React.createElement("div", {
      className: "test"
    })));
    expect(docsBlock.find('.test')).toHaveLength(1);
  });
  test('pass properties to InfoBlock', function () {
    var info = 'test';
    var additionalInfo = 'more tests';
    var docsBlock = shallow(React.createElement(DocsBlock, {
      info: info,
      additionalInfo: additionalInfo
    }));
    var infoBlock = docsBlock.find(InfoBlock);
    expect(infoBlock.props().info).toEqual(info);
    expect(infoBlock.props().additionalInfo).toEqual(additionalInfo);
  });
  test('pass properties to ContentBlock', function () {
    var docsBlock = shallow(React.createElement(DocsBlock, {
      toBottom: true,
      centered: true
    }));
    var contentBlock = docsBlock.find(ContentBlock);
    expect(contentBlock.props().toBottom).toBeTruthy();
    expect(contentBlock.props().centered).toBeTruthy();
  });
  test('multi content', function () {
    var docsBlock = shallow(React.createElement(DocsBlock, {
      multiContent: [React.createElement("div", {
        key: 1,
        className: "first"
      }), React.createElement("div", {
        key: 2,
        className: "second"
      })]
    }));
    expect(docsBlock.find('.first')).toHaveLength(1);
    expect(docsBlock.find('.second')).toHaveLength(1);
    expect(docsBlock.find(ContentBlock)).toHaveLength(3);
  });
});
describe('InfoBlock', function () {
  test('empty', function () {
    var infoBlock = shallow(React.createElement(InfoBlock, null));
    expect(infoBlock.hasClass('docs-block__info')).toBeFalsy();
    expect(infoBlock.find('.docs-block__header')).toHaveLength(0);
  });
  test('with info', function () {
    var infoBlock = shallow(React.createElement(InfoBlock, {
      info: "test"
    }));
    expect(infoBlock.hasClass('docs-block__info')).toBeTruthy();
    expect(infoBlock.find('.docs-block__header')).toHaveLength(1);
  });
  test('with additional info', function () {
    var infoBlock = shallow(React.createElement(InfoBlock, {
      additionalInfo: "test"
    }));
    expect(infoBlock.hasClass('docs-block__info')).toBeTruthy();
    expect(infoBlock.find('.docs-block__header')).toHaveLength(0);
  });
});
describe('ContentBlock', function () {
  test('render', function () {
    var contentBlock = shallow(React.createElement(ContentBlock, null));
    expect(contentBlock.find('.docs-block__content')).toBeTruthy();
  });
  test('toBottom', function () {
    var contentBlock = shallow(React.createElement(ContentBlock, {
      toBottom: true
    }));
    expect(contentBlock.hasClass('docs-block__content--to-bottom')).toBeTruthy();
  });
  test('centered', function () {
    var contentBlock = shallow(React.createElement(ContentBlock, {
      centered: true
    }));
    expect(contentBlock.hasClass('docs-block__content--centered')).toBeTruthy();
  });
});