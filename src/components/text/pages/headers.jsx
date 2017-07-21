import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import HeaderPrimary, {TYPE, SIZE, COLOR} from '../HeaderPrimary';
import HeaderSecondary from '../HeaderSecondary';

const Headers = () =>
  <DocsBlock info="Examples">
    <HeaderPrimary type={TYPE.H2}>X Together we go far!
    </HeaderPrimary>
    <HeaderPrimary type={TYPE.H2} size={SIZE.SMALL}>
      X We've got your back! - small
    </HeaderPrimary>
    <HeaderPrimary type={TYPE.H2} size={SIZE.XSMALL}>
      X We've got your back! - xsmall
    </HeaderPrimary>
    <HeaderSecondary type={TYPE.H2}>
      X We've got your back!
    </HeaderSecondary>
    <HeaderSecondary type={TYPE.H2} size={SIZE.SMALL}>
      We've got your back! - header secondary small
    </HeaderSecondary>
    <HeaderSecondary type={TYPE.H2} size={SIZE.XSMALL}>
      We've got your back! - header secondary xsmall
    </HeaderSecondary>
    <ContrastBox>
      <HeaderPrimary type={TYPE.H2} color={COLOR.LIGHT}>
        X Together we go far!
      </HeaderPrimary>
      <HeaderPrimary type={TYPE.H2} size={SIZE.SMALL} color={COLOR.LIGHT}>
        X We've got your back! - small
      </HeaderPrimary>
      <HeaderPrimary type={TYPE.H2} size={SIZE.XSMALL} color={COLOR.LIGHT}>
        X We've got your back! - xsmall
      </HeaderPrimary>
      <HeaderSecondary type={TYPE.H2} color={COLOR.LIGHT}>
        X We've got your back!
      </HeaderSecondary>
      <HeaderSecondary type={TYPE.H2} size={SIZE.SMALL} color={COLOR.LIGHT}>
        We've got your back! - header secondary small
      </HeaderSecondary>
      <HeaderSecondary type={TYPE.H2} size={SIZE.XSMALL} color={COLOR.LIGHT}>
        We've got your back! - header secondary xsmall
      </HeaderSecondary>
    </ContrastBox>
  </DocsBlock>;

export default Headers;
