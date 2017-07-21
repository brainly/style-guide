import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Label, {ICON_COLOR, ICON_TYPE, SIZE} from '../Label';

const longText = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
const multilineExample1 = 'This is a multiline example with icon in the middle (default behaviur). ' + longText;
const multilineExample2 = 'This is a multiline example with icon aligned to top. ' + longText;

const Labels = () =>
  <div>
    <DocsBlock info="Default">
      <Label text="Default label" iconType={ICON_TYPE.SEARCH} iconColor={ICON_COLOR.GRAY}/>
      <Label text="Unstyled label" iconType={ICON_TYPE.PENCIL} iconColor={ICON_COLOR.LAVENDER} unstyled={true}/>
      <Label text="Mark as brainliest" iconType={ICON_TYPE.EXCELLENT} iconColor={ICON_COLOR.MUSTARD} emphasised={true}/>
      <Label text="Comment" number={21} iconType={ICON_TYPE.COMMENT} iconColor={ICON_COLOR.LAVENDER}
        emphasised={true} secondary={true}/>
      <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART} iconColor={ICON_COLOR.PEACH} emphasised={true}
        secondary={true}/>
      <div style={{maxWidth: 250 + 'px'}}>
        <Label text={multilineExample1} iconType={ICON_TYPE.SEARCH} iconColor={ICON_COLOR.GRAY}/>
        <br />
        <Label text={multilineExample2} iconType={ICON_TYPE.SEARCH} iconColor={ICON_COLOR.GRAY} elementsToTop={true}/>
      </div>
    </DocsBlock>
    <DocsBlock info="Small">
      <Label text="Mark as brainliest" size={SIZE.SMALL} iconType={ICON_TYPE.EXCELLENT}
        iconColor={ICON_COLOR.MUSTARD} emphasised={true}/>
      <Label text="Comment" number={21} size={SIZE.SMALL} iconType={ICON_TYPE.COMMENT}
        iconColor={ICON_COLOR.LAVENDER} emphasised={true} secondary={true}/>
      <Label text="Thank you" number={21} size={SIZE.SMALL} iconType={ICON_TYPE.HEART}
        iconColor={ICON_COLOR.PEACH} emphasised={true} secondary={true}/>
    </DocsBlock>
    <DocsBlock info="Large">
      <Label text="Mark as brainliest" size={SIZE.LARGE} iconType={ICON_TYPE.EXCELLENT}
        iconColor={ICON_COLOR.MUSTARD}/>
      <Label text="Comment" number={21} size={SIZE.LARGE} iconType={ICON_TYPE.COMMENT}
        iconColor={ICON_COLOR.LAVENDER} secondary={true}/>
      <Label text="Thank you" number={21} size={SIZE.LARGE} iconType={ICON_TYPE.HEART}
        iconColor={ICON_COLOR.PEACH} secondary={true}/>
    </DocsBlock>
  </div>;

export default Labels;
