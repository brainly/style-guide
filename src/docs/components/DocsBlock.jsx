// @flow

import * as React from 'react';
import cx from 'classnames';
import InfoBlock from './docsBlock/InfoBlock';
import ContentBlock from './docsBlock/ContentBlock';

type PropsType = {
  additionalInfo?: React.Node,
  info?: React.Node,
  children?: React.Node,
  multiContent?: Array<React.Node>,
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
  ...props
}: PropsType) => (
  <section
    {...props}
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
