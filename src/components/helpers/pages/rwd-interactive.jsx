import * as React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import RwdHelper, {TYPE} from '../RwdHelper';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from 'icons/Icon';

const Helpers = () => {
  const settings = [
    {
      name: 'hide',
      values: TYPE,
      required: true,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <RwdHelper hide={TYPE.MEDIUM_DOWN}>
          <span>
            <Icon
              type={ICON_TYPE.HEART}
              color={ICON_COLOR['icon-red-50']}
              size={32}
            />
          </span>
        </RwdHelper>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <RwdHelper hide={TYPE.MEDIUM_UP}>
          <span>
            <Icon
              type={ICON_TYPE.EQUATION}
              color={ICON_COLOR['icon-indigo-50']}
              size={32}
            />
          </span>
        </RwdHelper>
      </DocsActiveBlock>
    </div>
  );
};

export default Helpers;
