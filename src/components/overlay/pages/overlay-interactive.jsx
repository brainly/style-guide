import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Overlay from '../Overlay';
import Text from 'text/Text';

const Overlays = () => {
  const settings = [
    {
      name: 'partial',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Overlay>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </Overlay>
      </DocsActiveBlock>
    </div>
  );
};

export default Overlays;
