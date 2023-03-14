import * as RwdHelper from './RwdHelper.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(RwdHelper);
const {includeStories, ...meta} = RwdHelper.default;

export default meta;
