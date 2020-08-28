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
      <DocsBlock info="mono">
        <ContrastBox smallPadding>
          <FileHandler color="mono">text</FileHandler>
        </ContrastBox>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="icon">
        <FileHandler iconType="answer">text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="close">
        <FileHandler onClose={closeCallback}>text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="loading">
        <FileHandler loading>text</FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="thumbnail">
        <FileHandler
          thumbnailSrc="https://source.unsplash.com/64x64/?bird"
          src="https://source.unsplash.com/64x64/?bird"
        >
          text
        </FileHandler>
      </DocsBlock>
    </Flex>
    <Flex marginRight="l">
      <DocsBlock info="thumbnail close">
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
