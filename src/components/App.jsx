import React from 'react';

import SideMenu from './SideMenu.jsx';
import Editor from './Editor.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openedFileName: '',
      stragePath: '/Users/tanaka/Dropbox/tmp',
    };
  }


  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <SideMenu stragePath={this.state.stragePath} />
            <Editor />
          </div>
        </div>
      </div>
    );
  }
}
