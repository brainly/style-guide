import * as Layout from './Layout.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Layout);
const {includeStories, ...meta} = Layout.default;

export default meta;
