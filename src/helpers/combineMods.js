import not from 'not';
import falsy from 'is-falsy';

export default (...mods) => mods.filter(not(falsy)).join(' ');
