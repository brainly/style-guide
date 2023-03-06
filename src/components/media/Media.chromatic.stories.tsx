import * as Media from './Media.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Media);

const {includeStories, ...meta} = Media.default;

export default meta;
