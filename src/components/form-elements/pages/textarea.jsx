import React from 'react';
import Textarea, {SIZE} from '../Textarea';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const voidFunction = () => undefined;

const textareas = () =>
  <div>
    <DocsBlock info="Default">
      <Textarea placeholder="placeholder" />
    </DocsBlock>
    <DocsBlock info="Short">
      <Textarea placeholder="placeholder" size={SIZE.SHORT} />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Textarea placeholder="placeholder" fullWidth />
    </DocsBlock>
    <DocsBlock info="Valid">
      <Textarea placeholder="placeholder" valid value="This is valid example"
        onChange={voidFunction} />
    </DocsBlock>
    <DocsBlock info="Invalid">
      <Textarea placeholder="placeholder" invalid value="This is invalid example"
        onChange={voidFunction} />
    </DocsBlock>
    <DocsBlock info="Tall, XTall" multiContent={[
      <Textarea key={1} placeholder="placeholder" size={SIZE.TALL} />,
      <Textarea key={2} placeholder="placeholder" size={SIZE.XTALL} />
    ]} />

    <DocsBlock info="Simple">
      <ContrastBox>
        <Textarea placeholder="placeholder" simple />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Auto height">
      <Textarea placeholder="placeholder" autoHeight />
    </DocsBlock>
  </div>;

export default textareas;
