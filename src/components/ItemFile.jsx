import React, { PropTypes } from 'react';

const propTypes = {
  fileName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleFileItemClick: PropTypes.func.isRequired,
};

export default class ItemFile extends React.Component {
  constructor() {
    super();

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.handleFileItemClick(this.props.fileName);
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
