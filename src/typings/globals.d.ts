declare module '*.png';

interface Window {
  sgTransitionDebug:
    | {
        speed: number;
        outlines: boolean;
      }
    | undefined;
}
