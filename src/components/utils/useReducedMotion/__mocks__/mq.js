// @flow strict

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
  thisd: MediaQueryList,
  ev: MediaQueryListEvent
) => void;

export default class MatchMedia {
  mediaQueries: {
    [key: string]: Array<MediaQueryListenerType>,
    ...
  } = {};

  mediaQueryList: MediaQueryList;

  currentMediaQuery: string;

  constructor() {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: (query: string): MediaQueryList => {
        this.mediaQueryList = {
          matches: query === this.currentMediaQuery,
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
          dispatchEvent: jest.fn(),
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

  useMediaQuery(mediaQuery: string): void {
    if (typeof mediaQuery !== 'string')
      throw new Error('Media Query must be a string');

    this.currentMediaQuery = mediaQuery;

    if (!this.mediaQueries[mediaQuery]) return;

    const mqListEvent = {
      matches: true,
      media: mediaQuery,
    };

    this.mediaQueries[mediaQuery].forEach(listener => {
      listener.call(this.mediaQueryList, mqListEvent);
    });
  }

  getMediaQueries(): Array<string> {
    return Object.keys(this.mediaQueries);
  }

  clear() {
    this.mediaQueries = {};
  }

  destroy(): void {
    this.clear();
    delete window.matchMedia;
  }
}
