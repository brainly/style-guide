import * as TopLayer from './TopLayer.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(TopLayer);

const {includeStories, ...meta} = TopLayer.default;

export default meta;
