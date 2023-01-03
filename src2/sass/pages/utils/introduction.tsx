import * as React from "react";
import DocsBlock from "components/DocsBlock";

const index = () => (
  <div>
    <DocsBlock>
      Utilities are single purpose flexible classes based on design system
      variables. They are meant to provide building blocks for custom designs in
      application and styleguide without writing additional CSS. Because of the
      nature of utility classes they are also good choice to override other
      styles in places where additional tweaking is needed.
    </DocsBlock>
    <DocsBlock info="Responsive design">
      Utility classes can provide responsive versions available by prefix the
      utility with the breakpoint name using following formula:
      <pre>
        <code>[breakpoint]:sg-[utility-class]</code>
      </pre>
    </DocsBlock>
    <DocsBlock info="Pseudo variants">
      Utility classes can be also applied or changed per pseudo class versions
      available by prefix the utility with the pseudo variant name using
      following formula:
      <pre>
        <code>[pseudo]:sg-[utility-class]</code>
      </pre>
    </DocsBlock>
    <DocsBlock info="Mix variants">
      Responsive design prefix work with pseudo variants using the following
      forumla:
      <pre>
        <code>[breakpoint]:[pseudo]:sg-[utility-class]</code>
      </pre>
    </DocsBlock>
  </div>
);

export default index;