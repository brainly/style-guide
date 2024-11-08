import * as React from 'react';
import * as RadioStories from './Radio.stories.mdx';
import {generateChromaticStory} from '../../../chromatic/utils';
import Radio from './Radio';

// @ts-expect-error TS7006
const Hovers = args => {
  const types = [
    {name: 'unchecked', checked: false},
    {name: 'checked', checked: true},
    {disabled: true, name: 'disabled', checked: false},
    {invalid: true, name: 'error', checked: false},
  ];

  return (
    <div>
      {types.map(t => (
        <Radio {...args} {...t} key={t.name} name="dark">
          Dark: {t.name}
        </Radio>
      ))}
      <div style={{background: 'black'}}>
        {types.map(t => (
          <Radio {...args} {...t} key={t.name} color="light" name="light">
            Light: {t.name}
          </Radio>
        ))}
      </div>
    </div>
  );
};

export const Default = generateChromaticStory(RadioStories, {
  storiesToHover: [Hovers],
});
const {includeStories, ...meta} = RadioStories.default;

export default meta;
