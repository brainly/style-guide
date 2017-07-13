import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateJSX from './JSXGenerator';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';

const ContentBlock = ({children, toBottom, centered}) => {
  const contentClass = classnames('docs-block__content', {
    'docs-block__content--to-bottom': toBottom,
    'docs-block__content--centered': centered
  });

  return <div className={contentClass}>
    {children}
  </div>;
};

ContentBlock.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  toBottom: PropTypes.bool
};

class DocsActiveBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    if(this.props.children) {
      const props = this.props.children.props;

      this.state = Object.keys(props)
        .filter(key => props.hasOwnProperty(key))
        .reduce((result, key) => {
          result[key] = props[key];
          return result;
        }, {});
    }
  }

  // componentDidUpdate() {
  //   this.html = ReactDOM.findDOMNode(this).querySelector('.docs-block__content').innerHTML;
  // }

  setProps(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const component = React.cloneElement(this.props.children, this.state);

    const jsx = generateJSX(component);
    const html = 'TODO';

    return <div>
      <section className="docs-block">
        <ContentBlock centered>{component}</ContentBlock>
        <ComponentSettings onChange={this.setProps.bind(this)} settings={this.props.settings} values={this.state}/>
      </section>
      <CodeBlock type="jsx">{jsx}</CodeBlock>
      <CodeBlock type="html">{html}</CodeBlock>
    </div>;
  }
}

DocsActiveBlock.propTypes = {
  children: PropTypes.node,
};

export default DocsActiveBlock;
