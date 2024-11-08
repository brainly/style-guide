import {MEDIA_QUERY} from '../useReducedMotion';

interface MediaQueryList {
  matches: boolean;
  media: string;
  onchange: null;

  /** @deprecated */
  addListener(listener: MediaQueryListenerType): void;

  /** @deprecated */
  removeListener(listener: MediaQueryListenerType): void;
  addEventListener(type: 'change', listener: MediaQueryListenerType): void;
  removeEventListener(type: 'change', listener: MediaQueryListenerType): void;
  dispatchEvent(event: Event): boolean;
}
type MediaQueryListenerType = (
  thisList: MediaQueryList,
  ev: MediaQueryListEvent
) => void;
export default class MatchMedia {
  mediaQueries: Record<string, Array<MediaQueryListenerType>> = {};
  // @ts-expect-error TS2564
  mediaQueryList: MediaQueryList;
  userCurrentMediaQuery: string;

  constructor(initialQuery: string) {
    this.userCurrentMediaQuery = initialQuery;
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: (query: string): MediaQueryList => {
        this.mediaQueryList = {
          matches: query === this.userCurrentMediaQuery,
          media: query,
          onchange: null,
          addListener: listener => {
            this.addListener(query, listener);
          },
          removeListener: listener => {
            this.removeListener(query, listener);
          },
          addEventListener: (type, listener) => {
            if (type !== 'change') return;
            this.addListener(query, listener);
          },
          removeEventListener: (type, listener) => {
            if (type !== 'change') return;
            this.removeListener(query, listener);
          },
          dispatchEvent: () => true,
        };
        return this.mediaQueryList;
      },
    });
  }

  addListener(mediaQuery: string, listener: MediaQueryListenerType) {
    if (!this.mediaQueries[mediaQuery]) {
      this.mediaQueries[mediaQuery] = [];
    }

    const query = this.mediaQueries[mediaQuery];
    const listenerIndex = query.indexOf(listener);

    if (listenerIndex !== -1) return;
    query.push(listener);
  }

  removeListener(mediaQuery: string, listener: MediaQueryListenerType): void {
    if (!this.mediaQueries[mediaQuery]) return;
    const query = this.mediaQueries[mediaQuery];
    const listenerIndex = query.indexOf(listener);

    if (listenerIndex === -1) return;
    query.splice(listenerIndex, 1);
  }

  updateMediaQuery(mediaQuery: string): void {
    if (typeof mediaQuery !== 'string')
      throw new Error('Media Query must be a string');
    this.userCurrentMediaQuery = mediaQuery;
    const mqListEvent = {
      media: MEDIA_QUERY,
      matches: this.userCurrentMediaQuery === MEDIA_QUERY,
    };

    this.mediaQueries[MEDIA_QUERY].forEach(listener => {
      listener // $FlowFixMe
        // @ts-expect-error TS2554
        .call(this.mediaQueryList, mqListEvent);
    });
  }

  clear() {
    this.mediaQueries = {};
  }

  destroy(): void {
    this.clear();
    // @ts-expect-error TS2790
    delete window.matchMedia;
  }
}
