import * as Headline from './Headline.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Headline);

export default Headline.default;
