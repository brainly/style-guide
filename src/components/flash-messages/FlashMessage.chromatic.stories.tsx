import * as FlashMessage from './FlashMessage.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(FlashMessage);
const {includeStories, ...meta} = FlashMessage.default;

export default meta;
