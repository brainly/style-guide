import * as Checkbox from './Checkbox.stories.mdx';
import {generateChromaticStory} from '../../../chromatic/utils';

export const Default = generateChromaticStory(Checkbox);
const {includeStories, ...meta} = Checkbox.default;

export default meta;
