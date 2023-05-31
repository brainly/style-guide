import * as Input from './Input.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Input, {
  storiesToHover: ['stylesAndTypes'],
});
const {includeStories, ...meta} = Input.default;

export default meta;
