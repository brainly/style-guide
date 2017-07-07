import React from 'react';
import RwdHelper, {TYPE} from '../RwdHelper';
import DocsBlock from '../../../docs/DocsBlock';
import Icon, {TYPE as icoTypes, colors} from '../../icons/Icon';

const RwdHelpers = () =>
  <div>
    <DocsBlock info='Top (middle)' additionalInfo='--top'>
      <ul>
        <li>
          <RwdHelper hide={TYPE.SMALL_ONLY}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
          </RwdHelper>
          - hidden for small screens
        </li>

        <li>
          <RwdHelper hide={TYPE.MEDIUM_ONLY}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
          </RwdHelper>
          - hidden for medium screens
        </li>

        <li>
          <RwdHelper hide={TYPE.MEDIUM_DOWN}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
          </RwdHelper>
          - hidden for small and medium screens
        </li>

        <li>
          <RwdHelper hide={TYPE.MEDIUM_UP}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
          </RwdHelper>
          - hidden for medium and large screens
        </li>

        <li>
          <RwdHelper hide={TYPE.LARGE_ONLY}>
            <span>
              <Icon type={icoTypes.heart} color={colors.peach} size={14}/>
            </span>
          </RwdHelper>
          - hidden for large screens
        </li>
      </ul>
    </DocsBlock>

  </div>;

export default RwdHelpers;
