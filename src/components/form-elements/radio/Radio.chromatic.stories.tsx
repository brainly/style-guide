import * as Radio from './Radio.stories.mdx';
import {generateChromaticStory} from '../../../chromatic/utils';

export const Default = generateChromaticStory(Radio);
const {includeStories, ...meta} = Radio.default;

export default meta;
