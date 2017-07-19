import React, {Component} from 'react';
import PropTypes from 'prop-types';
import generateJSX from './JSXGenerator';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';
import ComponentBlock from './ComponentBlock';
import DocsBlock from './DocsBlock';

class DocsActiveBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      props: {},
      html: ''
    };

    if (this.props.children) {
      const props = this.props.children.props;

      this.state.props = Object.keys(props)
        .filter(key => props.hasOwnProperty(key))
        .reduce((result, key) => {
          result[key] = props[key];
          return result;
        }, {});
    }
  }

  onHTMLChanged(html) {
    this.setState({
      html
    })
  }

  setProps(key, value) {
    const props = this.state.props;
    props[key] = value;

    this.setState({
      props
    })
  }

  render() {
    const component = React.cloneElement(this.props.children, this.state.props);

    const jsx = generateJSX(component);
    const html = this.state.html;

    return <div>
      <DocsBlock>
        <div className="docs-active-block">
          <ComponentBlock component={component} onHTMLChanged={this.onHTMLChanged.bind(this)}/>
          <ComponentSettings onChange={this.setProps.bind(this)} settings={this.props.settings}
                             values={this.state.props}/>
        </div>
      </DocsBlock>
      <DocsBlock info="JSX">
        <CodeBlock type="jsx">{jsx}</CodeBlock>
      </DocsBlock>
      <DocsBlock info="HTML">
        <CodeBlock type="html">{html}</CodeBlock>
      </DocsBlock>
    </div>;
  }
}

DocsActiveBlock.propTypes = {
  children: PropTypes.node,
};

export default DocsActiveBlock;
