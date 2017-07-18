import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import Footer from '../Footer';
import FooterLine from '../FooterLine';
import Text, {TYPE as TEXT_TYPE, SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT} from '../../text/Text';
import Link from '../../text/Link';
import Breadcrumb from '../../breadcrumbs/Breadcrumb';

const Footers = () => <div>
  <DocsBlock info="Standard">
    <Footer>
      <FooterLine>line</FooterLine>
      <FooterLine>line</FooterLine>
      <FooterLine>line</FooterLine>
    </Footer>
  </DocsBlock>
  <DocsBlock info="Full">
    <Footer>
      <FooterLine>
        <Breadcrumb elements={[<Link color={TEXT_COLOR.GRAY}>Regularmin</Link>,
          <Link color={TEXT_COLOR.GRAY}>Kontakt</Link>,
          <Link color={TEXT_COLOR.GRAY}>Jak zdobyć punkty?</Link>,
          <Link color={TEXT_COLOR.GRAY}>O nas</Link>,
          <Link color={TEXT_COLOR.GRAY}>Kariera</Link>
        ]}/></FooterLine>
      <FooterLine>
        <Text size={TEXT_SIZE.SMALL} weight={TEXT_WEIGHT.BOLD}>
          <Breadcrumb adaptive={true} elements={[
            <Text type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
              United States: <Link target="_blank">brainly.com</Link>
            </Text>,
            <Text type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
            Poland: <Link target="_blank">brainly.pl</Link>
            </Text>,
            <Text type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
            Russia/Ukraine: <Link target="_blank">znanija.com</Link>
            </Text>,
            <Text type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
            Latam: <Link target="_blank">brainly.lat</Link>
            </Text>
          ]}/>
        </Text>
      </FooterLine>
      <FooterLine>
        <Text type={TEXT_TYPE.SPAN} size={TEXT_SIZE.OBSCURE} color={TEXT_COLOR.GRAY} weight={TEXT_WEIGHT.BOLD}>
          Strona korzysta z plików cookie w celu realizacji usług zgodnie z <Link>polityką cookie</Link>.
          Możesz określić warunki przechowywania lub dostępu do cookie w Twojej
          przeglądarce.
        </Text>
      </FooterLine>
    </Footer>
  </DocsBlock>
</div>;

export default Footers;
