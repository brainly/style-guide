import * as Search from './Search.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Search);
const {includeStories, ...meta} = Search.default;
export default meta;
