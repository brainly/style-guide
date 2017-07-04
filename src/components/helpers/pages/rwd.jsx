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
              <span>
                <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
              </span>
              - hidden for small screens
            </span>
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.mediumOnly}>
            <span>
              <span>
                <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
              </span>
              - hidden for medium screens
            </span>
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.mediumDown}>
            <span>
              <span>
                <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
              </span>
              - hidden for small and medium screens
            </span>
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.mediumUp}>
            <span>
              <span>
                <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
              </span>
              - hidden for medium and large screens
            </span>
          </RwdHelper>
        </li>

        <li>
          <RwdHelper hide={types.largeOnly}>
            <span>
              <span>
                <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
              </span>
              - hidden for large screens
            </span>
          </RwdHelper>
        </li>
      </ul>
    </DocsBlock>

  </div>;


export default RwdHelpers;
