import React, {Component} from 'react';
import PropTypes from 'prop-types';
import generateJSX from './JSXGenerator';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';
import DocsBlock from './DocsBlock';
import ReactDOMServer from 'react-dom/server';

class DocsActiveBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      props: {}
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
    const html = ReactDOMServer.renderToStaticMarkup(component);

    return <div>
      <DocsBlock>
        <div className="docs-active-block">
          <div className="docs-active-block__component">
            {component}
          </div>
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
