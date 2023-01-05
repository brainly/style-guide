import * as RadioGroup from './RadioGroup.stories.mdx';
import {mergeStories} from '../../../chromatic/utils';

export const Default = mergeStories(RadioGroup);

const {includeStories, ...meta} = RadioGroup.default;

export default meta;
