import * as SubjectIcon from './SubjectIcon.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(SubjectIcon);
const {includeStories, ...meta} = SubjectIcon.default;

export default meta;
