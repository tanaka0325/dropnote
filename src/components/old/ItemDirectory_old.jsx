import React, { PropTypes } from 'react';
import fs from 'fs';
import path from 'path';

import FileList from './FileList.jsx';

const propTypes = {
  dirName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  rootPath: PropTypes.string.isRequired,
  handleFileItemClick: PropTypes.func.isRequired,
};

export default class ItemDirectory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpand: false,
      fileList: [],
    };

    this._onClick = this._onClick.bind(this);
    this.expand = this.expand.bind(this);
    this._handleFileItemClick = this._handleFileItemClick.bind(this);
  }

  expand(dirname) {
    const fileList = [];
    fs.readdirSync(path.join(this.props.rootPath, dirname)).forEach((file) => {
      fileList.push(file);
    });
    this.setState({ fileList });
  }

  _onClick() {
    if (!this.state.isExpand) {
      this.expand(this.props.dirName);
    }
    this.setState({
      isExpand: !this.state.isExpand,
    });
  }

  _handleFileItemClick(fileName) {
    this.props.handleFileItemClick(path.join(this.props.dirName, fileName));
  }

  render() {
    const arrowIcon = this.state.isExpand ? 'icon icon-down-dir' : 'icon icon-right-dir';
    const navClasses = ['nav-group-item'];

    if (this.props.isActive) {
      navClasses.push('active');
    }
    return (
      <span className={navClasses.join(' ')}>
        <span onClick={this._onClick}>
          <span className={arrowIcon} />
          <span className="icon icon-folder" />
          {this.props.dirName}
        </span>
        {(() => {
          if (this.state.isExpand) {
            return <FileList listPath={path.join(this.props.rootPath, this.props.dirName)} handleFileItemClick={this._handleFileItemClick} />;
          }
        })()}
      </span>
    );
  }
}

ItemDirectory.propTypes = propTypes;
