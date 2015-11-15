import React from 'react';
import './main.scss';
import MintButton from 'components/mint-button-primary';
import MintButtonSecondary from 'components/mint-button-secondary';
import FacebookButton from 'components/mint-fb-button';
import { availableTypes as btnPrimaryTypes, availableWidth as btnPrimaryWidth } from 'components/mint-button-primary';
import { availableTypes as btnSecondaryTypes } from 'components/mint-button-secondary';
import DocsEntry from '../docs-entry';
import { default as DocsBlock, ContrastBox} from '../docs-block';
import renderAll from 'helpers/renderAll';

let renderAllTypes = renderAll('type');

export default React.createClass({
  render () {
    return (
      <DocsEntry title="Buttons">
        <DocsBlock title="Primary Buttons">

          <MintButton>Primary</MintButton>
          { renderAllTypes(btnPrimaryTypes, MintButton) }

        </DocsBlock>

        <DocsBlock title="Primary Button (full width)">

          <MintButton width={ btnPrimaryWidth.full }>
            Full width example
          </MintButton>

        </DocsBlock>

        <DocsBlock title="Facebook Button">
          <FacebookButton/>
        </DocsBlock>

        <DocsBlock title="Secondary Buttons">

          <MintButtonSecondary>Secondary</MintButtonSecondary>
          { renderAllTypes(btnSecondaryTypes, MintButtonSecondary, btnSecondaryTypes.light) }

          <ContrastBox>
            <MintButtonSecondary type={ btnSecondaryTypes.light }>Example</MintButtonSecondary>
          </ContrastBox>

        </DocsBlock>
      </DocsEntry>
    )
  }
});

