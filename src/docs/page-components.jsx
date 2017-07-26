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
import SubjectMonoIcons from 'subject-mono-icons/pages/subject-mono-icons-interactive';
import IconsAsButtons from 'icon-as-button/pages/icon-as-button-interactive';
import Boxes from 'box/pages/box-interactive';
import ActionLists from 'action-list/pages/action-list-interactive';
import Ratings from 'rating/pages/rating-interactive';
import Icons from 'icons/pages/icons-interactive';

const demos = {
  'Avatars': <Avatars/>,
  'Bubbles': <Bubbles/>,
  'Badges': <Badges/>,
  'Buttons': <Buttons/>,
  'Icon as a button': <IconsAsButtons/>,
  'Stickers': <Stickers/>,
  'Subject icons': <SubjectIcons/>,
  'Subject mono icons': <SubjectMonoIcons/>,
  'Subjects': <Subjects/>,
  'Flash messages': <FlashMessages />,
  'Boxes': <Boxes/>,
  'Action List': <ActionLists/>,
  'Rating': <Ratings/>,
  'Icons': <Icons/>
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
