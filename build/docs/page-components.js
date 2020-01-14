import React from 'react';
import ReactDOM from 'react-dom';
import slugify from './slugify';
import Avatars from 'avatar/pages/avatar-interactive';
import Bubbles from 'bubble/pages/bubble-interactive';
import Counters from 'counters/pages/counters-interactive';
import Buttons from 'buttons/pages/buttons-interactive';
import RoundButtons from 'round-buttons/pages/round-buttons-interactive';
import FlashMessages from 'flash-messages/pages/flash-messages-interactive';
import SubjectIcons from 'subject-icons/pages/subject-icons-interactive';
import Subjects from 'subject-icons/pages/subjects-interactive';
import IconsAsButtons from 'icon-as-button/pages/icon-as-button-interactive';
import Boxes from 'box/pages/box-interactive';
import Flexboxes from 'flex/pages/flex-interactive';
import Cards from 'card/pages/card-interactive';
import ActionLists from 'action-list/pages/action-list-interactive';
import Ratings from 'rating/pages/rating-interactive';
import Icons from 'icons/pages/icons-interactive';
import LabelsDeprecated from 'labels-deprecated/pages/labels-deprecated-interactive';
import Labels from 'labels/pages/labels-interactive';
import Dropdowns from 'dropdowns/pages/dropdowns-interactive';
import Separators from 'separators/pages/separators-interactive';
import Texts from 'text/pages/text-interactive';
import Headlines from 'text/pages/headlines-interactive';
import Links from 'text/pages/links-interactive';
import TextBits from 'text/pages/text-bit-interactive';
import PopupMenus from 'popup-menu/pages/popup-menu-interactive';
import HomeButtons from 'home-button/pages/home-button-interactive';
import Checkboxes from 'form-elements/pages/checkbox-interactive';
import Radios from 'form-elements/pages/radio-interactive';
import Inputs from 'form-elements/pages/input-interactive';
import Selects from 'form-elements/pages/select-interactive';
import Textareas from 'form-elements/pages/textarea-interactive';
import SearchInputs from 'search/pages/search-interactive';
import Breadcrumbs from 'breadcrumbs/pages/breadcrumbs-interactive';
import Footers from 'footer/pages/footer-interactive';
import Layouts from 'layout/pages/layout-interactive';
import Toplayers from 'toplayer/pages/toplayer-interactive';
import Overlays from 'overlay/pages/overlay-interactive';
import OverlayedBoxes from 'overlayed-box/pages/overlayed-box-interactive';
import Logos from 'logo/pages/logo-interactive';
import Media from 'media/pages/media-interactive';
import Helpers from 'helpers/pages/rwd-interactive';
import ContentBoxes from 'content-box/pages/content-box-interactive';
import Spinners from 'spinner/pages/spinners-interactive';
import SpinnerContainers from 'spinner-container/pages/spinner-containers-interactive';
var demos = {
  Avatars: React.createElement(Avatars, null),
  Bubbles: React.createElement(Bubbles, null),
  Buttons: React.createElement(Buttons, null),
  RoundButtons: React.createElement(RoundButtons, null),
  Counters: React.createElement(Counters, null),
  'Icon as a button': React.createElement(IconsAsButtons, null),
  'Subject icons': React.createElement(SubjectIcons, null),
  'Subject icon box': React.createElement(Subjects, null),
  'Flash messages': React.createElement(FlashMessages, null),
  Boxes: React.createElement(Boxes, null),
  Flex: React.createElement(Flexboxes, null),
  Cards: React.createElement(Cards, null),
  'Action List': React.createElement(ActionLists, null),
  Rating: React.createElement(Ratings, null),
  Icons: React.createElement(Icons, null),
  LabelsDeprecated: React.createElement(LabelsDeprecated, null),
  Labels: React.createElement(Labels, null),
  Dropdowns: React.createElement(Dropdowns, null),
  Separators: React.createElement(Separators, null),
  Text: React.createElement(Texts, null),
  Headlines: React.createElement(Headlines, null),
  Links: React.createElement(Links, null),
  'Text Bit': React.createElement(TextBits, null),
  'Popup Menu': React.createElement(PopupMenus, null),
  'Home Button': React.createElement(HomeButtons, null),
  Checkbox: React.createElement(Checkboxes, null),
  Radio: React.createElement(Radios, null),
  Input: React.createElement(Inputs, null),
  Select: React.createElement(Selects, null),
  Textarea: React.createElement(Textareas, null),
  Search: React.createElement(SearchInputs, null),
  Breadcrumbs: React.createElement(Breadcrumbs, null),
  Footer: React.createElement(Footers, null),
  Layout: React.createElement(Layouts, null),
  Toplayer: React.createElement(Toplayers, null),
  Overlay: React.createElement(Overlays, null),
  'Overlayed box': React.createElement(OverlayedBoxes, null),
  Logo: React.createElement(Logos, null),
  Media: React.createElement(Media, null),
  Helpers: React.createElement(Helpers, null),
  ContentBox: React.createElement(ContentBoxes, null),
  Spinner: React.createElement(Spinners, null),
  'Spinner Container': React.createElement(SpinnerContainers, null)
};
export var sections = Object.keys(demos).map(function (key) {
  return React.createElement("article", {
    key: key
  }, React.createElement("h2", {
    className: "article-header",
    id: slugify(key)
  }, key, React.createElement("a", {
    href: "#".concat(slugify(key)),
    className: "permalink"
  }, "#")), demos[key]);
});
var root = document.getElementById('root');

if (root) {
  ReactDOM.render(React.createElement("div", null, sections), root);
}