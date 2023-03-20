import * as React from 'react';
import * as SelectMenuStories from './SelectMenu.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import SelectMenu, {SIZE as SELECT_SIZE} from './SelectMenu';

import Text from '../text/Text';
import Flex from '../flex/Flex';

const onOptionChange = () => null;

export const Sizes = args => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {Object.values(SELECT_SIZE).map(size => (
        <div style={{width: '200px'}} key={size}>
          <SelectMenu
            {...args}
            defaultExpanded
            size={size}
            onOptionChange={onOptionChange}
          />
        </div>
      ))}
    </div>
  );
};

export const DifferentPopupLenghts = args => {
  return (
    <Flex direction="row" style={{gap: '40px'}}>
      <div style={{width: '320px'}}>
        <div style={{width: '200px'}}>
          <Text>Popup with wide content:</Text>
          <SelectMenu
            options={[
              {
                value: 'tv',
                label: 'I heard about Brainly in a TV commercial',
                icon: {
                  name: 'physics',
                  isSubjectIcon: true,
                },
              },
              {
                value: 'fb',
                label: 'Social media',
                icon: {
                  name: 'history',
                  isSubjectIcon: true,
                },
              },
              {
                value: 'search',
                label: 'Search engine',
                icon: {
                  name: 'science',
                  isSubjectIcon: true,
                },
              },
            ]}
            defaultExpanded
            onOptionChange={onOptionChange}
          />
        </div>
      </div>
      <div style={{width: '320px'}}>
        <Text>
          Popup with short content that stretches to 70% of the input:
        </Text>
        <SelectMenu
          {...args}
          withIcons={false}
          defaultExpanded
          options={[
            {
              value: 'tv',
              label: '1',
            },
            {value: 'fb', label: '2'},
            {
              value: 'search',
              label: '3',
            },
          ]}
          placeholder="Select something from the list"
          onOptionChange={onOptionChange}
        />
      </div>
      <div>
        <Text>Popup with short content and short input:</Text>
        <div style={{width: '120px'}}>
          <SelectMenu
            {...args}
            withIcons={false}
            defaultExpanded
            options={[
              {
                value: 'tv',
                label: '1',
              },
              {value: 'fb', label: '2'},
              {
                value: 'search',
                label: '3',
              },
            ]}
            placeholder="Age"
            onOptionChange={onOptionChange}
          />
        </div>
      </div>
    </Flex>
  );
};

const Hovers = args => {
  const types = [{name: 'default'}, {disabled: true, name: 'disabled'}];

  return (
    <div>
      {types.map(t => (
        <div key={t.name}>
          {t.name}
          <SelectMenu {...args} {...t} onOptionChange={onOptionChange} />
        </div>
      ))}
      <div style={{background: 'black'}}>
        {types.map(t => (
          <div key={t.name}>
            <span style={{color: 'white'}}>White: {t.name}</span>
            <SelectMenu
              {...args}
              {...t}
              color="white"
              onOptionChange={onOptionChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Default = generateChromaticStory(
  {
    ...SelectMenuStories,
  },
  {
    storiesToHover: [Hovers],
  }
);
const {includeStories, ...meta} = SelectMenuStories.default;

export default meta;
