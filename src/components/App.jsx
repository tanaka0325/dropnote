import React from 'react';
import path from 'path';

import SideMenu from './SideMenu.jsx';
import Editor from './Editor.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rootPath: '/Users/tanaka/Dropbox/tmp',
      openedFileName: 'file1.md',
    };

    this._handleFileItemClick = this._handleFileItemClick.bind(this);
  }

  _handleFileItemClick(fileName) {
    this.setState({
      openedFileName: fileName,
    });
  }

  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <SideMenu
              rootPath={this.state.rootPath}
              handleFileItemClick={this._handleFileItemClick}
            />
            <Editor openedFilePath={path.join(this.state.rootPath, this.state.openedFileName)} />
          </div>
        </div>
      </div>
    );
  }
}
