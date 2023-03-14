import * as HomeButton from './HomeButton.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(HomeButton);
const {includeStories, ...meta} = HomeButton.default;

export default meta;
