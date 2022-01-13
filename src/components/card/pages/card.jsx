import * as React from 'react';
import Card, {CARD_PADDING} from '../Card';
import CardHole from '../CardHole';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxContent from 'content-box/ContentBoxContent';
import Headline, {HEADLINE_TYPE} from 'text/Headline';

const Cards = () => (
  <div>
    <DocsBlock info="Simple with large padding">
      <Card padding={CARD_PADDING.LARGE}>
        <CardHole>This is card content top</CardHole>
        <CardHole color="gray-20">This is card content bottom</CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Full and centered">
      <Card full centered>
        <CardHole color="gray-40">This is card content top</CardHole>
        <CardHole color="gray-50">This is card content bottom</CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="No border">
      <Card noBorder padding={CARD_PADDING.SMALL}>
        <CardHole color="gray-40">This is card content top</CardHole>
        <CardHole color="gray-50">This is card content bottom</CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="With shadow">
      <Card shadow padding={CARD_PADDING.SMALL}>
        <CardHole>This is card content top</CardHole>
        <CardHole color="indigo-30">This is card content bottom</CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Vertical with small padding">
      <Card vertical padding={CARD_PADDING.SMALL}>
        <CardHole color="indigo-20">This is card content left</CardHole>
        <CardHole>This is card content right</CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Example use">
      <Card padding={CARD_PADDING.SMALL}>
        <CardHole color="gray-40">
          <ContentBox>
            <ContentBoxHeader>
              <Headline type={HEADLINE_TYPE.H3}>
                Ask a question about a school subject
              </Headline>
            </ContentBoxHeader>
            <ContentBoxContent>And add some description</ContentBoxContent>
          </ContentBox>
        </CardHole>
      </Card>
    </DocsBlock>
  </div>
);

export default Cards;
