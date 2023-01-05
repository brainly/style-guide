import * as Flex from './Flex.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Flex);

const {includeStories, ...meta} = Flex.default;

export default meta;
