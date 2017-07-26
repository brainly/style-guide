import React, {Component} from 'react';
import PropTypes from 'prop-types';
import generateJSX from './JSXGenerator';
import DocsActiveBlockSettings from './DocsActiveBlockSettings';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';
import DocsBlock from './DocsBlock';
import ReactDOMServer from 'react-dom/server';
import classnames from 'classnames';

class DocsActiveBlock extends Component {

  constructor(props) {
    super(props);

    let componentProps = {};

    if (this.props.children) {
      componentProps = this.props.children.props;
      componentProps = Object.keys(componentProps)
        .filter(key => componentProps.hasOwnProperty(key) && key !== 'children')
        .reduce((result, key) => {
          result[key] = componentProps[key];
          return result;
        }, {});
    }

    this.state = {
      showCode: null,
      changeBackground: 'light',
      props: componentProps,
      renderNormally: true
    };
  }

  setProps(key, value) {
    const props = this.state.props;

    props[key] = value;

    this.setState({
      props
    });
    this.remountComponent();
  }

  settingsChanged(setting, value) {
    this.setState({
      [setting]: value
    });
  }

  remountComponent() {
    this.setState({renderNormally: false}, () => this.setState({renderNormally: true}));
  }

  render() {
    let component;
    let code;

    if (this.state.renderNormally) {
      component = React.cloneElement(this.props.children, this.state.props);

      if (this.state.showCode === 'jsx') {
        const jsx = generateJSX(component);

        code = <DocsBlock><CodeBlock type="jsx">{jsx}</CodeBlock></DocsBlock>;
      } else if (this.state.showCode === 'html') {
        const html = ReactDOMServer.renderToStaticMarkup(component);

        code = <DocsBlock><CodeBlock type="html">{html}</CodeBlock></DocsBlock>;
      }
    }

    const blockClass = classnames('docs-active-block', {
      'docs-active-block--gray': this.state.changeBackground === 'light',
      'docs-active-block--dark': this.state.changeBackground === 'dark'
    });

    component = [this.props.contentBefore, component, this.props.contentAfter];

    if (this.props.wrapper) {
      component = React.cloneElement(this.props.wrapper, {}, component);
    }

    return <div>
      <DocsBlock>
        <div className={blockClass}>
          <div className="docs-active-block__component">
            {component}
          </div>
          <ComponentSettings onChange={this.setProps.bind(this)} settings={this.props.settings}
            values={this.state.props}/>
          <DocsActiveBlockSettings onChange={this.settingsChanged.bind(this)} values={this.state}/>
        </div>
      </DocsBlock>
      {code}
    </div>;
  }
}

DocsActiveBlock.propTypes = {
  children: PropTypes.element.isRequired,
  settings: PropTypes.array.isRequired,
  contentBefore: PropTypes.node,
  contentAfter: PropTypes.node,
  wrapper: PropTypes.element
};

export default DocsActiveBlock;
