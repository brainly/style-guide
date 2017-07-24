import React from 'react';
import PropTypes from 'prop-types';
import Text, {SIZE as TEXT_SIZE, COLOR as TEXT_COLOR} from 'text/Text';
import Checkbox from 'form-elements/Checkbox';
import Radio from 'form-elements/Radio';
import ActionList from 'action-list/ActionList';
import SeparatorVertical from 'separators/SeparatorVertical';
import UUID from 'node-uuid';

const DocsActiveBlockSettings = ({values, onChange}) => <div className="docs-active-block__settings"><ActionList>
  <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY}>Code:&nbsp;
    <label>none <Radio name={UUID.v1()} checked={!values.showCode}
      onChange={() => onChange('showCode', null)}/></label>&nbsp;
    <label>JSX <Radio name={UUID.v1()} checked={values.showCode === 'jsx'}
      onChange={() => onChange('showCode', 'jsx')}/></label>&nbsp;
    <label>HTML <Radio name={UUID.v1()} checked={values.showCode === 'html'}
      onChange={() => onChange('showCode', 'html')}/></label>
  </Text>
  <SeparatorVertical/>
  <label>
    <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.GRAY}>Background:&nbsp;
      <Checkbox checked={values.grayBackground} onChange={e => onChange('grayBackground', e.target.checked)}/>
    </Text>
  </label>
</ActionList></div>;

DocsActiveBlockSettings.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DocsActiveBlockSettings;
