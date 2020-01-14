import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Logo, { TYPE } from '../Logo';

var Logos = function Logos() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Brainly - default"
  }, React.createElement(Logo, null)), React.createElement(DocsBlock, {
    info: "Eodev"
  }, React.createElement(Logo, {
    type: TYPE.EODEV
  })), React.createElement(DocsBlock, {
    info: "Nosdevoirs"
  }, React.createElement(Logo, {
    type: TYPE.NOSDEVOIRS
  })), React.createElement(DocsBlock, {
    info: "Znanija"
  }, React.createElement(Logo, {
    type: TYPE.ZNANIJA
  })), React.createElement(DocsBlock, {
    info: "Znanija Plus"
  }, React.createElement(Logo, {
    type: TYPE.ZNANIJA_PLUS
  })), React.createElement(DocsBlock, {
    info: "Znanija Plus Inverse"
  }, React.createElement(Logo, {
    type: TYPE.ZNANIJA_PLUS_INVERSE
  })), React.createElement(DocsBlock, {
    info: "Znanija Plus Small"
  }, React.createElement(Logo, {
    type: TYPE.ZNANIJA_PLUS_SMALL
  })), React.createElement(DocsBlock, {
    info: "Brainly Plus"
  }, React.createElement(Logo, {
    type: TYPE.BRAINLY_PLUS
  })), React.createElement(DocsBlock, {
    info: "Brainly Plus Inverse"
  }, React.createElement(Logo, {
    type: TYPE.BRAINLY_PLUS_INVERSE
  })), React.createElement(DocsBlock, {
    info: "Brainly Plus Small"
  }, React.createElement(Logo, {
    type: TYPE.BRAINLY_PLUS_SMALL
  })));
};

export default Logos;