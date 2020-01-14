import React from 'react';
import Avatar, { SIZE } from '../Avatar';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

var Avatars = function Avatars() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default avatars",
    toBottom: true
  }, Object.values(SIZE).map(function (size, index) {
    return React.createElement(Avatar, {
      key: index,
      size: size
    });
  })), React.createElement(DocsBlock, {
    info: "Default with border"
  }, React.createElement(ContrastBox, {
    toBottom: true
  }, Object.values(SIZE).map(function (size, index) {
    return React.createElement(Avatar, {
      key: index,
      size: size,
      border: true
    });
  }))), React.createElement(DocsBlock, {
    info: "Default avatars",
    toBottom: true
  }, Object.values(SIZE).map(function (size, index) {
    return React.createElement(Avatar, {
      key: index,
      size: size,
      imgSrc: "https://source.unsplash.com/240x240/?cat"
    });
  })), React.createElement(DocsBlock, {
    info: "Default with border"
  }, React.createElement(ContrastBox, {
    toBottom: true
  }, Object.values(SIZE).map(function (size, index) {
    return React.createElement(Avatar, {
      key: index,
      size: size,
      border: true,
      imgSrc: "https://source.unsplash.com/240x240/?dog"
    });
  }))));
};

export default Avatars;