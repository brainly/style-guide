import * as ButtonLite from './ButtonLite.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(ButtonLite, {
  storiesToHover: ['variants'],
});
const {includeStories, ...meta} = ButtonLite.default;

export default meta;
