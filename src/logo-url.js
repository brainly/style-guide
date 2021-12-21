// @flow strict

// $FlowFixMe
import LOGO_SOURCE_PATHS from './logos.json';

declare var LOGO_BASE_URL: string;

export function getLogoUrl(type: string) {
  return `${LOGO_BASE_URL}${LOGO_SOURCE_PATHS[type]}`;
}
