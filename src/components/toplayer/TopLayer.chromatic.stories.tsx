import * as TopLayer from './TopLayer.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

const {fill, ...restStories} = TopLayer;

export const Default = generateChromaticStory(restStories);
const {includeStories, ...meta} = TopLayer.default;

export default meta;
export {fill};
