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

const demos = {
  Avatars: <Avatars />,
  Bubbles: <Bubbles />,
  Buttons: <Buttons />,
  RoundButtons: <RoundButtons />,
  Counters: <Counters />,
  'Icon as a button': <IconsAsButtons />,
  'Subject icons': <SubjectIcons />,
  'Subject icon box': <Subjects />,
  'Flash messages': <FlashMessages />,
  Boxes: <Boxes />,
  Flex: <Flexboxes />,
  Cards: <Cards />,
  'Action List': <ActionLists />,
  Rating: <Ratings />,
  Icons: <Icons />,
  LabelsDeprecated: <LabelsDeprecated />,
  Labels: <Labels />,
  Separators: <Separators />,
  Text: <Texts />,
  Headlines: <Headlines />,
  Links: <Links />,
  'Text Bit': <TextBits />,
  'Popup Menu': <PopupMenus />,
  'Home Button': <HomeButtons />,
  Checkbox: <Checkboxes />,
  Radio: <Radios />,
  Input: <Inputs />,
  Select: <Selects />,
  Textarea: <Textareas />,
  Search: <SearchInputs />,
  Breadcrumbs: <Breadcrumbs />,
  Footer: <Footers />,
  Layout: <Layouts />,
  Toplayer: <Toplayers />,
  Overlay: <Overlays />,
  'Overlayed box': <OverlayedBoxes />,
  Logo: <Logos />,
  Media: <Media />,
  Helpers: <Helpers />,
  ContentBox: <ContentBoxes />,
  Spinner: <Spinners />,
  'Spinner Container': <SpinnerContainers />,
};

export const sections = Object.keys(demos).map(key => (
  <article key={key}>
    <h2 className="article-header" id={slugify(key)}>
      {key}
      <a href={`#${slugify(key)}`} className="permalink">
        #
      </a>
    </h2>
    {demos[key]}
  </article>
));

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<div>{sections}</div>, root);
}
