import React, {useState, useEffect} from 'react';
import Input from './Input'

export default {
  title: 'Components/Form/Input',
  parameters: {
    component: Input,
  },
};

export const Default = args => {
  const [value, setValue] = useState(args.value)

  useEffect(() => {
    console.log(args)
  }, [args])

  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
};
