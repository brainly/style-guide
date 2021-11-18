import * as Card from './Card.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Card);

export default Card.default;
