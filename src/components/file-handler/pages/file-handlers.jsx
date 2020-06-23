import React from 'react';

import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';
import FileHandler from '../FileHandler';

const closeCallback = () => undefined;

const FileHandlers = () => (
  <div>
    <Flex marginRight="l">
      <DocsBlock info="default">
        <FileHandler>text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="white">
        <ContrastBox smallPadding>
          <FileHandler color="white">text</FileHandler>
        </ContrastBox>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="with icon type">
        <FileHandler iconType="answer">text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="with on close">
        <FileHandler onClose={closeCallback}>text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="laoding">
        <FileHandler loading>text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="with thumbnailSrc">
        <FileHandler
          thumbnailSrc="https://source.unsplash.com/64x64/?bird"
          src="https://source.unsplash.com/64x64/?bird"
        >
          text
        </FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="with thumbnailSrc and on close">
        <FileHandler
          thumbnailSrc="https://source.unsplash.com/64x64/?bird"
          src="https://source.unsplash.com/64x64/?bird"
          onClose={closeCallback}
        >
          text
        </FileHandler>
      </DocsBlock>
    </Flex>
  </div>
);

export default FileHandlers;
