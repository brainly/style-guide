import * as Rating from './Rating.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Rating);
const {includeStories, ...meta} = Rating.default;

export default meta;
