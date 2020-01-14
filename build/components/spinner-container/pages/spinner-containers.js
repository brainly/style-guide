import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SpinnerContainer, { SPINNER_SIZE } from '../SpinnerContainer';
import Button from 'buttons/Button';
import Box, { COLOR } from 'box/Box';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, { HEADLINE_TYPE } from 'text/Headline';
import Textarea from 'form-elements/Textarea';
var IS_LOADING = true;

var SpinnerContainers = function SpinnerContainers() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "with Primary Button",
    additionalInfo: "(small size)"
  }, React.createElement(SpinnerContainer, null, React.createElement(Button, {
    type: "primary-blue"
  }, "Ask your question")), React.createElement(SpinnerContainer, {
    loading: true,
    size: SPINNER_SIZE.SMALL
  }, React.createElement(Button, {
    disabled: IS_LOADING,
    type: "primary-blue"
  }, "Ask your question")), React.createElement(SpinnerContainer, {
    loading: true,
    light: true,
    size: SPINNER_SIZE.SMALL
  }, React.createElement(Button, {
    disabled: IS_LOADING,
    type: "primary"
  }, "Ask your question"))), React.createElement(DocsBlock, {
    info: "with Secondary Button",
    additionalInfo: "(xsmall size)"
  }, React.createElement(SpinnerContainer, null, React.createElement(Button, {
    type: "primary-blue"
  }, "Ask your question")), React.createElement(SpinnerContainer, {
    loading: true,
    size: SPINNER_SIZE.XSMALL
  }, React.createElement(Button, {
    disabled: IS_LOADING,
    type: "primary-blue"
  }, "Ask your question")), React.createElement(SpinnerContainer, {
    loading: true,
    light: true,
    size: SPINNER_SIZE.XSMALL
  }, React.createElement(Button, {
    disabled: IS_LOADING,
    type: "primary"
  }, "Ask your question"))), React.createElement(DocsBlock, {
    info: "with Box"
  }, React.createElement(SpinnerContainer, {
    loading: true
  }, React.createElement(Box, null, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H3
  }, "Ask a question about a school subject")), React.createElement(ContentBoxActions, null, React.createElement(Button, {
    type: "primary-blue",
    wide: true
  }, "Ask your question")))))), React.createElement(DocsBlock, {
    info: "full width"
  }, React.createElement(SpinnerContainer, {
    loading: true,
    fullWidth: true
  }, React.createElement(Textarea, {
    placeholder: "Simple textarea",
    fullWidth: true
  }))), React.createElement(DocsBlock, {
    info: "with Box",
    additionalInfo: "(light)"
  }, React.createElement(SpinnerContainer, {
    loading: true,
    light: true
  }, React.createElement(Box, {
    color: COLOR.NAVYBLUE_SECONDARY
  }, "navyblue-secondary (no border by default)"))));
};

export default SpinnerContainers;