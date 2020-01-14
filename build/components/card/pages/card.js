import React from 'react';
import Card, { CARD_PADDING } from '../Card';
import CardHole, { CARD_HOLE_COLOR } from '../CardHole';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxContent from 'content-box/ContentBoxContent';
import Headline, { HEADLINE_TYPE } from 'text/Headline';

var Cards = function Cards() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Simple with large padding"
  }, React.createElement(Card, {
    padding: CARD_PADDING.LARGE
  }, React.createElement(CardHole, null, "This is card content top"), React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHTEST
  }, "This is card content bottom"))), React.createElement(DocsBlock, {
    info: "Full and centered"
  }, React.createElement(Card, {
    full: true,
    centered: true
  }, React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
  }, "This is card content top"), React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY_SECONDARY
  }, "This is card content bottom"))), React.createElement(DocsBlock, {
    info: "No border"
  }, React.createElement(Card, {
    noBorder: true,
    padding: CARD_PADDING.SMALL
  }, React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
  }, "This is card content top"), React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY_SECONDARY
  }, "This is card content bottom"))), React.createElement(DocsBlock, {
    info: "With shadow"
  }, React.createElement(Card, {
    shadow: true,
    padding: CARD_PADDING.SMALL
  }, React.createElement(CardHole, null, "This is card content top"), React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.NAVYBLUE_SECONDARY
  }, "This is card content bottom"))), React.createElement(DocsBlock, {
    info: "Vertical with small padding"
  }, React.createElement(Card, {
    vertical: true,
    padding: CARD_PADDING.SMALL
  }, React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.LAVENDER_SECONDARY_LIGHT
  }, "This is card content left"), React.createElement(CardHole, null, "This is card content right"))), React.createElement(DocsBlock, {
    info: "Example use"
  }, React.createElement(Card, {
    padding: CARD_PADDING.SMALL
  }, React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(Headline, {
    type: HEADLINE_TYPE.H3
  }, "Ask a question about a school subject")), React.createElement(ContentBoxContent, null, "And add some description"))))));
};

export default Cards;