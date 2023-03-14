import * as Spinner from './Spinner.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Spinner);
const {includeStories, ...meta} = Spinner.default;

export default meta;
