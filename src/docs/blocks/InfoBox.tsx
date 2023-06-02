import * as React from 'react';
import Box from '../../components/box/Box';
import Text from '../../components/text/Text';
import Flex from '../../components/flex/Flex';
import Icon from '../../components/icons/Icon';

type InfoBoxType = 'warning' | 'info' | 'error';
interface InfoBoxProps {
  type?: InfoBoxType;
  children: React.ReactNode;
}
const COLORS_MAP: {
  info: 'blue-20';
  warning: 'yellow-20';
  error: 'red-20';
} = {
  info: 'blue-20',
  warning: 'yellow-20',
  error: 'red-20',
};
const ICON_COLORS_MAP: {
  info: 'icon-blue-50';
  warning: 'icon-yellow-50';
  error: 'icon-red-50';
} = {
  info: 'icon-blue-50',
  warning: 'icon-yellow-50',
  error: 'icon-red-50',
};
const ICONS_MAP: {
  info: 'info';
  warning: 'warning';
  error: 'clear';
} = {
  info: 'info',
  warning: 'warning',
  error: 'clear',
};

export const InfoBox = ({children, type = 'info'}: InfoBoxProps) => {
  return (
    <Flex marginBottom="s">
      <Box padding="s" color={COLORS_MAP[type]} role="alert">
        <Flex>
          <Icon
            size={16}
            type={ICONS_MAP[type]}
            color={ICON_COLORS_MAP[type]}
            className="sbdocs-info-box-icon"
          />
          <Text size="small" color="text-black">
            {children}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
