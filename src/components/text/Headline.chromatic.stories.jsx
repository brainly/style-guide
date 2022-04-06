import * as Headline from './Headline.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Headline);

const {includeStories, ...meta} = Headline.default;

export default meta;
