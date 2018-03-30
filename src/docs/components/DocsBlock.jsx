import React from 'react';
import PropTypes from 'prop-types';
import InfoBlock from './docsBlock/InfoBlock';
import ContentBlock from './docsBlock/ContentBlock';

const DocsBlock = ({info, additionalInfo, children, multiContent = [], toBottom, centered}) => (
  <section className="docs-block">
    <InfoBlock info={info} additionalInfo={additionalInfo} />
    <ContentBlock toBottom={toBottom} centered={centered}>{children}</ContentBlock>
    {multiContent.map((extraChild, i) =>
      <ContentBlock toBottom={toBottom} centered={centered} key={i}>{extraChild}</ContentBlock>
    )}
  </section>
);

DocsBlock.propTypes = {
  toBottom: PropTypes.bool,
  centered: PropTypes.bool,
  multiContent: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node,
  additionalInfo: PropTypes.node,
  info: PropTypes.node
};

export default DocsBlock;
export {InfoBlock, ContentBlock};
