import * as Card from './Card.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Card);
const {includeStories, ...meta} = Card.default;

export default meta;
