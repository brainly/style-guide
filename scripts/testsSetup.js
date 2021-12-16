import './testsPolyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.STYLE_GUIDE_ENV = 'test';

Enzyme.configure({adapter: new Adapter()});
