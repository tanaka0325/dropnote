import React, { PropTypes } from 'react';
import path from 'path';

import FileList from './FileList.jsx';

const propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpand: false,
      isActive: false,
    };

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      isExpand: !this.state.isExpand,
      isActive: !this.state.isActive,
    });
  }

  render() {
    const arrowIcon = this.state.isExpand ? 'icon icon-down-dir' : 'icon icon-right-dir';
    // const navClasses = this.state.isActive ? 'nav-group-item active' : 'nav-group-item';
    const navClasses = 'nav-group-item';

    return (
      <span className={navClasses}>
        <div onClick={this._onClick}>
          <span className={arrowIcon} />
          <span className="icon icon-folder" />
          {this.props.name}
        </div>
        {(() => {
          if (this.state.isExpand) {
            return <FileList path={path.join(this.props.path, this.props.name)} />;
          }
        })()}
      </span>
    );
  }
}

Directory.propTypes = propTypes;
