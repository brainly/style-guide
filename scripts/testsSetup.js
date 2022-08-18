import './testsPolyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@vanilla-extract/css/disableRuntimeStyles';

Enzyme.configure({adapter: new Adapter()});
