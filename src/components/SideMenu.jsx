import React, { PropTypes } from 'react';
import fs from 'fs';
import path from 'path';

import SideMenuItem from './SideMenuItem.jsx';

const propTypes = {
  stragePath: PropTypes.string.isRequired,
};

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      activeItemName: '',
    };

    this.getFileList = this.getFileList.bind(this);
    this._changeActiveFile = this._changeActiveFile.bind(this);
  }

  componentDidMount() {
    this.getFileList();
  }

  getFileList() {
    const fileList = [];
    fs.readdirSync(this.props.stragePath).forEach((file) => {
      if (fs.statSync(path.join(this.props.stragePath, file)).isDirectory()) {
        fileList.push([file, 'dir']);
      } else if (file[0] !== '.') {
        fileList.push([file, 'file']);
      } else {
        fileList.push([file, 'dotfile']); // if you render dotfiles, delete comment out.
      }
    });
    this.setState({ fileList });
  }

  _changeActiveFile(clickedFileName) {
    this.setState({
      activeItemName: clickedFileName,
    });
    this.props.openFile(clickedFileName);
  }

  render() {
    const fileNodes = this.state.fileList.map((file, i) => {
      return (
        <SideMenuItem
          key={i}
          fileName={file[0]}
          fileType={file[1]}
          isActive={this.state.activeItemName === file[0]}
          _changeActiveFile={this._changeActiveFile}
        />
      );
    });

    return (
      <div className="pane-sm sidebar">

        <nav className="nav-group">
          <h5 className="nav-group-title">Recent Files</h5>
          <span className="nav-group-item">
            <span className="icon icon-doc-text" />
            file
          </span>
          <span className="nav-group-item">
            <span className="icon icon-doc-text" />
            file
          </span>

          <h5 className="nav-group-title">Files</h5>
          {fileNodes}
        </nav>

      </div>
    );
  }
}

SideMenu.propTypes = propTypes;
