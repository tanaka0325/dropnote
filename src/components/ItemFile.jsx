import React, { PropTypes } from 'react';

const propTypes = {
  fileName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default class ItemFile extends React.Component {
  constructor() {
    super();

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    console.log("clicked file:" + this.props.fileName);
  }

  render() {
    const navClasses = ['nav-group-item'];
    if (this.props.isActive) {
      navClasses.push('active');
    }
    return (
      <span className={navClasses.join(' ')} onClick={this._onClick}>
        <span className="" />
        <span className="icon icon-doc-text" />
        {this.props.fileName}
      </span>
    );
  }
}

ItemFile.propTypes = propTypes;
