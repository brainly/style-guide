import * as OverlayedBox from './OverlayedBox.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(OverlayedBox);
const {includeStories, ...meta} = OverlayedBox.default;
export default meta;