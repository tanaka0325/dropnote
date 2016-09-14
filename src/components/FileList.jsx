import React, { PropTypes } from 'react';
import fs from 'fs';
import path from 'path';

import Directory from './Directory.jsx';
import File from './File.jsx';

const propTypes = {
  path: PropTypes.string.isRequired,
};

export default class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
    };
  }

  componentDidMount() {
    this.getFileList();
  }

  getFileList() {
    const fileList = [];
    fs.readdirSync(this.props.path).forEach((file) => {
      if (fs.statSync(path.join(this.props.path, file)).isDirectory()) {
        fileList.push([file, 'dir']);
      } else if (file[0] !== '.') {
        fileList.push([file, 'file']);
      } else {
        fileList.push([file, 'dotfile']); // if you render dotfiles, delete comment out.
      }
    });
    this.setState({ fileList });
  }

  render() {
    const fileNodes = this.state.fileList.map((file, i) => {
      if (file[1] === 'dir') {
        return <Directory key={i} path={this.props.path} name={file[0]} />;
      }
      return <File key={i} name={file[0]} />;
    });
    return <div>{ fileNodes }</div>;
  }
}

FileList.propTypes = propTypes;
