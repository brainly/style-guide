import React from 'react';
import Checkbox from '../Checkbox';
import DocsBlock from '../../../docs/DocsBlock';
import Label from '../../labels/Label';

const dumpProps = {onChange: () => undefined};

const checkboxesAndRadios = () => <div>
  <DocsBlock info="Checkboxes">
    <Checkbox />
    <Checkbox checked={true} {...dumpProps}/>
    <br />
    <Label secondary={true} text="Check me!" htmlFor="checkbox-1" iconContent={
      <Checkbox id="checkbox-1"/>
    }/>
    <Label secondary={true} text="Check me!" htmlFor="checkbox-2" emphasised={true} iconContent={
      <Checkbox id="checkbox-2"/>
    }/>
  </DocsBlock>
  <DocsBlock info="Radio Buttons">
    <div className="sg-radio">
      <input className="sg-radio__element" type="radio" name="group1" id="radio-1"/>
      <label className="sg-radio__ghost" htmlFor="radio-1"></label>
    </div>
    <div className="sg-radio">
      <input className="sg-radio__element" type="radio" name="group1" id="radio-2" checked={true} {...dumpProps}/>
      <label className="sg-radio__ghost" htmlFor="radio-2"></label>
    </div>
    <br/>
    <Label secondary={true} htmlFor="radio-3" text="Check me!" iconContent={
      <div className="sg-radio">
        <input className="sg-radio__element" type="radio" id="radio-3"/>
        <label className="sg-radio__ghost" htmlFor="radio-3"></label>
      </div>
    }/>
    <Label secondary={true} htmlFor="radio-4" text="Check me!" iconContent={
      <div className="sg-radio">
        <input className="sg-radio__element" type="radio" id="radio-3"/>
        <label className="sg-radio__ghost" htmlFor="radio-4"></label>
      </div>
    }/>
  </DocsBlock>
</div>;

export default checkboxesAndRadios;
