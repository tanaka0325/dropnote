import React from 'react';
import fs from 'fs';
import path from 'path';

import SideMenuDir from './SideMenuDir.jsx';
import SideMenuFile from './SideMenuFile.jsx';

export default class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      stragePath: '/Users/tanaka/Dropbox/tmp',
      fileList: [],
    };

    this.getFileList = this.getFileList.bind(this);
  }

  componentDidMount() {
    this.getFileList();
  }

  getFileList() {
    const fileList = [];
    fs.readdirSync(this.state.stragePath).forEach((file) => {
      if (fs.statSync(path.join(this.state.stragePath, file)).isDirectory()) {
        fileList.push([file, 'dir']);
      } else if (file[0] !== '.') {
        fileList.push([file, 'file']);
      }
      // fileList.push([file, 'dotfile']); // if you render dotfiles, delete comment out.
    });
    this.setState({ fileList: fileList });
  }

  render() {
    const fileNodes = this.state.fileList.map((file) => {
      if (file[1] === 'dir') {
        return <SideMenuDir fileName={file[0]} />
      } else if (file[1] === 'file') {
        return <SideMenuFile fileName={file[0]} />
      }
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
