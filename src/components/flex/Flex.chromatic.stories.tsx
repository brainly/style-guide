import * as Flex from './Flex.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Flex);
const {includeStories, ...meta} = Flex.default;

export default meta;
