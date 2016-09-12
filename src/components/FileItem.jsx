import React, { PropTypes } from 'react';

const propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default class SideMenuItem extends React.Component {
  constructor() {
    super();

    this.fileTypeToClassName = this.fileTypeToClassName.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    this.props._changeActiveFile(e.target.textContent);
  }

  fileTypeToClassName(fileType) {
    if (fileType === 'dir') {
      return 'icon-folder';
    } else if (fileType === 'file') {
      return 'icon-doc-text';
    } else if (fileType === 'dotfile') {
      return 'icon-database';
    }
    return '';
  }

  render() {
    const fileIconClx = ['icon', this.fileTypeToClassName(this.props.fileType)];
    let expandIconClass = (this.props.fileType === 'dir') ? 'icon icon-right-dir' : 'icon';
    if (this.props.isActive) {
      expandIconClass = expandIconClass + ' active';
    };

    return (
      <span className="nav-group-item" onClick={this._onClick}>
        <span className={expandIconClass} />
        <span className={fileIconClx.join(' ')} />
        {this.props.fileName}
      </span>
    );
  }
}

SideMenuItem.propTypes = propTypes;
