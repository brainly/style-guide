import colors from '../components/colors/pages/colors';
import icons from '../components/icons/pages/icons';
import checkbox from '../components/form-elements/pages/checkbox';
import radio from '../components/form-elements/pages/radio';
import select from '../components/form-elements/pages/select';
import textInput from '../components/form-elements/pages/input';
import textarea from '../components/form-elements/pages/textarea';
import formElements from '../components/form-elements/pages/formElements';
import labels from '../components/labels/pages/labels';
import fileHandlers from '../components/file-handler/pages/file-handlers';
import overlay from '../components/overlay/pages/overlay';
import overlayedBox from '../components/overlayed-box/pages/overlayed-box';
import avatar from '../components/avatar/pages/avatar';
import iconAsButton from '../components/icon-as-button/pages/icon-as-button';
import rating from '../components/rating/pages/rating';
import buttons from '../components/buttons/pages/buttons';
import text from '../components/text/pages/text';
import headlines from '../components/text/pages/headlines';
import textBit from '../components/text/pages/text-bit';
import header from '../components/header/pages/header';
import actionList from '../components/action-list/pages/action-list';
import counters from '../components/counters/pages/counters';
import box from '../components/box/pages/box';
import flexbox from '../components/flex/pages/flex';
import card from '../components/card/pages/card';
import breadcrumbs from '../components/breadcrumbs/pages/breadcrumbs';
import bubble from '../components/bubble/pages/bubble';
import contentBox from '../components/content-box/pages/content-box';
import flashMessage from '../components/flash-messages/pages/flash-messages';
import footer from '../components/footer/pages/footer';
import rwd from '../components/helpers/pages/rwd';
import homeButton from '../components/home-button/pages/home-button';
import layout from '../components/layout/pages/layout';
import list from '../components/list/pages/list';
import logo from '../components/logo/pages/logo';
import media from '../components/media/pages/media';
import popupMenu from '../components/popup-menu/pages/popup-menu';
import search from '../components/search/pages/search';
import toplayer from '../components/toplayer/pages/toplayer';
import subjectIcons from '../components/subject-icons/pages/subject-icons';
import subjectMonoIcons from '../components/subject-icons/pages/subject-mono-icons';
import subjects from '../components/subject-icons/pages/subjects';
import MathSymbols from '../components/math-symbols/pages/math-symbols';
import MobileIcons from '../components/mobile-icons/pages/mobile-icons';
import separators from '../components/separators/pages/separators';
import spinners from '../components/spinner/pages/spinners';
import SpinnerContainers from '../components/spinner-container/pages/spinner-containers';
import dropdowns from '../components/dropdowns/pages/dropdowns';
import UtilsIntroduction from '../sass/pages/utils/introduction';
import SpaceBetween from '../sass/pages/utils/space-between';
import Cursor from '../sass/pages/utils/cursor';
import Animations from '../sass/pages/utils/animations';
import accordion from '../components/accordion/pages/accordion';
import Shadows from '../components/shadows/pages/shadows';
import ShadowsUtils from '../sass/pages/utils/shadows';
import UXMotion from '../sass/pages/utils/uxmotion';

const navigation = [
  {
    name: 'Basics',
    location: 'basics',
    elements: [
      {
        name: 'Colors',
        component: colors,
      },
      {
        name: 'Text',
        component: text,
      },
      {
        name: 'Headlines',
        location: 'text/headlines',
        component: headlines,
      },
      {
        name: 'Text Bit',
        component: textBit,
      },
      {
        name: 'Icons',
        component: icons,
      },
      {
        name: 'Mobile Icons',
        component: MobileIcons,
      },
      {
        name: 'Subject Icons',
        component: subjectIcons,
      },
      {
        name: 'Subject Mono Icons',
        component: subjectMonoIcons,
      },
      {
        name: 'Math Symbols',
        component: MathSymbols,
      },
      {
        name: 'Logo',
        component: logo,
      },
      {
        name: 'Helpers',
        component: rwd,
      },
      {
        name: 'Shadows',
        component: Shadows,
      },
      {
        name: 'UX Motion',
        component: UXMotion,
      },
    ],
  },
  {
    name: 'Components',
    location: 'components',
    elements: [
      {
        name: 'Breadcrumbs',
        component: breadcrumbs,
      },
      {
        name: 'Lists',
        component: list,
      },
      {
        name: 'Counters',
        component: counters,
      },
      {
        name: 'Avatars',
        component: avatar,
      },
      {
        name: 'Labels',
        component: labels,
      },
      {
        name: 'File Handler',
        component: fileHandlers,
      },
      {
        name: 'Rating',
        component: rating,
      },
      {
        name: 'Buttons',
        component: buttons,
      },
      {
        name: 'Icon as button (deprecated)',
        component: iconAsButton,
      },
      {
        name: 'Checkbox',
        component: checkbox,
      },
      {
        name: 'Radio',
        component: radio,
      },
      {
        name: 'Text input',
        component: textInput,
      },
      {
        name: 'Search',
        location: 'search/search',
        component: search,
      },
      {
        name: 'Selects',
        component: select,
      },
      {
        name: 'Dropdowns',
        component: dropdowns,
      },
      {
        name: 'Textarea',
        component: textarea,
      },
      {
        name: 'Form examples',
        component: formElements,
      },
      {
        name: 'Home Button',
        component: homeButton,
      },
      {
        name: 'Subjects',
        component: subjects,
      },
      {
        name: 'Separators',
        component: separators,
      },
      {
        name: 'Overlay',
        component: overlay,
      },
      {
        name: 'Flash messages',
        component: flashMessage,
      },
      {
        name: 'Spinner',
        component: spinners,
      },
    ],
  },
  {
    name: 'Containers',
    location: 'containers',
    elements: [
      {
        name: 'Accordion',
        component: accordion,
      },
      {
        name: 'Bubble',
        component: bubble,
      },
      {
        name: 'Box',
        location: 'box/box',
        component: box,
      },
      {
        name: 'Flexbox',
        location: 'flex/flex',
        component: flexbox,
      },
      {
        name: 'Card',
        location: 'card/card',
        component: card,
      },
      {
        name: 'Overlayed Box',
        component: overlayedBox,
      },
      {
        name: 'Popup Menu (deprecated)',
        component: popupMenu,
      },
      {
        name: 'Header',
        component: header,
      },
      {
        name: 'Footer',
        component: footer,
      },
      {
        name: 'Action List (deprecated)',
        component: actionList,
      },
      {
        name: 'Content Box (deprecated)',
        component: contentBox,
      },
      {
        name: 'Toplayer',
        component: toplayer,
      },
      {
        name: 'Layout',
        component: layout,
      },
      {
        name: 'Media',
        component: media,
      },
      {
        name: 'Spinner Container',
        component: SpinnerContainers,
      },
    ],
  },
  {
    name: 'Utilities',
    location: 'utilities',
    elements: [
      {
        name: 'Introduction',
        component: UtilsIntroduction,
      },
      {
        name: 'Space Between',
        component: SpaceBetween,
      },
      {
        name: 'Animations',
        component: Animations,
      },
      {
        name: 'Cursor',
        component: Cursor,
      },
      {
        name: 'Shadows',
        component: ShadowsUtils,
      },
    ],
  },
  {
    name: 'Interactive',
    location: 'interactive',
    elements: [],
  },
];

export default navigation;
