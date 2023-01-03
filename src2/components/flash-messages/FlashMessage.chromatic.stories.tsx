import * as FlashMessage from "./FlashMessage.stories.mdx";
import { mergeStories } from "../../chromatic/utils";
export const Default = mergeStories(FlashMessage);
const { includeStories, ...meta } = FlashMessage.default;
export default meta;