import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import Logo, {TYPE} from '../Logo';

const Logos = () => (
  <div>
    <DocsBlock info="Brainly - default">
      <Logo />
    </DocsBlock>
    <DocsBlock info="Eodev">
      <Logo type={TYPE.EODEV} />
    </DocsBlock>
    <DocsBlock info="Nosdevoirs">
      <Logo type={TYPE.NOSDEVOIRS} />
    </DocsBlock>
    <DocsBlock info="Znanija">
      <Logo type={TYPE.ZNANIJA} />
    </DocsBlock>
    <DocsBlock info="Znanija Plus">
      <Logo type={TYPE.ZNANIJA_PLUS} />
    </DocsBlock>
    <DocsBlock info="Znanija Plus Inverse">
      <Logo type={TYPE.ZNANIJA_PLUS_INVERSE} />
    </DocsBlock>
    <DocsBlock info="Znanija Plus Small">
      <Logo type={TYPE.ZNANIJA_PLUS_SMALL} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus">
      <Logo type={TYPE.BRAINLY_PLUS} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus Inverse">
      <Logo type={TYPE.BRAINLY_PLUS_INVERSE} />
    </DocsBlock>
    <DocsBlock info="Brainly Plus Small">
      <Logo type={TYPE.BRAINLY_PLUS_SMALL} />
    </DocsBlock>
    <DocsBlock info="Brainly Tutoring">
      <Logo type={TYPE.BRAINLY_TUTORING} />
    </DocsBlock>
    <DocsBlock info="Brainly Tutoring Small">
      <Logo type={TYPE.BRAINLY_TUTORING_SMALL} />
    </DocsBlock>
    <DocsBlock info="Product Logo - Tutor">
      <Logo type={TYPE.LOGO_TUTOR} />
    </DocsBlock>
    <DocsBlock info="Product Logo - Math Solver">
      <Logo type={TYPE.LOGO_MATH_SOLVER} />
    </DocsBlock>
    <DocsBlock info="Product Logo - Community QA">
      <Logo type={TYPE.LOGO_COMMUNITY_QA} />
    </DocsBlock>
    <DocsBlock info="Product Logo - Textbook Detective">
      <Logo type={TYPE.LOGO_TEXTBOOK_DETECTIVE} />
    </DocsBlock>
    <DocsBlock info="Product Logotype - Brainly Tutor">
      <Logo type={TYPE.BRAINLY_LOGOTYPE_TUTOR} />
    </DocsBlock>
    <DocsBlock info="Product Logotype - Brainly Community QA">
      <Logo type={TYPE.BRAINLY_LOGOTYPE_COMMUNITY_QA} />
    </DocsBlock>
    <DocsBlock info="Product Logotype - Brainly Textbook Detective">
      <Logo type={TYPE.BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE} />
    </DocsBlock>
    <DocsBlock info="Product Logotype - Brainly Math Solver">
      <Logo type={TYPE.BRAINLY_LOGOTYPE_MATH_SOLVER} />
    </DocsBlock>
  </div>
);

export default Logos;
