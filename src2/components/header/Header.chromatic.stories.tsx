import * as Header from "./Header.stories.mdx";
import { mergeStories } from "../../chromatic/utils";
export const Default = mergeStories(Header);
const { includeStories, ...meta } = Header.default;
export default meta;