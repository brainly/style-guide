// @flow strict

type DebugOptionsType = {
  speed: number,
  outlines: boolean,
};

let batchTimeoutId = null;

export function getDebugOptions(): DebugOptionsType {
  const debug = window && window.sgTransitionDebug;

  const options = {
    speed: 1,
    outlines: false,
  };

  if (!debug || typeof debug !== 'object') {
    return options;
  }

  if (typeof debug.speed === 'number') {
    options.speed = debug.speed;
  }

  if (typeof debug.outlines === 'boolean') {
    options.outlines = debug.outlines;
  }

  const printWarning = () => {
    console.warn(
      `Transition debug mode is enabled with options: ${JSON.stringify(
        options
      )}`
    );
  };

  /**
   * The debugging mode applies to every Transition component,
   * therefore multiple references to this function should not
   * immediately print a warning.
   */
  clearTimeout(batchTimeoutId);
  batchTimeoutId = setTimeout(printWarning, 0);

  return options;
}
