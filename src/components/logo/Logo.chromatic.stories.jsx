import * as React from 'react';
import * as Logo from './Logo.stories.jsx';
import {mergeStories} from '../../chromatic/utils';

const TestStory = () => (
  <img
    className="sg-logo__image"
    src="https://styleguide.brainly.com/images/bug_box@2x-9b0cc7d970.png"
  />
);

export const Default = mergeStories({...Logo, TestStory});

export default Logo.default;
