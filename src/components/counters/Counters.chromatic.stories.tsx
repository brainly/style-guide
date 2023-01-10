import * as Counters from './Counters.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Counters);
const {includeStories, ...meta} = Counters.default;
export default meta;
