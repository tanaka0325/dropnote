import React, { PropTypes } from 'react';

import FileList from './FileList.jsx';

const propTypes = {
  rootPath: PropTypes.string.isRequired,
  handleFileItemClick: PropTypes.func.isRequired,
};

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };

    this._handleFileItemClick = this._handleFileItemClick.bind(this);
  }

  _handleFileItemClick(fileName) {
    this.props.handleFileItemClick(fileName);
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
          <FileList listPath={this.props.rootPath} handleFileItemClick={this._handleFileItemClick} />
        </nav>

      </div>
    );
  }
}

SideMenu.propTypes = propTypes;
