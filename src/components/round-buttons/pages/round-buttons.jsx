import React from 'react';
import RoundButton from '../RoundButton';
import Flex from 'flex/Flex';
import Text from 'text/Text';
import Link from 'text/Link';
import DocsBlock from 'components/DocsBlock';

const RoundButtons = () => {
  return (
    <DocsBlock>
      <DocsBlock info="Round buttons">
        <Flex marginBottom="m">
          <Text color="peach-dark">
            This component is deprecated, please use{' '}
            <Link href="./components.html#buttons">
              Buttons with iconOnly option
            </Link>{' '}
            instead
          </Text>
        </Flex>
        <RoundButton size="small" iconType="answer" color="black" />
        &nbsp;
        <RoundButton size="medium" iconType="answer" color="blue" />
        &nbsp;
        <RoundButton size="large" iconType="answer" color="mint" />
        &nbsp;
        <RoundButton size="medium" iconType="answer" color="mustard" />
        &nbsp;
        <RoundButton size="small" iconType="answer" color="peach" />
      </DocsBlock>
      <DocsBlock info="Round buttons filled">
        <RoundButton size="small" iconType="answer" filled color="black" />
        &nbsp;
        <RoundButton size="medium" iconType="answer" filled color="blue" />
        &nbsp;
        <RoundButton size="large" iconType="answer" filled color="mint" />
        &nbsp;
        <RoundButton size="medium" iconType="answer" filled color="mustard" />
        &nbsp;
        <RoundButton size="small" iconType="answer" filled color="peach" />
      </DocsBlock>
    </DocsBlock>
  );
};

export default RoundButtons;
