import React from 'react';
import Avatar, {sizes, iconTypes} from '../avatar';
import DocsBlock, {contrastBlockCssClass, contrastBlockBottomWidthCssClass} from '../../../docs/DocsBlock';

const Avatars = () =>
  <div>
    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(sizes).map(
        size => <Avatar key={size} size={size} iconType={iconTypes.friends}/>
      )}
    </DocsBlock>

    <DocsBlock info='Default with border' toBottom={true}>
      <div className={`${contrastBlockCssClass} ${contrastBlockBottomWidthCssClass}`}>
        {Object.values(sizes).map(
          size => <Avatar key={size} size={size} iconType={iconTypes.friends} border={true}/>
        )}
      </div>
    </DocsBlock>

    <DocsBlock info='Default avatars' toBottom={true}>
      {Object.values(sizes).map(
        size => <Avatar key={size} size={size} imgSrc="https://source.unsplash.com/240x240/?man"/>
      )}
    </DocsBlock>

    <DocsBlock info='Default with border' toBottom={true}>
      <div className={`${contrastBlockCssClass} ${contrastBlockBottomWidthCssClass}`}>
        {Object.values(sizes).map(
          size => <Avatar key={size} size={size} border={true} imgSrc="https://source.unsplash.com/240x240/?man"/>
        )}
      </div>
    </DocsBlock>
  </div>;


export default Avatars;
