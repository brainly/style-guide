import * as Media from './Media.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Media);

const {includeStories, ...meta} = Media.default;

export default meta;
