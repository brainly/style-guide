import React from 'react';
import DocsBlock from 'components/DocsBlock';
import TextBit, {TEXT_BIT_SIZE, TEXT_BIT_COLOR} from '../TextBit';

const text = "We've got your back!";

const textBitSizesMap = [
  {
    type: 'small',
    fontSize: '24px',
  },
  {
    type: 'normal',
    fontSize: '40px',
  },
  {
    type: 'large',
    fontSize: '56px',
  },
  {
    type: 'xlarge',
    fontSize: '80px',
  },
];

function getValues(object, addUndefined = true) {
  return addUndefined
    ? [undefined, ...Object.values(object)]
    : Object.values(object);
}

const TextBitExamples = () => {
  const sizesVariants = [];
  const colorsVariants = [];

  getValues(TEXT_BIT_SIZE, false).forEach(size => {
    let itemSize;

    textBitSizesMap.map(item =>
      item.type === size ? (itemSize = `${item.fontSize}`) : null
    );

    sizesVariants.push(
      <TextBit key="size" size={size} color={TEXT_BIT_COLOR.PEACH_PRIMARY}>
        {text} - {size} - {itemSize}
      </TextBit>
    );
  });

  getValues(TEXT_BIT_COLOR, false).forEach(color => {
    colorsVariants.push(
      <TextBit key="color" size={TEXT_BIT_SIZE.NORMAL} color={color}>
        {text} - {color}
      </TextBit>
    );
  });

  return (
    <div>
      <DocsBlock info="Text bit sizes variants">{sizesVariants}</DocsBlock>
      <DocsBlock info="Text bit color variants">{colorsVariants}</DocsBlock>
    </div>
  );
};

export default TextBitExamples;
