import * as Avatar from './Avatar.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Avatar);

const {includeStories, ...meta} = Avatar.default;

export default meta;
