import React from 'react';
import Textarea, {SIZE} from '../Textarea';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const voidFunction = () => undefined;

const textareas = () => (
  <div>
    <DocsBlock
      info="Default and white"
      multiContent={[
        <Textarea key={1} placeholder="placeholder" />,
        <ContrastBox key={2}>
          <Textarea placeholder="placeholder" color="white" />
        </ContrastBox>,
      ]}
    />
    <DocsBlock
      info="Valid and invalid"
      multiContent={[
        <Textarea
          key={1}
          placeholder="placeholder"
          valid
          value="This is valid example"
          onChange={voidFunction}
        />,
        <Textarea
          key={2}
          placeholder="placeholder"
          invalid
          value="This is invalid example"
          onChange={voidFunction}
        />,
        <Textarea
          key={3}
          placeholder="placeholder"
          invalid
          errorMessage="This is an error message"
          onChange={voidFunction}
        />,
      ]}
    />
    <DocsBlock
      info="Tall, XTall, short"
      multiContent={[
        <Textarea key={1} placeholder="placeholder" size={SIZE.SHORT} />,
        <Textarea key={2} placeholder="placeholder" size={SIZE.TALL} />,
        <Textarea key={3} placeholder="placeholder" size={SIZE.XTALL} />,
      ]}
    />
    <DocsBlock
      info="Simple and auto height"
      multiContent={[
        <ContrastBox key={1}>
          <Textarea placeholder="placeholder" simple />
        </ContrastBox>,
        <Textarea key={2} placeholder="placeholder" autoHeight />,
      ]}
    />
    <DocsBlock info="Full width">
      <Textarea placeholder="placeholder" fullWidth />
    </DocsBlock>
  </div>
);

export default textareas;
