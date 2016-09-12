import React, { PropTypes } from 'react';

const propTypes = {
  fileName: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired,
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
    const navClasses = ['nav-group-item'];
    if (this.props.isActive) {
      navClasses.push('active');
    }
    const fileIconClasses = ['icon', this.fileTypeToClassName(this.props.fileType)];
    let expandIconClass = (this.props.fileType === 'dir') ? 'icon icon-right-dir' : 'icon';

    return (
      <span className={navClasses.join(' ')} onClick={this._onClick}>
        <span className={expandIconClass} />
        <span className={fileIconClasses.join(' ')} />
        {this.props.fileName}
      </span>
    );
  }
}

SideMenuItem.propTypes = propTypes;
