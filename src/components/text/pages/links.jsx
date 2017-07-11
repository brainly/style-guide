import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Link, {SIZE, COLOR} from '../Link';
import Text from '../Text';

const Links = () =>
  <DocsBlock info="Examples">
    <Text>
      <div>
        Some texts and a link <Link>Comments (9)</Link><br/>
      </div>
      <div>
        Some texts and a disabled link <Link color={COLOR.GRAY} disabled={true}>2 min ago</Link><br/>
      </div>
      <div>
        An emphasized link <Link color={COLOR.GRAY} size={SIZE.SMALL} emphasised={true}>Math</Link><br/>
      </div>
      <div>
        Fine print link <Link color={COLOR.FINE_PRINT_LIGHT}>brainly.pl</Link><br/>
      </div>
      <div>
        Fine print emphasised link <Link color={COLOR.FINE_PRINT} emphasised={true}>Terms of use</Link><br/>
      </div>
      <div>
        Example of <Link color={COLOR.PEACH}> error link</Link> and
        <Link color={COLOR.MUSTARD}> warning link</Link><br/>
      </div>
      <div>
        Example of <Link color={COLOR.MINT}> mint link</Link><br/>
      </div>
      <div>
        Some texts and a <Link underlined={true}>underlined link</Link><br/>
      </div>
      <div>
        Text with <Link unstyled={true}>unstyled link</Link><br/>
      </div>
      <div>
        Text with <Link size={SIZE.OBSCURE}>obscure link</Link><br/>
      </div>
      <ContrastBox>
        <Text color={COLOR.LIGHT}>
          This text is light and <Link color={COLOR.LIGHT}>this link is light!</Link>
        </Text>
      </ContrastBox>
    </Text>
  </DocsBlock>;

export default Links;
