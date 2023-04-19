import * as UnstyledButton from './UnstyledButton.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(UnstyledButton);
const {includeStories, ...meta} = UnstyledButton.default;

export default meta;
