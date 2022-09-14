import * as Overlay from './Overlay.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Overlay);

const {includeStories, ...meta} = Overlay.default;

export default meta;
