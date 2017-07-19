import React from 'react';
import DocsBlock from 'components/DocsBlock';
import FlashMessage, {TYPE} from '../FlashMessage';

const TEXT = 'I have never seen a code like this before...';

const flashMessages = () => <div>
  <DocsBlock info="Default">
    <FlashMessage text={TEXT}/>
  </DocsBlock>
  <DocsBlock info="Success">
    <FlashMessage text={TEXT} type={TYPE.SUCCESS}/>
  </DocsBlock>
  <DocsBlock info="Error">
    <FlashMessage text={TEXT} type={TYPE.ERROR}/>
  </DocsBlock>
  <DocsBlock info="Info">
    <FlashMessage text={TEXT} type={TYPE.INFO}/>
  </DocsBlock>
</div>;

export default flashMessages;
