import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Footer from '../Footer';
import FooterLine from '../FooterLine';
import Text, {TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from 'text/Text';

import Link, {LINK_COLOR} from 'text/Link';
import Breadcrumb from 'breadcrumbs/Breadcrumb';

const Footers = () => {
  const settings = [];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Footer>
          <FooterLine>line</FooterLine>
          <FooterLine>line</FooterLine>
          <FooterLine>line</FooterLine>
        </Footer>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Footer>
          <FooterLine>
            <Breadcrumb
              elements={[
                <Link key={1} href="#" color={LINK_COLOR.GRAY}>
                  Regularmin
                </Link>,
                <Link key={2} href="#" color={LINK_COLOR.GRAY}>
                  Kontakt
                </Link>,
                <Link key={3} href="#" color={LINK_COLOR.GRAY}>
                  Jak zdobyć punkty?
                </Link>,
                <Link key={4} href="#" color={LINK_COLOR.GRAY}>
                  O nas
                </Link>,
                <Link key={5} href="#" color={LINK_COLOR.GRAY}>
                  Kariera
                </Link>,
              ]}
            />
          </FooterLine>
          <FooterLine>
            <Text size={TEXT_SIZE.SMALL} weight={TEXT_WEIGHT.BOLD}>
              <Breadcrumb
                adaptive
                elements={[
                  <Text key={1} type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
                    United States: <Link target="_blank">brainly.com</Link>
                  </Text>,
                  <Text key={2} type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
                    Poland: <Link target="_blank">brainly.pl</Link>
                  </Text>,
                  <Text key={3} type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
                    Russia/Ukraine: <Link target="_blank">znanija.com</Link>
                  </Text>,
                  <Text key={4} type={TEXT_TYPE.SPAN} size={TEXT_SIZE.SMALL}>
                    Latam: <Link target="_blank">brainly.lat</Link>
                  </Text>,
                ]}
              />
            </Text>
          </FooterLine>
          <FooterLine>
            <Text
              type={TEXT_TYPE.SPAN}
              size={TEXT_SIZE.SMALL}
              color={TEXT_COLOR.GRAY}
              weight={TEXT_WEIGHT.BOLD}
            >
              Strona korzysta z plików cookie w celu realizacji usług zgodnie z{' '}
              <Link>polityką cookie</Link>. Możesz określić warunki
              przechowywania lub dostępu do cookie w Twojej przeglądarce.
            </Text>
          </FooterLine>
        </Footer>
      </DocsActiveBlock>
    </div>
  );
};

export default Footers;
