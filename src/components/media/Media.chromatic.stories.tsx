import * as Media from './Media.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Media, 'clickable');

const {includeStories, ...meta} = Media.default;

export default meta;
