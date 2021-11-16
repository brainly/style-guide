import * as Counters from './Counters.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Counters);

export default Counters.default;
