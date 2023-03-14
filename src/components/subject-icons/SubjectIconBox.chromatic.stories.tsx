import * as SubjectIconBox from './SubjectIconBox.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(SubjectIconBox);
const {includeStories, ...meta} = SubjectIconBox.default;

export default meta;
