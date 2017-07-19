import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ComponentBlock extends Component {

  constructor(props) {
    super(props);
    this.oldHTML = '';
  }

  componentDidMount() {
    this.updateHTML();
  }

  componentDidUpdate() {
    this.updateHTML();
  }

  updateHTML() {
    if (!this.props.onHTMLChanged) {
      return;
    }

    const html = ReactDOM.findDOMNode(this).innerHTML;

    if (this.oldHTML !== html) {
      this.props.onHTMLChanged(html);
      this.oldHTML = html;
    }
  }

  render() {
    return <div className="docs-active-block__component">{this.props.component}</div>;
  }
}

ComponentBlock.propTypes = {
  component: PropTypes.element.isRequired,
  centered: PropTypes.bool,
  toBottom: PropTypes.bool,
  onHTMLChanged: PropTypes.func
};

export default ComponentBlock;
