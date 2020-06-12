import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Label from '../Label';
import Flex from '../../flex/Flex';

const closeCallback = () => undefined;

const Labels = () => (
  <div>
    <DocsBlock info="Size XS">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="default">
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="default">
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="default">
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="default">
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="default">
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="default">
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="mono" type="default">
            {' '}
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
          <Label color="mono" type="default" onClose={closeCallback}>
            {' '}
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mint" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="lavender" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="peach" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mustard" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="gray" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mono" type="default" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <Label
            color="blue"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mint"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="lavender"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="peach"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mustard"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="gray"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mono"
            type="default"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Strong">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="strong">
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="strong">
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="strong">
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="strong">
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="strong">
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="strong">
            label
          </Label>
          <br />
          <br />
          <Label color="mono" type="strong">
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mono" type="strong" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mint" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="lavender" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="peach" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mustard" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="gray" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mono" type="strong" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <Label
            color="blue"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mint"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="lavender"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="peach"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mustard"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="gray"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mono"
            type="strong"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
      </Flex>
    </DocsBlock>
  </div>
);

export default Labels;
