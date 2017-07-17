import colors from '../components/colors/pages/colors';
import icons from '../components/icons/pages/icons';
import checkbox from '../components/form-elements/pages/checkbox';
import radio from '../components/form-elements/pages/radio';
import select from '../components/form-elements/pages/select';
import textInput from '../components/form-elements/pages/text-input';
import textarea from '../components/form-elements/pages/textarea';
import labels from '../components/labels/pages/labels';
// import colors from '../components/overlay'; //TODO
import overlayedBox from '../components/overlayed-box/pages/overlayed-box';
import stickers from '../components/stickers/pages/stickers';
import avatar from '../components/avatar/pages/avatar';
import iconAsButton from '../components/icon-as-button/pages/icon-as-button';
import rating from '../components/rating/pages/rating';
import buttons from '../components/buttons/pages/buttons';
import text from '../components/text/pages/text';
import headers from '../components/text/pages/headers';
import textBit from '../components/text/pages/text-bit';
import links from '../components/text/pages/links';
// import colors from '../components/header/'; //todo
import actionList from '../components/action-list/pages/action-list';
import badges from '../components/badges/pages/badges';
import box from '../components/box/pages/box';
import breadcrumbs from '../components/breadcrumbs/pages/breadcrumbs';
import bubble from '../components/bubble/pages/bubble';
import contentBox from '../components/content-box/pages/content-box';
import dropdowns from '../components/dropdowns/pages/dropdowns';
import flashMessage from '../components/flash-messages/pages/flash-messages';
// import colors from '../components/footer/';// todo
import rwd from '../components/helpers/pages/rwd';
import homeButton from '../components/home-button/pages/home-button';
// import colors from '../components/layout/'; //todo
import list from '../components/list/pages/list';
import logo from '../components/logo/pages/logo';
import media from '../components/media/pages/media';
import popupMenu from '../components/popup-menu/pages/popup-menu';
import search from '../components/search/pages/search';
import toplayer from '../components/toplayer/pages/toplayer';
import defaultToplayer from '../components/toplayer/pages/default_toplayer';
import notloggedToplayer from '../components/toplayer/pages/notlogged_toplayer';
import splashScreenTopLayer from '../components/toplayer/pages/splash_screen_toplayer';
import smallSpacedToplLayer from '../components/toplayer/pages/small_spaced_toplayer';
import subjectIcons from '../components/subject-icons/pages/subject-icons';
import subjects from '../components/subject-icons/pages/subjects';
import separators from '../components/separators/pages/separators';
import separatorSmallDevice from '../components/separators/pages/small-device';

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
        'name': 'Headers',
        'location': 'text/headers',
        component: headers
      },
      {
        'name': 'Link',
        component: links
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
      // todo
      // {
      //   'name': 'Overlay',
      //   'location': 'overlay/overlay',
      //   component:overlay
      // },
      {
        'name': 'Flash messages',
        component: flashMessage
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
        'name': 'Overlayed Box',
        component: overlayedBox
      },
      {
        'name': 'Popup Menu',
        component: popupMenu
      },
      {
        'name': 'Header',
        component: headers
      },
      // todo
      // {
      //   'name': 'Footer',
      // component:footer
      // },
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
      // todo
      // {
      //   'name': 'Layout',
      //   component:layout
      // },
      {
        'name': 'Media',
        component: media
      }
    ]
  }
];

export default navigation;
