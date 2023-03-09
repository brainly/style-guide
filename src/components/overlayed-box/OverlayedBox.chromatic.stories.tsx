import * as OverlayedBox from './OverlayedBox.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(OverlayedBox);
const {includeStories, ...meta} = OverlayedBox.default;

export default meta;
