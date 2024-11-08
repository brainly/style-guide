import * as React from 'react';
import * as SelectMenuStories from './SelectMenu.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import SelectMenu, {SIZE as SELECT_SIZE} from './SelectMenu';

import Text from '../text/Text';
import Flex from '../flex/Flex';

const onOptionChange = () => null;

// @ts-expect-error TS7006
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

// @ts-expect-error TS7006
export const DifferentPopupLenghts = args => {
  return (
    <Flex direction="row" style={{gap: '40px'}}>
      <div style={{width: '320px'}}>
        <div style={{width: '230px'}}>
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

// @ts-expect-error TS7006
const Hovers = args => {
  const types = [{name: 'default'}, {disabled: true, name: 'disabled'}];

  return (
    <Flex direction="column" style={{gap: '10px'}}>
      {types.map(t => (
        <Flex
          key={t.name}
          style={{width: '500px', padding: '10px'}}
          justifyContent="space-between"
          alignItems="center"
        >
          {t.name}
          <SelectMenu {...args} {...t} onOptionChange={onOptionChange} />
        </Flex>
      ))}
      {types.map(t => (
        <div key={t.name} style={{background: 'black'}}>
          <Flex
            style={{width: '500px', padding: '10px'}}
            justifyContent="space-between"
            alignItems="center"
          >
            <span style={{color: 'white'}}>White: {t.name}</span>
            <SelectMenu
              {...args}
              {...t}
              color="white"
              onOptionChange={onOptionChange}
            />
          </Flex>
        </div>
      ))}
    </Flex>
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
