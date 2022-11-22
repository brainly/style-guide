import * as IconAsButton from './IconAsButton.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(IconAsButton);

const {includeStories, ...meta} = IconAsButton.default;

export default meta;
