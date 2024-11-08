import * as React from 'react';
import * as CheckboxStories from './Checkbox.stories.mdx';
import {generateChromaticStory} from '../../../chromatic/utils';
import Checkbox from './Checkbox';

// @ts-expect-error TS7006
const Hovers = args => {
  const types = [
    {name: 'unchecked'},
    {name: 'checked', checked: true},
    {disabled: true, name: 'disabled'},
    {invalid: true, name: 'error'},
  ];

  return (
    <div>
      {types.map(t => (
        <Checkbox {...args} {...t} key={t.name}>
          Dark: {t.name}
        </Checkbox>
      ))}
      <div style={{background: 'black'}}>
        {types.map(t => (
          <Checkbox {...args} {...t} key={t.name} color="light">
            Light: {t.name}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export const Default = generateChromaticStory(CheckboxStories, {
  storiesToHover: [Hovers],
});
const {includeStories, ...meta} = CheckboxStories.default;

export default meta;
