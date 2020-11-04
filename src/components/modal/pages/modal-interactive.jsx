import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Modal from '../Modal';
import {COLOR} from '../../overlay/Overlay';
import Text from 'text/Text';

const Overlays = () => {
  const settings = [
    {
      name: 'overlayColor',
      values: COLOR,
    },
    {
      name: 'size',
      values: {
        small: 'small',
        medium: 'medium',
        large: 'large',
        fluid: 'fluid',
      },
    },
    {
      name: 'lead',
      values: Boolean,
    },
    {
      name: 'fill',
      values: Boolean,
    },
    {
      name: 'withBugbox',
      values: Boolean,
    },
    {
      name: 'smallSpaced',
      values: Boolean,
    },
    {
      name: 'splashScreen',
      values: Boolean,
    },
    {
      name: 'limitedWidth',
      values: Boolean,
    },
    {
      name: 'row',
      values: Boolean,
    },
    {
      name: 'transparent',
      values: Boolean,
    },
    {
      name: 'noPadding',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Modal closeModal={() => undefined}>
          <Text>Modal window</Text>
        </Modal>
      </DocsActiveBlock>
    </div>
  );
};

export default Overlays;
