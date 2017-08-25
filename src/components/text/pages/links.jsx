import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Link, {SIZE, COLOR} from '../Link';
import Text from '../Text';

const Links = () =>
  <DocsBlock info="Examples">
    <Text>
      <div>
        Some texts and a link <Link>Comments (9)</Link><br />
      </div>
      <div>
        Some texts and a disabled link <Link color={COLOR.GRAY} disabled>2 min ago</Link><br />
      </div>
      <div>
        An emphasized link <Link href="#" color={COLOR.GRAY} size={SIZE.SMALL} emphasised>Math</Link><br />
      </div>
      <div>
        Fine print link <Link href="#" color={COLOR.FINE_PRINT_LIGHT}>brainly.pl</Link><br />
      </div>
      <div>
        Fine print emphasised link <Link href="#" color={COLOR.FINE_PRINT} emphasised>Terms of use</Link><br />
      </div>
      <div>
        Example of <Link href="#" color={COLOR.PEACH}> error link</Link> and
        <Link color={COLOR.MUSTARD}> warning link</Link><br />
      </div>
      <div>
        Example of <Link href="#" color={COLOR.MINT}> mint link</Link><br />
      </div>
      <div>
        Some texts and a <Link href="#" underlined>underlined link</Link><br />
      </div>
      <div>
        Text with <Link href="#" unstyled>unstyled link</Link><br />
      </div>
      <div>
        Text with <Link href="#" size={SIZE.OBSCURE}>obscure link</Link><br />
      </div>
      <ContrastBox>
        <Text color={COLOR.LIGHT}>
          This text is light and <Link href="#" color={COLOR.LIGHT}>this link is light!</Link>
        </Text>
      </ContrastBox>
    </Text>
  </DocsBlock>;

export default Links;
