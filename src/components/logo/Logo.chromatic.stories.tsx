import * as Logo from './Logo.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Logo);
const {includeStories, ...meta} = Logo.default;
export default meta;