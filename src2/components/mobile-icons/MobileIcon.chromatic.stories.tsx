import * as MobileIcon from './MobileIcon.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(MobileIcon);
const {includeStories, ...meta} = MobileIcon.default;
export default meta;