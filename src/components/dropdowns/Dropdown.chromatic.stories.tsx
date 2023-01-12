import * as Dropdown from './Dropdown.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Dropdown);
const {includeStories, ...meta} = Dropdown.default;

export default meta;
