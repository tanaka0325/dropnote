import React from 'react';

import SideMenu from './SideMenu.jsx';
import Editor from './Editor.jsx';

export default function App() {
  return (
    <div className="window">
      <div className="window-content">
        <div className="pane-group">
          <SideMenu />
          <Editor />
        </div>
      </div>
    </div>
  );
}
