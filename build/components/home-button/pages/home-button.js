import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import HomeButton, { TYPE } from '../HomeButton';

var Logos = function Logos() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Brainly - default"
  }, React.createElement(ContrastBox, {
    smallPadding: true
  }, React.createElement(HomeButton, null))), React.createElement(DocsBlock, {
    info: "Eodev"
  }, React.createElement(ContrastBox, {
    smallPadding: true
  }, React.createElement(HomeButton, {
    type: TYPE.EODEV
  }))), React.createElement(DocsBlock, {
    info: "Nosdevoirs"
  }, React.createElement(ContrastBox, {
    smallPadding: true
  }, React.createElement(HomeButton, {
    type: TYPE.NOSDEVOIRS
  }))), React.createElement(DocsBlock, {
    info: "Znanija"
  }, React.createElement(ContrastBox, {
    smallPadding: true
  }, React.createElement(HomeButton, {
    type: TYPE.ZNANIJA
  }))), React.createElement(DocsBlock, {
    info: "Brainly Plus"
  }, React.createElement(ContrastBox, {
    smallPadding: true
  }, React.createElement(HomeButton, {
    type: TYPE.BRAINLY_PLUS
  }))));
};

export default Logos;