import * as Card from './Card.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Card);
const {includeStories, ...meta} = Card.default;
export default meta;
