import * as Button from './Button.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Button, 'variants');
const {includeStories, ...meta} = Button.default;

export default meta;
