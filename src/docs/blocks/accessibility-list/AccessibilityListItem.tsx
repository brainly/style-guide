import * as React from 'react';
import {styled} from '@storybook/theming';
import Text from '../../../components/text/Text';
import Flex from '../../../components/flex/Flex';
import Icon from '../../../components/icons/Icon';

type StatusType = 'DONE' | 'TO DO' | 'IN PROGRESS' | 'N/A';
export type RuleType = {
  pattern: string;
  comment?: string;
  status: StatusType;
};
const Pattern = styled(Text)({
  marginBottom: '4px',
});
const IconWrapper = styled(Flex)({
  width: '24px',
  height: '24px',
  borderRadius: '24px',
  marginRight: '16px',
  flexShrink: '0',
});
const DoneIconWrapper = styled(IconWrapper)({
  background: '#24A865',
});
const ToDoIconWrapper = styled(IconWrapper)({
  border: '2px solid #C3D1DD',
});
const Li = styled.li({
  paddingBottom: '8px',
  borderBottom: '2px solid #F5F8FA',
  paddingTop: '8px',
  maxWidth: '800px',
});
const DoneIcon = (
  <DoneIconWrapper justifyContent="center" alignItems="center">
    <Icon type="check" color="icon-white" size={16} aria-hidden />
    <span className="sg-visually-hidden">done</span>
  </DoneIconWrapper>
);
const ToDoIcon = (
  <ToDoIconWrapper justifyContent="center" alignItems="center">
    <span className="sg-visually-hidden">to do</span>
  </ToDoIconWrapper>
);
const NaIcon = (
  <IconWrapper justifyContent="center" alignItems="center">
    <Text color="text-gray-60" aria-hidden>
      N/A
    </Text>
    <span className="sg-visually-hidden">not applicable</span>
  </IconWrapper>
);

const StatusIcon = ({status}: {status: StatusType}) => {
  if (status === 'N/A') {
    return NaIcon;
  }

  if (status === 'DONE') {
    return DoneIcon;
  }

  return ToDoIcon;
};

export const AccessibilityListItem = ({pattern, comment, status}: RuleType) => (
  <Li>
    <Flex>
      <StatusIcon status={status} />
      <Flex direction="column">
        <Pattern size="medium" color={status === 'N/A' && 'text-gray-60'}>
          <span
            dangerouslySetInnerHTML={{
              __html: pattern,
            }}
          />
        </Pattern>
        {comment && (
          <Text
            size="xsmall"
            color={status === 'N/A' ? 'text-gray-60' : 'text-gray-70'}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: comment,
              }}
            />
          </Text>
        )}
      </Flex>
    </Flex>
  </Li>
);
