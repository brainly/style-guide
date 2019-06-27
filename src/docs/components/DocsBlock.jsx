// @flow

import React from 'react';
import type {Node} from 'react';
import InfoBlock from './docsBlock/InfoBlock';
import ContentBlock from './docsBlock/ContentBlock';

type PropsType = {
  additionalInfo?: Node,
  info?: Node,
  children?: Node,
  multiContent?: Array<Node>,
  toBottom?: boolean,
  centered?: boolean
};

const DocsBlock = ({info, additionalInfo, children, multiContent = [], toBottom, centered}: PropsType) => (
  <section className="docs-block">
    <InfoBlock info={info} additionalInfo={additionalInfo} />
    <ContentBlock toBottom={toBottom} centered={centered}>{children}</ContentBlock>
    {multiContent.map((extraChild, i) =>
      <ContentBlock toBottom={toBottom} centered={centered} key={i}>{extraChild}</ContentBlock>
    )}
  </section>
);

export default DocsBlock;
export {InfoBlock, ContentBlock};
