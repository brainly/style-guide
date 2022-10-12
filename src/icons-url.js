// @flow strict

// $FlowFixMe
import ICON_SOURCE_PATHS from './icons';

declare var ASSETS_BASE_URL: string;

export function getIconsUrl(type: string) {
  console.log(ICON_SOURCE_PATHS);
  return `${ASSETS_BASE_URL}${ICON_SOURCE_PATHS[type]}`;
}
