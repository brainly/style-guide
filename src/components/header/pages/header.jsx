import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import Header from '../Header';
import HomeButton from '../../home-button/HomeButton';
import Search, {COLOR as SEARCH_COLOR} from '../../search/Search';
import RWDHelper, {TYPE as RWD_TYPE} from '../../helpers/RwdHelper';
import IconAsButton, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../../icon-as-button/IconAsButton';
import OverlayedBox from '../../overlayed-box/OverlayedBox';
import ButtonSecondary, {TYPE as BUTTON_TYPE} from '../../buttons/ButtonSecondary';

const Headers = () =>
  <div>
    <DocsBlock info="Standard">
      <Header left="left"
        middle="middle"
        right="right"/>
    </DocsBlock>
    <DocsBlock info="Example usage">
      <Header left={<HomeButton/>}
        middle={<Search placeholder="Find all the answers..." fullWidth={true} color={SEARCH_COLOR.LIGHT}
          adaptiveIco={true} />}
        right={<div>
          <RWDHelper hide={RWD_TYPE.SMALL_ONLY}>
            {/* FIXME: center align items without this class */}
            <div className="sg-header__right">
              <ButtonSecondary type={BUTTON_TYPE.DARK} small={true}>Register</ButtonSecondary>
              <button className="sg-icon-as-button sg-icon-as-button--transparent sg-icon-as-button--light">
                <div className="sg-icon-as-button__hole">
                  <div className="sg-overlayed-box">
                    <svg className="sg-icon sg-icon--x22 sg-icon--adaptive">
                      <use xlinkHref="#icon-messages"></use>
                    </svg>
                    <div className="sg-overlayed-box__overlay">
                      <div className="sg-badge sg-badge--rounded sg-badge--peach">
                        <div className="sg-text sg-text--emphasised sg-text--xsmall sg-text--light">1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              {/* FIXME: avatar needs to be inside this */}
              <IconAsButton  color={ICON_COLOR.transparent}>X</IconAsButton>
            </div>
          </RWDHelper>
          <RWDHelper hide={RWD_TYPE.MEDIUM_UP}>
            <div>
              <IconAsButton type={ICON_TYPE.MENU} color={ICON_COLOR.LIGHT}/>
            </div>
          </RWDHelper>
        </div>
        }/>
    </DocsBlock>
    <DocsBlock info="Light">
      <Header left={<HomeButton/>}
        middle={<Search placeholder="Find all the answers..." fullWidth={true} color={SEARCH_COLOR.LIGHT}
          adaptiveIco={true} />} />
    </DocsBlock>
    <DocsBlock info="Fixed header">
      <Header fixed={true} left={<HomeButton/>}
        middle={<Search placeholder="Find all the answers..." fullWidth={true} color={SEARCH_COLOR.LIGHT}
          adaptiveIco={true} />} />
    </DocsBlock>
  </div>;

export default Headers;
