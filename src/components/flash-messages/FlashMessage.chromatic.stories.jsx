import * as FlashMessage from './FlashMessage.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(FlashMessage);

export default FlashMessage.default;
