import React from 'react';
import RwdHelper, {TYPE} from '../RwdHelper';
import DocsBlock from 'components/DocsBlock';
import Icon, {TYPE as icoTypes, ICON_COLOR} from 'icons/Icon';

const RwdHelpers = () => (
  <div>
    <DocsBlock info="Top (middle)" additionalInfo="--top">
      <ul>
        <li>
          <RwdHelper hide={TYPE.SMALL_ONLY}>
            <span>
              <Icon type={icoTypes.HEART} color={ICON_COLOR.PEACH} size={14} />
            </span>
          </RwdHelper>
          - hidden for small screens
        </li>

        <li>
          <RwdHelper hide={TYPE.MEDIUM_ONLY}>
            <span>
              <Icon type={icoTypes.HEART} color={ICON_COLOR.PEACH} size={14} />
            </span>
          </RwdHelper>
          - hidden for medium screens
        </li>

        <li>
          <RwdHelper hide={TYPE.MEDIUM_DOWN}>
            <span>
              <Icon type={icoTypes.HEART} color={ICON_COLOR.PEACH} size={14} />
            </span>
          </RwdHelper>
          - hidden for small and medium screens
        </li>

        <li>
          <RwdHelper hide={TYPE.MEDIUM_UP}>
            <span>
              <Icon type={icoTypes.HEART} color={ICON_COLOR.PEACH} size={14} />
            </span>
          </RwdHelper>
          - hidden for medium and large screens
        </li>

        <li>
          <RwdHelper hide={TYPE.LARGE_ONLY}>
            <span>
              <Icon type={icoTypes.HEART} color={ICON_COLOR.PEACH} size={14} />
            </span>
          </RwdHelper>
          - hidden for large screens
        </li>
      </ul>
    </DocsBlock>

  </div>
);

export default RwdHelpers;
