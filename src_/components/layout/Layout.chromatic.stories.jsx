import * as Layout from './Layout.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Layout);

const {includeStories, ...meta} = Layout.default;

export default meta;
