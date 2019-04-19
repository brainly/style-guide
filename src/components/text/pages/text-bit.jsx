import React from 'react';
import DocsBlock from 'components/DocsBlock';
import TextBit, {TEXT_BIT_SIZE, TEXT_BIT_COLOR} from '../TextBit';

const text = 'We\'ve got your back!';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextBitExamples = () => {
  const sizesVariants = [];
  const colorsVariants = [];

  getValues(TEXT_BIT_SIZE, false).forEach(size => {
    sizesVariants.push(
      <TextBit size={size} color={TEXT_BIT_COLOR.PEACH_PRIMARY}>
        {text} - {size}
      </TextBit>
    );
  });

  getValues(TEXT_BIT_COLOR, false).forEach(color => {
    colorsVariants.push(
      <TextBit size={TEXT_BIT_SIZE.NORMAL} color={color}>
        {text} - {color}
      </TextBit>
    );
  });

  return (
    <DocsBlock info="Default">
      {sizesVariants}
      {colorsVariants}
    </DocsBlock>
  );
};

export default TextBitExamples;
