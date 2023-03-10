import * as Text from './Text.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Text);
const {includeStories, ...meta} = Text.default;

export default meta;
