import React from 'react';
import beautify from 'html_beautify';
import hljs from 'hljs';

const CodeBlock = ({children, type}) => {
  if (typeof children !== "string") {
    throw new Error('Passed child is not a string.');
  }

  let markup = beautify(children, {
    indent_size: 2,
    unformatted: [],
    wrap_line_length: 0
  });

  if(type === 'jsx') {
    //HACK <i> was added to force highlightJS to highlight first tag
    markup = hljs.highlight('jsx', `<i>${markup}</i>`).value.slice(9, -78);
  } else {
    markup = hljs.highlight(type, markup).value;
  }

  return <div className="copy-helper copy-helper--wrapped">
    <pre className="copy-helper__code-wrapper">
      <code className="copy-helper__code hljs" dangerouslySetInnerHTML={{__html: markup}}>
      </code>
    </pre>
  </div>;
};

export default CodeBlock;
