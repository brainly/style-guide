import React from 'react';
import './main.scss';
import MintButton from 'components/mint-button-primary';
import MintButtonSecondary from 'components/mint-button-secondary';
import { availableTypes as btnTypes } from 'components/mint-button-primary';
import DocsEntry from '../docs-entry';
import DocsBlock from '../docs-block';

function renderAll(modifers, attr, Elt) {
  return Object.keys(modifers).map((mod) => {
    let attrs = {
      [attr]: mod
    };

    return <Elt {...attrs }>Example</Elt>;
  });

}

export default (props) => {
  return <DocsEntry title="Buttons">
    <DocsBlock title="Primary Buttons">

      <MintButton>Primary</MintButton>
      { renderAll(btnTypes, 'type', MintButton) }

    </DocsBlock>
    <DocsBlock title="Secondary Buttons">

      <MintButtonSecondary>Secondary</MintButtonSecondary>

    </DocsBlock>
  </DocsEntry>
}
