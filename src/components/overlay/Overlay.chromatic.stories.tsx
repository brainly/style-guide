import * as Overlay from './Overlay.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
const {play, ...OverlayStories} = Overlay;
export const Default = mergeStories(OverlayStories);
Default.play = play;
const {includeStories, ...meta} = Overlay.default;
export default meta;
