import React from 'react';
import ReactDOM from 'react-dom';
import slugify from './slugify';
import Avatars from 'avatar/pages/avatar-interactive';
import Bubbles from 'bubble/pages/bubble-interactive';
import Badges from 'badges/pages/badges-interactive';
import Buttons from 'buttons/pages/buttons-interactive';
import FlashMessages from 'flash-messages/pages/flash-messages-interactive';
import Stickers from 'stickers/pages/stickers-interactive';
import SubjectIcons from 'subject-icons/pages/subject-icons-interactive';
import Subjects from 'subject-icons/pages/subjects-interactive';
import IconsAsButtons from 'icon-as-button/pages/icon-as-button-interactive';
import Boxes from 'box/pages/box-interactive';
import ActionLists from 'action-list/pages/action-list-interactive';
import Ratings from 'rating/pages/rating-interactive';
import Icons from 'icons/pages/icons-interactive';
import Labels from 'labels/pages/labels-interactive';
import Dropdowns from 'dropdowns/pages/dropdowns-interactive';
import Separators from 'separators/pages/separators-interactive';
import Texts from 'text/pages/text-interactive';
import Headers from 'text/pages/headers-interactive';
import Links from 'text/pages/links-interactive';

const demos = {
  'Avatars': <Avatars/>,
  'Bubbles': <Bubbles/>,
  'Badges': <Badges/>,
  'Buttons': <Buttons/>,
  'Icon as a button': <IconsAsButtons/>,
  'Stickers': <Stickers/>,
  'Subject icons': <SubjectIcons/>,
  'Subject icon box': <Subjects/>,
  'Flash messages': <FlashMessages />,
  'Boxes': <Boxes/>,
  'Action List': <ActionLists/>,
  'Rating': <Ratings/>,
  'Icons': <Icons/>,
  'Labels': <Labels/>,
  'Dropdowns': <Dropdowns/>,
  'Separators': <Separators/>,
  'Text': <Texts/>,
  'Headers': <Headers/>,
  'Links': <Links/>
};

const sections = Object.keys(demos).map(key => <article key={key}>
  <h2 className="article-header" id={slugify(key)}>
    {key}
    <a href={'#' + slugify(key)} className="permalink">#</a>
  </h2>
  {demos[key]}
</article>
);

ReactDOM.render(<div>{sections}</div>, document.getElementById('root'));
