// @ts-ignore
import LOGO_SOURCE_PATHS from './logos';

declare let LOGO_BASE_URL: string;
export function getLogoUrl(type: string) {
  return `${LOGO_BASE_URL}${LOGO_SOURCE_PATHS[type]}`;
}
