// @flow

import ActionList from 'action-list/ActionList';
import Radio from 'form-elements/Radio';
import React from 'react';
import SeparatorVertical from 'separators/SeparatorVertical';
import Text, {TEXT_COLOR, TEXT_SIZE} from 'text/Text';
import generateRandomString from '../../js/generateRandomString';

type PropsType = {
  values: {
    showCode: ?string,
    changeBackground: 'light' | 'dark' | 'none',
  },
  onChange: (string, mixed) => mixed,
};

class DocsActiveBlockSettings extends React.Component<PropsType> {
  onChangeFunc = (type: string, value: mixed) =>
    this.props.onChange(type, value);
  onChangeShowNothing = () => this.onChangeFunc('showCode', null);
  onChangeShowJSX = () => this.onChangeFunc('showCode', 'jsx');
  onChangeShowHTML = () => this.onChangeFunc('showCode', 'html');
  onChangeBackgroundDefault = () => this.onChangeFunc('changeBackground', null);
  onChangeBackgroundLight = () =>
    this.onChangeFunc('changeBackground', 'light');
  onChangeBackgroundDark = () => this.onChangeFunc('changeBackground', 'dark');

  render() {
    return (
      <div className="docs-active-block__settings">
        <ActionList>
          <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY}>
            Code:
            <label className="docs-active-block__label">
              <Radio
                name={generateRandomString()}
                checked={!this.props.values.showCode}
                onChange={this.onChangeShowNothing}
              />{' '}
              none
            </label>
            <label className="docs-active-block__label">
              <Radio
                name={generateRandomString()}
                checked={this.props.values.showCode === 'jsx'}
                onChange={this.onChangeShowJSX}
              />{' '}
              JSX
            </label>
            <label className="docs-active-block__label">
              <Radio
                name={generateRandomString()}
                checked={this.props.values.showCode === 'html'}
                onChange={this.onChangeShowHTML}
              />{' '}
              HTML
            </label>
          </Text>
          <SeparatorVertical />
          <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY}>
            Background:
            <label className="docs-active-block__label">
              <Radio
                name={generateRandomString()}
                checked={!this.props.values.changeBackground}
                onChange={this.onChangeBackgroundDefault}
              />{' '}
              none
            </label>
            <label className="docs-active-block__label">
              <Radio
                name={generateRandomString()}
                checked={this.props.values.changeBackground === 'light'}
                onChange={this.onChangeBackgroundLight}
              />{' '}
              light
            </label>
            <label className="docs-active-block__label">
              <Radio
                name={generateRandomString()}
                checked={this.props.values.changeBackground === 'dark'}
                onChange={this.onChangeBackgroundDark}
              />{' '}
              dark
            </label>
          </Text>
        </ActionList>
      </div>
    );
  }
}

export default DocsActiveBlockSettings;
