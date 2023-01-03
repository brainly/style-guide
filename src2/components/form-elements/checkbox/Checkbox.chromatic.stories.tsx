import * as Checkbox from "./Checkbox.stories.mdx";
import { mergeStories } from "../../../chromatic/utils";
export const Default = mergeStories(Checkbox);
const { includeStories, ...meta } = Checkbox.default;
export default meta;