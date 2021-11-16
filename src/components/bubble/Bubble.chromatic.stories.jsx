import * as Bubble from './Bubble.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Bubble);

export default Bubble.default;
