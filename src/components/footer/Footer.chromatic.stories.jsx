import * as Footer from './Footer.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Footer);
const {includeStories, ...meta} = Footer.default;

export default meta;
