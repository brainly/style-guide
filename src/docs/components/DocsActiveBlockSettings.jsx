import React from 'react';
import PropTypes from 'prop-types';
import Text, {SIZE as TEXT_SIZE, COLOR as TEXT_COLOR} from 'text/Text';
import Radio from 'form-elements/Radio';
import ActionList from 'action-list/ActionList';
import SeparatorVertical from 'separators/SeparatorVertical';
import UUID from 'node-uuid';

const DocsActiveBlockSettings = ({values, onChange}) => <div className="docs-active-block__settings">
  <ActionList>
    <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY}>Code:
      <label className="docs-active-block__label">
        <Radio name={UUID.v1()} checked={!values.showCode}
          onChange={() => onChange('showCode', null)}/> none
      </label>
      <label className="docs-active-block__label">
        <Radio name={UUID.v1()} checked={values.showCode === 'jsx'}
          onChange={() => onChange('showCode', 'jsx')}/> JSX
      </label>
      <label className="docs-active-block__label">
        <Radio name={UUID.v1()} checked={values.showCode === 'html'}
          onChange={() => onChange('showCode', 'html')}/> HTML
      </label>
    </Text>
    <SeparatorVertical/>
    <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY}>Background:
      <label className="docs-active-block__label">
        <Radio name={UUID.v1()} checked={!values.changeBackground}
          onChange={() => onChange('changeBackground', null)}/> none</label>
      <label className="docs-active-block__label">
        <Radio name={UUID.v1()} checked={values.changeBackground === 'light'}
          onChange={() => onChange('changeBackground', 'light')}/> light
      </label>
      <label className="docs-active-block__label">
        <Radio name={UUID.v1()} checked={values.changeBackground === 'dark'}
          onChange={() => onChange('changeBackground', 'dark')}/> dark
      </label>
    </Text>
  </ActionList>
</div>;

DocsActiveBlockSettings.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DocsActiveBlockSettings;
