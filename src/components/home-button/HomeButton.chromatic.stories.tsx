import * as HomeButton from './HomeButton.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(HomeButton);
const {includeStories, ...meta} = HomeButton.default;
export default meta;
