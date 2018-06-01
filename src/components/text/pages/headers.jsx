import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import HeaderPrimary, {HEADER_TYPE, HEADER_SIZE, HEADER_COLOR, HEADER_TRANSFORM} from '../HeaderPrimary';
import HeaderSecondary from '../HeaderSecondary';

const Headers = () => (
  <DocsBlock info="Examples">
    <HeaderPrimary type={HEADER_TYPE.H2}>X Together we go far!
    </HeaderPrimary>
    <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.SMALL}>
      X We&apos;ve got your back! - small
    </HeaderPrimary>
    <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL}>
      X We&apos;ve got your back! - xsmall
    </HeaderPrimary>
    <HeaderSecondary type={HEADER_TYPE.H2}>
      X We&apos;ve got your back!
    </HeaderSecondary>
    <HeaderSecondary type={HEADER_TYPE.H2} size={HEADER_SIZE.SMALL}>
      We&apos;ve got your back! - header secondary small
    </HeaderSecondary>
    <HeaderSecondary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL}>
      We&apos;ve got your back! - header secondary xsmall
    </HeaderSecondary>
    <ContrastBox>
      <HeaderPrimary type={HEADER_TYPE.H2} color={HEADER_COLOR.LIGHT}>
        X Together we go far!
      </HeaderPrimary>
      <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.SMALL} color={HEADER_COLOR.LIGHT}>
        X We&apos;ve got your back! - small
      </HeaderPrimary>
      <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL} color={HEADER_COLOR.LIGHT}>
        X We&apos;ve got your back! - xsmall
      </HeaderPrimary>
      <HeaderSecondary type={HEADER_TYPE.H2} color={HEADER_COLOR.LIGHT}>
        X We&apos;ve got your back!
      </HeaderSecondary>
      <HeaderSecondary type={HEADER_TYPE.H2} size={HEADER_SIZE.SMALL} color={HEADER_COLOR.LIGHT}>
        We&apos;ve got your back! - header secondary small
      </HeaderSecondary>
      <HeaderSecondary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL} color={HEADER_COLOR.LIGHT}>
        We&apos;ve got your back! - header secondary xsmall
      </HeaderSecondary>
    </ContrastBox>
    <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL} transform={HEADER_TRANSFORM.UPPERCASE}>
      X We&apos;ve got your back! - uppercase
    </HeaderPrimary>
    <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL} transform={HEADER_TRANSFORM.LOWERCASE}>
      X We&apos;ve got your back! - lowercase
    </HeaderPrimary>
    <HeaderPrimary type={HEADER_TYPE.H2} size={HEADER_SIZE.XSMALL} transform={HEADER_TRANSFORM.CAPITALIZE}>
      X We&apos;ve got your back! - capitalized
    </HeaderPrimary>
  </DocsBlock>
);

export default Headers;
