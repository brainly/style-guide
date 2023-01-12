import * as Icon from './Icon.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Icon);
const {includeStories, ...meta} = Icon.default;

export default meta;
