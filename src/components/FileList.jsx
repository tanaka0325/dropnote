import React, { PropTypes } from 'react';
import fs from 'fs';
import path from 'path';

import ItemDirectory from './ItemDirectory.jsx';
import ItemFile from './ItemFile.jsx';

const propTypes = {
  listPath: PropTypes.string.isRequired,
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
    fs.readdirSync(this.props.listPath).forEach((file) => {
      if (fs.statSync(path.join(this.props.listPath, file)).isDirectory()) {
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
        return (
          <ItemDirectory
            key={i}
            dirName={file[0]}
            isActive={false}
            rootPath={this.props.listPath}
          />
        );
      }
      return (
        <ItemFile
          key={i}
          fileName={file[0]}
          isActive={false}
        />
      );
    });
    return (
      <div>
        { fileNodes }
      </div>
    );
  }
}

FileList.propTypes = propTypes;
