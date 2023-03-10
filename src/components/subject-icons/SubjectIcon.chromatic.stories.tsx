import * as SubjectIcon from './SubjectIcon.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(SubjectIcon);
const {includeStories, ...meta} = SubjectIcon.default;

export default meta;
