import * as Spinner from './Spinner.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Spinner);
const {includeStories, ...meta} = Spinner.default;
export default meta;
