import React from 'react';
import RoundButton from '../RoundButton';
import DocsBlock from 'components/DocsBlock';

const RoundButtons = () => {
  return (
    <DocsBlock>
      <DocsBlock info="Round buttons">
        <RoundButton size="small" iconType="answer" color="black-base-500" />
        &nbsp;
        <RoundButton size="medium" iconType="answer" color="blue-dark-700" />
        &nbsp;
        <RoundButton size="large" iconType="answer" color="mint-dark-700" />
        &nbsp;
        <RoundButton size="medium" iconType="answer" color="mustard-base-500" />
        &nbsp;
        <RoundButton size="small" iconType="answer" color="peach-dark-700" />
      </DocsBlock>
      <DocsBlock info="Round buttons filled">
        <RoundButton
          size="small"
          iconType="answer"
          filled
          color="black-base-500"
        />
        &nbsp;
        <RoundButton
          size="medium"
          iconType="answer"
          filled
          color="blue-dark-700"
        />
        &nbsp;
        <RoundButton
          size="large"
          iconType="answer"
          filled
          color="mint-dark-700"
        />
        &nbsp;
        <RoundButton
          size="medium"
          iconType="answer"
          filled
          color="mustard-base-500"
        />
        &nbsp;
        <RoundButton
          size="small"
          iconType="answer"
          filled
          color="peach-dark-700"
        />
      </DocsBlock>
    </DocsBlock>
  );
};

export default RoundButtons;
