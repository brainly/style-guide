import * as React from 'react';

import Button from '../../../buttons/Button';
import useRadioContext from '../useRadioContext.jsx';
import Radio from '../Radio.jsx';

const RadioGroupResetButton = ({children}) => {
  const {setSelectedValue} = useRadioContext();

  return (
    <Button
      onClick={e => {
        setSelectedValue(e, '1');
      }}
    >
      {children}
    </Button>
  );
};

const CustomRadioComponent = ({value}) => {
  const {selectedValue, setSelectedValue} = useRadioContext();

  return (
    <div
      onClick={e => {
        setSelectedValue(e, value);
      }}
      style={{
        border: '2px solid black',
        borderColor: value === selectedValue ? 'black' : '#e1eaf1',
        borderRadius: '8px',
        padding: '10px 20px',
        marginBottom: '10px',
        marginRight: '10px',
      }}
    >
      <Radio value={value}>{value}</Radio>
    </div>
  );
};

export {RadioGroupResetButton, CustomRadioComponent};
