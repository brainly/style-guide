import * as MathSymbol from './MathSymbol.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(MathSymbol);
const {includeStories, ...meta} = MathSymbol.default;

export default meta;
