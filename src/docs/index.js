import React from 'react';
import MintButton from 'components/mint-button';
import DocsEntry from './docs-entry';
import DocsBlock from './docs-block';

export default (props) => {
  return <DocsEntry title="Buttons">
    <DocsBlock title="Primary Buttons">
      <MintButton>Primary</MintButton>
    </DocsBlock>
    <DocsBlock title="Secondary Buttons">
      <MintButton size='small'>Secondary</MintButton>
    </DocsBlock>
  </DocsEntry>
}
