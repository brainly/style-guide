import React from 'react';
import RwdHelper, {types} from '../RwdHelper';
import DocsBlock from '../../../docs/DocsBlock';
import Icon, {types as icoTypes, colors} from '../../icons/Icon';

const RwdHelpers = () =>
  <div>
    <DocsBlock info='Top (middle)' additionalInfo='--top'>
      <ul>
        <li>
          <RwdHelper hide={types.smallOnly}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
            - hidden for small screens
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.mediumOnly}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
            - hidden for medium screens
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.mediumDown}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
            - hidden for small and medium screens
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.mediumUp}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
            - hidden for medium and large screens
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.largeOnly}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
            - hidden for large screens
          </RwdHelper>
        </li>
      </ul>
    </DocsBlock>

  </div>;


export default RwdHelpers;
