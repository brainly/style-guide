import * as Textarea from './Textarea.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Textarea, 'stylesAndStates');
const {includeStories, ...meta} = Textarea.default;

export default meta;
