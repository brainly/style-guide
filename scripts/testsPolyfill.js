import 'mutationobserver-shim';

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
