import * as Select from './Select.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Select);

const {includeStories, ...meta} = Select.default;

export default meta;
