import React from 'react';
import './main.scss';
import MintButton from 'components/mint-button-primary';
import MintButtonSecondary from 'components/mint-button-secondary';
import FacebookButton from 'components/mint-fb-button';
import { availableTypes as btnTypes, availableWidth as width } from 'components/mint-button-primary';
import DocsEntry from '../docs-entry';
import DocsBlock from '../docs-block';

function renderAll(modifers, attr, Elt) {
  return Object.keys(modifers).map((mod, key) => {
    let attrs = {
      [attr]: mod,
      key: key
    };

    return <Elt {...attrs }>Example</Elt>;
  });

}

export default React.createClass({
  render () {
    return <DocsEntry title="Buttons">
      <DocsBlock title="Primary Buttons">

        <MintButton>Primary</MintButton>
        { renderAll(btnTypes, 'type', MintButton) }

      </DocsBlock>
      <DocsBlock title="Primary Button (full width)">
        <MintButton width={ width.full }>
          Full width example
        </MintButton>
      </DocsBlock>
      <DocsBlock title="Facebook Button">
        <FacebookButton/>
      </DocsBlock>
      <DocsBlock title="Secondary Buttons">

        <MintButtonSecondary>Secondary</MintButtonSecondary>

      </DocsBlock>
    </DocsEntry>
  }
});

