// @flow

import React, {Component} from 'react';
import type {Node} from 'react';
// $FlowFixMe
import beautify from 'html_beautify';
// $FlowFixMe
import hljs from 'hljs';
import IconAsButton, {TYPE, ICON_COLOR} from 'icon-as-button/IconAsButton';

type PropsType = {
  children: Node,
  type: string
};

class CodeBlock extends Component<PropsType> {
  componentDidMount() {
    this.prepareClipboard();
  }

  copyButton: ?HTMLDivElement;
  copyCode: ?HTMLElement;

  prepareClipboard() {
    const copyButton = this.copyButton;
    const copyHelperCode = this.copyCode;

    new window.Clipboard(copyButton, {
      target() {
        return copyHelperCode;
      }
    });
  }

  copyCodeFunction = (node: ?HTMLElement) => {
    this.copyCode = node;
  };

  copyButtonFunction = (node: ?HTMLDivElement) => {
    this.copyButton = node;
  };

  render() {
    const {children, type} = this.props;

    if (typeof children !== 'string') {
      throw new Error('Passed child is not a string.');
    }

    let markup = beautify(children, {
      indent_size: 2,
      unformatted: [],
      wrap_line_length: 0
    });

    if (type === 'jsx') {
      //HACK <i> was added to force highlightJS to highlight first tag
      markup = hljs.highlight('jsx', `<i>${markup}</i>`).value;

      //Try to clean up <i>
      markup = markup
        .replace('&lt;i&gt;', '')
        .replace('&lt;/i&gt;', '')
        .replace('<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>', '');

    } else {
      markup = hljs.highlight(type, markup).value;
    }

    return (
      <div className="copy-helper copy-helper--wrapped">
        <pre className="copy-helper__code-wrapper">
          <code
            ref={this.copyCodeFunction}
            className="copy-helper__code hljs"
            dangerouslySetInnerHTML={{__html: markup}}
          />
        </pre>
        <div
          className="copy-helper__buttons"
          ref={this.copyButtonFunction}
        >
          <IconAsButton
            title="Copy to the clipboard"
            type={TYPE.ANSWER}
            color={ICON_COLOR.DARK}
          />
        </div>
      </div>
    );
  }
}

export default CodeBlock;
