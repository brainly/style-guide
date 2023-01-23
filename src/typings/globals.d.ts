declare module '*.png';

interface Window {
  sgTransitionDebug:
    | {
        speed: number;
        outlines: boolean;
      }
    | undefined;
}

declare const STORYBOOK_ENV: string;
