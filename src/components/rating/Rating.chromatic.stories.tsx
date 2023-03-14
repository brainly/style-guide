import * as Rating from './Rating.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Rating, {
  storiesToHover: ['active'],
});
const {includeStories, ...meta} = Rating.default;

export default meta;
