// @flow
import React, {Component} from 'react';
import type {Element} from 'react';
import generateJSX from './JSXGenerator';
import DocsActiveBlockSettings from './DocsActiveBlockSettings';
import ComponentSettings from './ComponentSettings';
import CodeBlock from './CodeBlock';
import DocsBlock from './DocsBlock';
import {renderToStaticMarkup} from 'react-dom/server.browser';
import classnames from 'classnames';

const BACKGROUND_COLOR = {
  LIGHT: 'light',
  DARK: 'dark',
  NONE: 'none'
};

type BackgroundColorType = 'light' | 'dark' | 'none';

type PropsType = {
  children: Element<any>,
  settings: Array<{
    name: string,
    values: any,
    required?: boolean
  }>,
  centeredItems?: boolean,
  contentBefore?: Element<*>,
  contentAfter?: Element<*>,
  wrapper: Element<*>,
  backgroundColor: BackgroundColorType
};

type StateType = {
  props: {[string]: number | string | boolean},
  renderNormally: boolean,
  changeBackground: BackgroundColorType,
  showCode: ?string
};

class DocsActiveBlock extends Component<PropsType, StateType> {

  constructor(props: PropsType) {
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

  isPropRequired(propName: string) {
    const settings = this.props.settings;

    if (Array.isArray(settings)) {
      const propSettings = settings.find(propSettings => propSettings.name === propName);

      return propSettings && propSettings.required;
    }

    return false;
  }

  /**
   * Returns only props that are required or have non-default values.
   *
   * @returns {Object} object representing react props
   */
  getCleanProps() {
    const component = Object.assign({}, this.props.children);

    if (typeof component.type === 'function') {
      const fakeComponentClass = component.type.bind();

      // rewrite static properties
      Object.entries(component.type).forEach(([key, value]) => fakeComponentClass[key] = value);

      fakeComponentClass.propTypes = {};
      component.type = fakeComponentClass;
    }

    const props = Object.assign({}, component.props, this.state.props);
    // $FlowFixMe
    const originalComponent = React.cloneElement(component, props);
    const originalHTML = renderToStaticMarkup(originalComponent);

    Object.keys(this.state.props).forEach(key => {
      if (key === 'key' || key === 'children' || props[key] === undefined || this.isPropRequired(key)) {
        return;
      }

      const inputPropsWithoutAProp = Object.assign({}, props, {[key]: undefined});
      // $FlowFixMe
      const componentWithoutAProp = React.cloneElement(component, inputPropsWithoutAProp);

      const withoutPropHTML = renderToStaticMarkup(componentWithoutAProp);

      if (originalHTML === withoutPropHTML) {
        props[key] = undefined;
      }
    });

    return props;
  }

  setProps = (key: string, value: number | string | boolean) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const props = this.state.props;

    props[key] = value;

    this.setState({
      props
    });
    this.remountComponent();
  };

  settingsChanged = (setting: string, value: mixed) => {
    this.setState({
      [setting]: value
    });
  };

  remountComponent() {
    this.setState({renderNormally: false}, () => this.setState({renderNormally: true}));
  }

  render() {
    let {contentBefore, contentAfter} = this.props;
    const {centeredItems = true, wrapper} = this.props;
    let component;
    let code;

    if (this.state.renderNormally) {
      component = React.cloneElement(this.props.children, this.getCleanProps());

      if (this.state.showCode === 'jsx') {
        const jsx = generateJSX(component);

        code = <DocsBlock><CodeBlock type="jsx">{jsx}</CodeBlock></DocsBlock>;
      } else if (this.state.showCode === 'html') {
        const html = renderToStaticMarkup(component);

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

    return (
      <div>
        <DocsBlock>
          <div className={blockClass}>
            <div className={componentClass}>
              {output}
            </div>
            <ComponentSettings
              onChange={this.setProps}
              settings={this.props.settings}
              values={this.state.props}
            />
            <DocsActiveBlockSettings onChange={this.settingsChanged} values={this.state} />
          </div>
        </DocsBlock>
        {code}
      </div>
    );
  }
}

export default DocsActiveBlock;
export {BACKGROUND_COLOR};
