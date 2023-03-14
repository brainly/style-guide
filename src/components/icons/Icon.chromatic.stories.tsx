import * as Icon from './Icon.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Icon);
const {includeStories, ...meta} = Icon.default;

export default meta;
