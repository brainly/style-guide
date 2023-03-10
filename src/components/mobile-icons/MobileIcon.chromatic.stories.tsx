import * as MobileIcon from './MobileIcon.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(MobileIcon);
const {includeStories, ...meta} = MobileIcon.default;

export default meta;
