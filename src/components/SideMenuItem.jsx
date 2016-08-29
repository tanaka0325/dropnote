import React, { PropTypes } from 'react';

const propTypes = {
  fileName: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired,
};

export default class SideMenuItem extends React.Component {
  constructor() {
    super();

    this.fileTypeToClassName = this.fileTypeToClassName.bind(this);
  }

  fileTypeToClassName(fileType) {
    if (fileType === 'dir') {
      return 'icon-folder';
    } else if (fileType === 'file') {
      return 'icon-doc-text';
    } else if (fileType === 'dotfile') {
      return 'aaa';
    }
    return '';
  }

  render() {
    const fileIconClx = ['icon', this.fileTypeToClassName(this.props.fileType)];
    const expandIconClass = (this.props.fileType === 'dir') ? 'icon icon-right-dir' : 'icon';

    return (
      <span className="nav-group-item">
        <span className={expandIconClass} />
        <span className={fileIconClx.join(' ')} />
        {this.props.fileName}
      </span>
    );
  }
}

SideMenuItem.propTypes = propTypes;
