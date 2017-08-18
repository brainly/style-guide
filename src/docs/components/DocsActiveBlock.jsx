import React, {Component} from 'react';
import PropTypes from 'prop-types';
import generateJSX from './JSXGenerator';
import DocsActiveBlockSettings from './DocsActiveBlockSettings';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';
import DocsBlock from './DocsBlock';
import ReactDOMServer from 'react-dom/server';
import classnames from 'classnames';

const BACKGROUND_COLOR = {
  LIGHT: 'light',
  DARK: 'dark',
  NONE: 'none'
};

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
        }, {key: 'component'});
    }


    this.state = {
      showCode: null,
      changeBackground: this.props.backgroundColor || BACKGROUND_COLOR.LIGHT,
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

  getPropsToRemove(props) {
    const settings = this.props.settings;

    if (!Array.isArray(settings)) {
      return [];
    }

    const unchangedProps = Object.keys(props)
      .filter(key => {
        const propSettings = settings.find(setting => setting.name === key.value);

        return !!(!propSettings || propSettings.required);
      });

    return Object.keys(props)
      .filter(key => unchangedProps.indexOf(key) > -1);
  }

  removePropsWithDefaultValues(props) {
    const fewerProps = Object.assign(props);
    const propsToRemove = this.getPropsToRemove(props);

    for (const prop in propsToRemove) {
      if (fewerProps.hasOwnProperty(prop)) {
        delete fewerProps[prop];
      }
    }

    return fewerProps;
  }

  render() {
    let {contentBefore, contentAfter} = this.props;
    const {centeredItems = true, wrapper} = this.props;
    let component;
    let code;

    if (this.state.renderNormally) {
      component = React.cloneElement(this.props.children, this.removePropsWithDefaultValues(this.state.props));

      if (this.state.showCode === 'jsx') {
        const jsx = generateJSX(component);

        code = <DocsBlock><CodeBlock type="jsx">{jsx}</CodeBlock></DocsBlock>;
      } else if (this.state.showCode === 'html') {
        const html = ReactDOMServer.renderToStaticMarkup(component);

        code = <DocsBlock><CodeBlock type="html">{html}</CodeBlock></DocsBlock>;
      }
    }

    const blockClass = classnames('docs-active-block', {
      'docs-active-block--gray': this.state.changeBackground === BACKGROUND_COLOR.LIGHT,
      'docs-active-block--dark': this.state.changeBackground === BACKGROUND_COLOR.DARK
    });

    const componentClass = classnames('docs-active-block__component', {
      'docs-active-block__component--centered': centeredItems
    });

    let output = [];

    if (contentBefore) {
      if (React.isValidElement(contentBefore)) {
        contentBefore = React.cloneElement(contentBefore, {key: 'before'});
      }

      output.push(contentBefore);
    }

    output.push(component);

    if (contentAfter) {
      if (React.isValidElement(contentAfter)) {
        contentAfter = React.cloneElement(contentAfter, {key: 'after'});
      }

      output.push(contentAfter);
    }

    if (wrapper) {
      output = React.cloneElement(wrapper, {}, output);
    }

    return <div>
      <DocsBlock>
        <div className={blockClass}>
          <div className={componentClass}>
            {output}
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
  centeredItems: PropTypes.bool,
  contentBefore: PropTypes.node,
  contentAfter: PropTypes.node,
  wrapper: PropTypes.element,
  backgroundColor: PropTypes.oneOf(Object.values(BACKGROUND_COLOR))
};

export default DocsActiveBlock;
export {BACKGROUND_COLOR};
