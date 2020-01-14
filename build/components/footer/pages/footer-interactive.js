import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Footer from '../Footer';
import FooterLine from '../FooterLine';
import Text, { TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT } from 'text/Text';
import Link, { LINK_COLOR } from 'text/Link';
import Breadcrumb from 'breadcrumbs/Breadcrumb';

var Footers = function Footers() {
  var settings = [];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Footer, null, React.createElement(FooterLine, null, "line"), React.createElement(FooterLine, null, "line"), React.createElement(FooterLine, null, "line"))), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Footer, null, React.createElement(FooterLine, null, React.createElement(Breadcrumb, {
    elements: [React.createElement(Link, {
      key: 1,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "Regularmin"), React.createElement(Link, {
      key: 2,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "Kontakt"), React.createElement(Link, {
      key: 3,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "Jak zdoby\u0107 punkty?"), React.createElement(Link, {
      key: 4,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "O nas"), React.createElement(Link, {
      key: 5,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "Kariera")]
  })), React.createElement(FooterLine, null, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD
  }, React.createElement(Breadcrumb, {
    adaptive: true,
    elements: [React.createElement(Text, {
      key: 1,
      type: TEXT_TYPE.SPAN,
      size: TEXT_SIZE.SMALL
    }, "United States: ", React.createElement(Link, {
      target: "_blank"
    }, "brainly.com")), React.createElement(Text, {
      key: 2,
      type: TEXT_TYPE.SPAN,
      size: TEXT_SIZE.SMALL
    }, "Poland: ", React.createElement(Link, {
      target: "_blank"
    }, "brainly.pl")), React.createElement(Text, {
      key: 3,
      type: TEXT_TYPE.SPAN,
      size: TEXT_SIZE.SMALL
    }, "Russia/Ukraine: ", React.createElement(Link, {
      target: "_blank"
    }, "znanija.com")), React.createElement(Text, {
      key: 4,
      type: TEXT_TYPE.SPAN,
      size: TEXT_SIZE.SMALL
    }, "Latam: ", React.createElement(Link, {
      target: "_blank"
    }, "brainly.lat"))]
  }))), React.createElement(FooterLine, null, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    size: TEXT_SIZE.SMALL,
    color: TEXT_COLOR.GRAY,
    weight: TEXT_WEIGHT.BOLD
  }, "Strona korzysta z plik\xF3w cookie w celu realizacji us\u0142ug zgodnie z", ' ', React.createElement(Link, null, "polityk\u0105 cookie"), ". Mo\u017Cesz okre\u015Bli\u0107 warunki przechowywania lub dost\u0119pu do cookie w Twojej przegl\u0105darce.")))));
};

export default Footers;