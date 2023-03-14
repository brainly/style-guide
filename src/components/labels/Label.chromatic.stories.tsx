import * as Label from './Label.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Label);
const {includeStories, ...meta} = Label.default;

export default meta;
