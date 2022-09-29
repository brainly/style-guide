import * as List from './List.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(List);

const {includeStories, ...meta} = List.default;

export default meta;
