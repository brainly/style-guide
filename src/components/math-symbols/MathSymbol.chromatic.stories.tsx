import * as MathSymbol from './MathSymbol.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(MathSymbol);
const {includeStories, ...meta} = MathSymbol.default;

export default meta;
