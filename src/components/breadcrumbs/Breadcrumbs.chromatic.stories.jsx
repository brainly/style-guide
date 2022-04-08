import * as Breadcrumbs from './Breadcrumbs.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Breadcrumbs);

const {includeStories, ...meta} = Breadcrumbs.default;

export default meta;
