import * as SpinnerContainer from './SpinnerContainer.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(SpinnerContainer);
const {includeStories, ...meta} = SpinnerContainer.default;

export default meta;
