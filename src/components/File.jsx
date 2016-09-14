import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
};

export default class ItemFile extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }


  _onClick() {
    console.log("clicked: " + this.props.name);
  }

  render() {
    const navClasses = ['nav-group-item'];
    return (
      <span className={navClasses.join(' ')}>
        <div onClick={this._onClick}>
          <span className="" />
          <span className="icon icon-doc-text" />
          {this.props.name}
        </div>
      </span>
    );
  }
}

ItemFile.propTypes = propTypes;
