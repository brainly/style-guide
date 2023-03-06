import * as Header from './Header.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Header);
const {includeStories, ...meta} = Header.default;

export default meta;
