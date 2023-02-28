import * as TopLayer from './TopLayer.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

const {fill, ...restStories} = TopLayer;

export const Default = mergeStories(restStories);
const {includeStories, ...meta} = TopLayer.default;

export default meta;
export {fill};
