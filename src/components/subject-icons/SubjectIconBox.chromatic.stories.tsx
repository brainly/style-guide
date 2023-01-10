import * as SubjectIconBox from './SubjectIconBox.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(SubjectIconBox);
const {includeStories, ...meta} = SubjectIconBox.default;
export default meta;
