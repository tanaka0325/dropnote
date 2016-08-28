import React from 'react';

export default class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
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
          <a className="nav-group-item active">
            <span className="icon icon-folder" />
            directory
          </a>
          <span className="nav-group-item">
            <span className="icon icon-doc-text" />
            file
          </span>
        </nav>

      </div>
    );
  }
}
