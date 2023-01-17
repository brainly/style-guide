import * as React from 'react';
import Box from '../../../box/Box';
import Button from '../../../buttons/Button';
import Icon from '../../../icons/Icon';

const sizes = {
  listitem: {
    width: 'auto',
    height: 48,
  },
  small: {
    width: 150,
    height: 100,
  },
  medium: {
    width: 300,
    height: 200,
  },
  large: {
    width: 600,
    height: 400,
  },
};
const colors = {
  red: 'red-40',
  yellow: 'yellow-40',
  blue: 'blue-40',
} as const;

type PropsType = Readonly<{
  size: 'listitem' | 'small' | 'medium' | 'large';
  color: 'red' | 'yellow' | 'blue';
  onClick?: () => void;
}>;
const DummyBox = React.forwardRef(({size, color, onClick}: PropsType, ref) => (
  <Box
    ref={ref}
    color={colors[color]}
    padding="xs"
    onClick={onClick}
    style={{
      ...sizes[size],
      cursor: onClick === undefined ? 'default' : 'pointer',
    }}
  >
    {onClick !== undefined && size === 'listitem' && (
      <Button
        size="s"
        icon={<Icon type="close" size={24} />}
        variant="transparent-inverted"
        iconOnly
      />
    )}
  </Box>
));

export default DummyBox;
