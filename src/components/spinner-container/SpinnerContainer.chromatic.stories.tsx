import * as SpinnerContainer from './SpinnerContainer.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(SpinnerContainer);
const {includeStories, ...meta} = SpinnerContainer.default;
export default meta;
