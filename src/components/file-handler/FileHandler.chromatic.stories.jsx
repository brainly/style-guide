import * as FileHandler from './FileHandler.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(FileHandler);

export default FileHandler.default;
