import React from 'react';
import ReactDOM from 'react-dom';
import Avatars from '../components/avatar/pages/avatar-interactive';
import Bubbles from '../components/bubble/pages/bubble-interactive';
import Badges from '../components/badges/pages/badges-interactive';
import Buttons from '../components/buttons/pages/buttons-interactive';
import FlashMessages from '../components/flash-messages/pages/flash-messages-interactive';
import Stickers from '../components/stickers/pages/stickers-interactive';
import SubjectIcons from '../components/subject-icons/pages/subject-icons-interactive';
import SubjectMonoIcons from '../components/subject-mono-icons/pages/subject-mono-icons-interactive';
import IconsAsButtons from '../components/icon-as-button/pages/icon-as-button-interactive';
import Subjects from '../components/subject-icons/pages/subjects-interactive';
import slugify from './slugify';

const demos = {
  'Avatars': <Avatars/>,
  'Bubbles': <Bubbles/>,
  'Badges': <Badges/>,
  'Buttons': <Buttons/>,
  'Icon as a button': <IconsAsButtons/>,
  'Flash messages': <FlashMessages />,
  'Stickers': <Stickers/>,
  'Subject icons': <SubjectIcons/>,
  'Subject mono icons': <SubjectMonoIcons/>,
  'Subjects': <Subjects/>
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
