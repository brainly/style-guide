import not from 'not';
import falsy from 'is-falsy';

export default (...mods) => {
  return mods.filter(not(falsy)).join(' ');
};
