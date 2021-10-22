import * as React from 'react';
import RwdHelper, {TYPE} from '../RwdHelper';
import DocsBlock from 'components/DocsBlock';
import Icon, {TYPE as icoTypes, ICON_COLOR} from 'icons/Icon';
import Box from '../../box/Box';
import Flex from '../../flex/Flex';

const ElevationShadows = () => (
  <div>
    <DocsBlock info="Elevation shadows">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <div>
          Small
          <Box
            className="sg-elevation-shadow"
            padding="xl"
            style={{marginTop: '20px'}}
          />
        </div>
        <div>
          Medium
          <Box
            className="sg-elevation-shadow--medium"
            padding="xl"
            style={{marginTop: '20px'}}
          />
        </div>
        <div>
          Large
          <Box
            className="sg-elevation-shadow--large"
            padding="xl"
            style={{marginTop: '20px'}}
          />
        </div>
      </div>
    </DocsBlock>
  </div>
);

export default ElevationShadows;
