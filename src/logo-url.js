// @flow strict

// $FlowFixMe
import LOGO_SOURCE_PATHS from './logos';

declare var ASSETS_BASE_URL: string;

export function getLogoUrl(type: string) {
  return `${ASSETS_BASE_URL}${LOGO_SOURCE_PATHS[type]}`;
}
