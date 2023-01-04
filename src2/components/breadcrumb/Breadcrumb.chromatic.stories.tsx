import * as Breadcrumb from './Breadcrumb.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Breadcrumb);
const {includeStories, ...meta} = Breadcrumb.default;
export default meta;