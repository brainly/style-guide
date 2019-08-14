// @flow

import React from 'react';
import type {Node} from 'react';
import cx from 'classnames';
import InfoBlock from './docsBlock/InfoBlock';
import ContentBlock from './docsBlock/ContentBlock';

type PropsType = {
  additionalInfo?: Node,
  info?: Node,
  children?: Node,
  multiContent?: Array<Node>,
  evenColumns?: boolean,
  fullWidth?: boolean,
  toBottom?: boolean,
  centered?: boolean,
  spacedBetween?: boolean,
  justified?: boolean,
  ...
};

const DocsBlock = ({
  info,
  evenColumns,
  fullWidth,
  additionalInfo,
  children,
  multiContent = [],
  toBottom,
  centered,
  spacedBetween,
  justified,
}: PropsType) => (
  <section
    className={cx('docs-block', {
      'docs-block--even-columns': evenColumns,
      'docs-block--full-width': fullWidth,
    })}
  >
    <InfoBlock info={info} additionalInfo={additionalInfo} />
    <ContentBlock
      toBottom={toBottom}
      centered={centered}
      spacedBetween={spacedBetween}
      justified={justified}
    >
      {children}
    </ContentBlock>
    {multiContent.map((extraChild, i) => (
      <ContentBlock
        toBottom={toBottom}
        centered={centered}
        spacedBetween={spacedBetween}
        justified={justified}
        key={i}
      >
        {extraChild}
      </ContentBlock>
    ))}
  </section>
);

export default DocsBlock;
export {InfoBlock, ContentBlock};
