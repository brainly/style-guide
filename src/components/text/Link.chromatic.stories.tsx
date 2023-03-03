import * as Link from './Link.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Link, 'colors');
const {includeStories, ...meta} = Link.default;

export default meta;
