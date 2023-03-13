import * as Select from './Select.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Select, {
  storiesToHover: ['stylesAndStates'],
});
const {includeStories, ...meta} = Select.default;

export default meta;
