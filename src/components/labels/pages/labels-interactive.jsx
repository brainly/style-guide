import React from 'react';
import Label, {SIZE, ICON_TYPE, ICON_COLOR} from '../Label';
import Checkbox from 'form-elements/Checkbox';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Labels = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'iconType',
      values: ICON_TYPE
    },
    {
      name: 'iconColor',
      values: ICON_COLOR
    },
    {
      name: 'text',
      values: String
    },
    {
      name: 'number',
      values: Number
    },
    {
      name: 'secondary',
      values: Boolean
    },
    {
      name: 'emphasised',
      values: Boolean
    },
    {
      name: 'unstyled',
      values: Boolean
    },
    {
      name: 'elementsToTop',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Label text="Search" iconType={ICON_TYPE.SEARCH} iconColor={ICON_COLOR.GRAY} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Label
          text="Comment"
          number={21}
          size={SIZE.LARGE}
          iconType={ICON_TYPE.COMMENT}
          iconColor={ICON_COLOR.LAVENDER}
          emphasised
          secondary
        />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Label
          size={SIZE.LARGE}
          text="Check me!"
          htmlFor="checkbox-1"
          iconContent={
            <Checkbox id="checkbox-1" />
          }
        />
      </DocsActiveBlock>
    </div>
  );
};

export default Labels;
