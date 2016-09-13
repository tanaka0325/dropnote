import React, { PropTypes } from 'react';

import FileList from './FileList.jsx';

const propTypes = {
  rootPath: PropTypes.string.isRequired,
};

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
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
          <FileList listPath={this.props.rootPath} />
        </nav>

      </div>
    );
  }
}

SideMenu.propTypes = propTypes;
