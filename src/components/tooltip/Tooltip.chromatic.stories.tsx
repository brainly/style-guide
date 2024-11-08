import * as React from 'react';
import * as TooltipStories from './Tooltip.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import Tooltip from './Tooltip';

import Text from '../text/Text';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';
import Counter from '../counters/Counter';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Button from '../buttons/Button';

const Placement = () => {
  // @ts-ignore TS7031
  const RenderTooltip = ({placement}) => (
    <Tooltip placement={placement} defaultOpen>
      <Tooltip.Element label="Report this" />
      <Tooltip.Trigger>
        <Button
          icon={<Icon color="adaptive" type="report_flag_outlined" />}
          iconOnly
          variant="solid-light"
        />
      </Tooltip.Trigger>
    </Tooltip>
  );

  return (
    <Flex justifyContent="center" style={{paddingTop: '100px'}}>
      <Flex
        direction="column"
        alignItems="center"
        style={{width: '300px', gap: '20px'}}
      >
        <RenderTooltip placement="top" />
        <Flex direction="row" justifyContent="space-between" fullWidth>
          {['top-end', 'top-start'].map(placement => (
            <RenderTooltip key={placement} placement={placement} />
          ))}
        </Flex>
        <Flex direction="row" justifyContent="space-between" fullWidth>
          {['left', 'right'].map(placement => (
            <RenderTooltip key={placement} placement={placement} />
          ))}
        </Flex>
        <Flex direction="row" justifyContent="space-between" fullWidth>
          {['bottom-end', 'bottom-start'].map(placement => (
            <RenderTooltip key={placement} placement={placement} />
          ))}
        </Flex>
        <RenderTooltip placement="bottom" />
      </Flex>
    </Flex>
  );
};

const TypesOfTriggers = () => {
  // @ts-ignore TS7031
  const RenderTooltip = ({trigger}) => (
    <Tooltip defaultOpen>
      <Tooltip.Element label="Here's tooltip" />
      <Tooltip.Trigger>{trigger}</Tooltip.Trigger>
    </Tooltip>
  );

  return (
    <Flex direction="column" style={{gap: '30px', marginTop: '50px'}}>
      <div>
        <Text>Button component:</Text>
        <RenderTooltip trigger={<Button>Hover me</Button>} />
      </div>
      <div>
        <Text>Checkbox component:</Text>
        <RenderTooltip trigger={<Checkbox>Hover me</Checkbox>} />
      </div>
      <div>
        <Text>{`<button>`} tag:</Text>
        <RenderTooltip
          trigger={<button>Hover me to trigger the tooltip</button>}
        />
      </div>
      <div>
        <Text>{`<p>`} tag:</Text>
        <RenderTooltip trigger={<p>Hover me to trigger the tooltip</p>} />
      </div>
      <div>
        <Text>Counter component:</Text>
        <RenderTooltip
          trigger={
            <Counter icon="points" size="xs">
              +15
              <Text as="span" color="text-gray-60" inherited>
                {' '}
                pts{' '}
              </Text>
            </Counter>
          }
        />
      </div>
      <div style={{width: '300px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <RenderTooltip trigger="Hover me to trigger the tooltip." /> Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </div>
    </Flex>
  );
};

const TextLengths = () => {
  // @ts-ignore TS7031
  const RenderShortTooltip = ({placement}) => (
    <Tooltip placement={placement} defaultOpen>
      <Tooltip.Element label="0" />
      <Tooltip.Trigger>
        <Button
          icon={<Icon color="adaptive" type="report_flag_outlined" />}
          iconOnly
          variant="solid-light"
        />
      </Tooltip.Trigger>
    </Tooltip>
  );

  // @ts-ignore TS7031
  const RenderLongTooltip = ({placement}) => (
    <Tooltip placement={placement} defaultOpen>
      <Tooltip.Element
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat."
      />
      <Tooltip.Trigger>
        <Button
          icon={<Icon color="adaptive" type="report_flag_outlined" />}
          iconOnly
          variant="solid-light"
        />
      </Tooltip.Trigger>
    </Tooltip>
  );

  return (
    <Flex direction="column">
      <Text weight="bold">Short text:</Text>
      <Flex justifyContent="center" style={{paddingTop: '50px'}}>
        <Flex
          direction="column"
          alignItems="center"
          style={{width: '300px', gap: '20px'}}
        >
          <RenderShortTooltip placement="top" />
          <Flex direction="row" justifyContent="space-between" fullWidth>
            {['top-end', 'top-start'].map(placement => (
              <RenderShortTooltip key={placement} placement={placement} />
            ))}
          </Flex>
          <Flex direction="row" justifyContent="space-between" fullWidth>
            {['left', 'right'].map(placement => (
              <RenderShortTooltip key={placement} placement={placement} />
            ))}
          </Flex>
          <Flex direction="row" justifyContent="space-between" fullWidth>
            {['bottom-end', 'bottom-start'].map(placement => (
              <RenderShortTooltip key={placement} placement={placement} />
            ))}
          </Flex>
          <RenderShortTooltip placement="bottom" />
        </Flex>
      </Flex>
      <Text weight="bold" style={{paddingTop: '100px'}}>
        Long text:
      </Text>
      <Flex direction="column" style={{padding: '140px 0'}} fullWidth>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{gap: '140px', paddingBottom: '140px'}}
        >
          <RenderLongTooltip placement="top" />
          <RenderLongTooltip placement="top-end" />
          <RenderLongTooltip placement="top-start" />
          <RenderLongTooltip placement="bottom" />
          <RenderLongTooltip placement="bottom-end" />
          <RenderLongTooltip placement="bottom-start" />
        </Flex>
        <Flex justifyContent="flex-end" style={{padding: '60px 0'}} fullWidth>
          <RenderLongTooltip placement="left" />
        </Flex>
        <Flex justifyContent="flex-start" style={{padding: '60px 0'}} fullWidth>
          <RenderLongTooltip placement="right" />
        </Flex>
      </Flex>
    </Flex>
  );
};

const {placement, controlled, ...restStories} = TooltipStories;

export const Default = generateChromaticStory({
  ...restStories,
  TypesOfTriggers,
  Placement,
  TextLengths,
});
const {includeStories, ...meta} = TooltipStories.default;

export default meta;
export {placement, controlled};
