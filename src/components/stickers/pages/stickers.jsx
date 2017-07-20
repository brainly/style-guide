import React from 'react';
import DocsBlock from 'DocsBlock';
import ContrastBox from 'ContrastBox';
import Sticker, {TYPE} from '../Sticker';

const Stickers = () =>
  <DocsBlock info="Default">
    <ContrastBox>
      {Object.values(TYPE).map(type =>
        <Sticker key={type} type={type}/>
      )}
    </ContrastBox>
  </DocsBlock>;

export default Stickers;
