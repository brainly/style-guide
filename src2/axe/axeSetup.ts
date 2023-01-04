import {configureAxe} from 'jest-axe';
// excluding rules which are related to the whole page not to components
const disabledRulesForPage = {
  'page-has-heading-one': {
    enabled: false,
  },
  region: {
    enabled: false,
  },
  'landmark-one-main': {
    enabled: false,
  },
};
export default configureAxe({
  rules: disabledRulesForPage,
});