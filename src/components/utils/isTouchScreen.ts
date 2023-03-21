export default function isTouchScreen() {
  return !!(typeof window !== 'undefined' && 'ontouchstart' in window);
}
