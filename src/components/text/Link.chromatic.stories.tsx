import * as Link from './Link.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Link, {
  storiesToHover: ['colors'],
});
const {includeStories, ...meta} = Link.default;

export default meta;
