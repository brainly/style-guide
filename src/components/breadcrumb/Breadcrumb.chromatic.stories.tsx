import * as Breadcrumb from './Breadcrumb.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Breadcrumb);
const {includeStories, ...meta} = Breadcrumb.default;

export default meta;
