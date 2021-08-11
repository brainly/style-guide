import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import Label from '../Label';
import Flex from '../../flex/Flex';
import ContrastBox from 'components/ContrastBox';

const closeCallback = () => undefined;

const Labels = () => (
  <div>
    <DocsBlock info="Default">
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
          <Label type="default"> label</Label>
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
          <Label type="default" onClose={closeCallback}>
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
          <Label type="default" iconType="heart">
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
          <Label type="default" iconType="heart" onClose={closeCallback}>
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Solid">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="solid">
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="solid">
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="solid">
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="solid">
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="solid">
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="solid">
            label
          </Label>
          <br />
          <br />
          <Label type="solid">label</Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label type="solid" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mint" type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="lavender" type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="peach" type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mustard" type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="gray" type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label type="solid" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <Label
            color="blue"
            type="solid"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mint"
            type="solid"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="lavender"
            type="solid"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="peach"
            type="solid"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mustard"
            type="solid"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="gray"
            type="solid"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label type="solid" iconType="heart" onClose={closeCallback}>
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Transparent">
      <Flex>
        <Flex direction="column" marginRight="l" style={{visibility: 'hidden'}}>
          <Label color="blue" type="transparent">
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="transparent">
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="transparent">
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="transparent">
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="transparent">
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="transparent">
            label
          </Label>
          <br />
          <br />
          <Label type="transparent">label</Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l" style={{visibility: 'hidden'}}>
          <Label color="blue" type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label type="transparent" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mint" type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="lavender" type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="peach" type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mustard" type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="gray" type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label type="transparent" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <Label
            color="blue"
            type="transparent"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mint"
            type="transparent"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="lavender"
            type="transparent"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="peach"
            type="transparent"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mustard"
            type="transparent"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="gray"
            type="transparent"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label type="transparent" iconType="heart" onClose={closeCallback}>
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Transparent color">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="transparent-color">
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="transparent-color">
            label
          </Label>
          <br />
          <br />
          <Label color="lavender" type="transparent-color">
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="transparent-color">
            label
          </Label>
          <br />
          <br />
          <Label color="mustard" type="transparent-color">
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="transparent-color">
            label
          </Label>
          <br />
          <br />
          <Label type="transparent-color">label</Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="transparent-color" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label color="mint" type="transparent-color" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label
            color="lavender"
            type="transparent-color"
            onClose={closeCallback}
          >
            label
          </Label>
          <br />
          <br />
          <Label color="peach" type="transparent-color" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label
            color="mustard"
            type="transparent-color"
            onClose={closeCallback}
          >
            label
          </Label>
          <br />
          <br />
          <Label color="gray" type="transparent-color" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
          <Label type="transparent-color" onClose={closeCallback}>
            label
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Label color="blue" type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mint" type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="lavender" type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="peach" type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="mustard" type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label color="gray" type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
          <Label type="transparent-color" iconType="heart">
            {' '}
            label with icon
          </Label>
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <Label
            color="blue"
            type="transparent-color"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mint"
            type="transparent-color"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="lavender"
            type="transparent-color"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="peach"
            type="transparent-color"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="mustard"
            type="transparent-color"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            color="gray"
            type="transparent-color"
            iconType="heart"
            onClose={closeCallback}
          >
            label with icon
          </Label>
          <br />
          <br />
          <Label
            type="transparent-color"
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
    <DocsBlock info="Long text">
      <Flex direction="column">
        <ContrastBox
          style={{
            width: '300px',
          }}
        >
          <Label
            iconType="heart"
            color="blue"
            onClose={closeCallback}
            title="Long long long text"
          >
            Long long long text
          </Label>
        </ContrastBox>
        <ContrastBox
          style={{
            width: '200px',
            marginTop: '10px',
          }}
        >
          <Label
            iconType="heart"
            color="blue"
            onClose={closeCallback}
            title="Long long long text"
          >
            Long long long text
          </Label>
        </ContrastBox>
      </Flex>
    </DocsBlock>
  </div>
);

export default Labels;
