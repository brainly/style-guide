import * as Accordion from './Accordion.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Accordion);

const {includeStories, ...meta} = Accordion.default;

export default meta;
