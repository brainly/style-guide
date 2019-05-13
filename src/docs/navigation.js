import colors from '../components/colors/pages/colors';
import icons from '../components/icons/pages/icons';
import checkbox from '../components/form-elements/pages/checkbox';
import radio from '../components/form-elements/pages/radio';
import select from '../components/form-elements/pages/select';
import textInput from '../components/form-elements/pages/input';
import textarea from '../components/form-elements/pages/textarea';
import labels from '../components/labels/pages/labels';
import overlay from '../components/overlay/pages/overlay';
import overlayedBox from '../components/overlayed-box/pages/overlayed-box';
import stickers from '../components/stickers/pages/stickers';
import avatar from '../components/avatar/pages/avatar';
import iconAsButton from '../components/icon-as-button/pages/icon-as-button';
import rating from '../components/rating/pages/rating';
import buttons from '../components/buttons/pages/buttons';
import text from '../components/text/pages/text';
import headlines from '../components/text/pages/headlines';
import textBit from '../components/text/pages/text-bit';
import header from '../components/header/pages/header';
import actionList from '../components/action-list/pages/action-list';
import badges from '../components/badges/pages/badges';
import box from '../components/box/pages/box';
import flexbox from '../components/flex/pages/flex';
import card from '../components/card/pages/card';
import breadcrumbs from '../components/breadcrumbs/pages/breadcrumbs';
import bubble from '../components/bubble/pages/bubble';
import contentBox from '../components/content-box/pages/content-box';
import dropdowns from '../components/dropdowns/pages/dropdowns';
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
import separators from '../components/separators/pages/separators';
import spinners from '../components/spinner/pages/spinners';
import SpinnerContainers from '../components/spinner-container/pages/spinner-containers';

const navigation = [
  {
    'name': 'Basics',
    'location': 'basics',
    'elements': [
      {
        'name': 'Colors',
        component: colors
      },
      {
        'name': 'Text',
        component: text
      },
      {
        'name': 'Headlines',
        'location': 'text/headlines',
        component: headlines
      },
      {
        'name': 'Text Bit',
        component: textBit
      },
      {
        'name': 'Icons',
        component: icons
      },
      {
        'name': 'Subject Icons',
        component: subjectIcons
      },
      {
        'name': 'Subject Mono Icons',
        component: subjectMonoIcons
      },
      {
        'name': 'Math symbols',
        component: MathSymbols
      },
      {
        'name': 'Logo',
        component: logo
      },
      {
        'name': 'Helpers',
        component: rwd
      }
    ]
  },
  {
    'name': 'Components',
    'location': 'components',
    'elements': [
      {
        'name': 'Breadcrumbs',
        component: breadcrumbs
      },
      {
        'name': 'Lists',
        component: list
      },
      {
        'name': 'Badges',
        component: badges
      },
      {
        'name': 'Stickers',
        component: stickers
      },
      {
        'name': 'Avatars',
        component: avatar
      },
      {
        'name': 'Labels',
        component: labels
      },
      {
        'name': 'Rating',
        component: rating
      },
      {
        'name': 'Buttons',
        component: buttons
      },
      {
        'name': 'Icon as button',
        component: iconAsButton
      },
      {
        'name': 'Checkbox',
        component: checkbox
      },
      {
        'name': 'Radio',
        component: radio
      },
      {
        'name': 'Text input',
        component: textInput
      },
      {
        'name': 'Selects',
        component: select
      },
      {
        'name': 'Textarea',
        component: textarea
      },
      {
        'name': 'Dropdowns',
        component: dropdowns
      },
      {
        'name': 'Search',
        'location': 'search/search',
        component: search
      },
      {
        'name': 'Home Button',
        component: homeButton
      },
      {
        'name': 'Subjects',
        component: subjects
      },
      {
        'name': 'Separators',
        component: separators
      },
      {
        'name': 'Overlay',
        component: overlay
      },
      {
        'name': 'Flash messages',
        component: flashMessage
      },
      {
        'name': 'Spinner',
        component: spinners
      }
    ]
  },
  {
    'name': 'Containers',
    'location': 'containers',
    'elements': [
      {
        'name': 'Bubble',
        component: bubble
      },
      {
        'name': 'Box',
        'location': 'box/box',
        component: box
      },
      {
        'name': 'Flexbox',
        'location': 'flex/flex',
        component: flexbox
      },
      {
        'name': 'Card',
        'location': 'card/card',
        component: card
      },
      {
        'name': 'Overlayed Box',
        component: overlayedBox
      },
      {
        'name': 'Popup Menu',
        component: popupMenu
      },
      {
        'name': 'Header',
        component: header
      },
      {
        'name': 'Footer',
        component: footer
      },
      {
        'name': 'Action List',
        component: actionList
      },
      {
        'name': 'Content Box',
        component: contentBox
      },
      {
        'name': 'Toplayer',
        component: toplayer
      },
      {
        'name': 'Layout',
        component: layout
      },
      {
        'name': 'Media',
        component: media
      },
      {
        'name': 'Spinner Container',
        component: SpinnerContainers
      }
    ]
  },
  {
    'name': 'Interactive',
    'location': 'interactive',
    'elements': [
    ]
  }
];

export default navigation;
