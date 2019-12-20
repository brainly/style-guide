import React from 'react';
import DocsBlock from 'components/DocsBlock';
import LabelDeprecated, {ICON_COLOR, ICON_TYPE, SIZE} from '../LabelDeprecated';

const longText =
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
const multilineExample1 = `This is a multiline example with icon in the middle (default behaviur). ${longText}`;
const multilineExample2 = `This is a multiline example with icon aligned to top. ${longText}`;

const LabelsDeprecated = () => (
  <div>
    <DocsBlock info="Default">
      <LabelDeprecated
        text="Default label"
        iconType={ICON_TYPE.SEARCH}
        iconColor={ICON_COLOR.GRAY}
      />
      <LabelDeprecated
        text="Unstyled label"
        iconType={ICON_TYPE.PENCIL}
        iconColor={ICON_COLOR.LAVENDER}
        unstyled
      />
      <LabelDeprecated
        text="Mark as brainliest"
        iconType={ICON_TYPE.EXCELLENT}
        iconColor={ICON_COLOR.MUSTARD}
        emphasised
      />
      <LabelDeprecated
        text="Thank you"
        number={21}
        iconType={ICON_TYPE.HEART}
        iconColor={ICON_COLOR.PEACH}
        emphasised
        secondary
      />
      <div style={{maxWidth: `${250}px`}}>
        <LabelDeprecated
          text={multilineExample1}
          iconType={ICON_TYPE.SEARCH}
          iconColor={ICON_COLOR.GRAY}
        />
        <br />
        <LabelDeprecated
          text={multilineExample2}
          iconType={ICON_TYPE.SEARCH}
          iconColor={ICON_COLOR.GRAY}
          elementsToTop
        />
      </div>
    </DocsBlock>
    <DocsBlock info="Small">
      <LabelDeprecated
        text="Mark as brainliest"
        size={SIZE.SMALL}
        iconType={ICON_TYPE.EXCELLENT}
        iconColor={ICON_COLOR.MUSTARD}
        emphasised
      />
      <LabelDeprecated
        text="Thank you"
        number={21}
        size={SIZE.SMALL}
        iconType={ICON_TYPE.HEART}
        iconColor={ICON_COLOR.PEACH}
        emphasised
        secondary
      />
    </DocsBlock>
    <DocsBlock info="Large">
      <LabelDeprecated
        text="Mark as brainliest"
        size={SIZE.LARGE}
        iconType={ICON_TYPE.EXCELLENT}
        iconColor={ICON_COLOR.MUSTARD}
      />
      <LabelDeprecated
        text="Thank you"
        number={21}
        size={SIZE.LARGE}
        iconType={ICON_TYPE.HEART}
        iconColor={ICON_COLOR.PEACH}
        secondary
      />
    </DocsBlock>
  </div>
);

export default LabelsDeprecated;
