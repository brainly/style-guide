import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Spinner, { SPINNER_SIZE } from '../Spinner';

var Spinners = function Spinners() {
  return React.createElement(React.Fragment, null, React.createElement(DocsBlock, {
    info: "Normal",
    additionalInfo: "(Default)"
  }, React.createElement(Spinner, null)), React.createElement(DocsBlock, {
    info: "Small"
  }, React.createElement(Spinner, {
    size: SPINNER_SIZE.SMALL
  })), React.createElement(DocsBlock, {
    info: "XSmall"
  }, React.createElement(Spinner, {
    size: SPINNER_SIZE.XSMALL
  })), React.createElement(DocsBlock, {
    info: "XXSmall"
  }, React.createElement(Spinner, {
    size: SPINNER_SIZE.XXSMALL
  })), React.createElement(DocsBlock, {
    info: "Light"
  }, React.createElement(ContrastBox, null, React.createElement(Spinner, {
    light: true
  }))));
};

export default Spinners;