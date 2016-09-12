import React, { PropTypes } from 'react';
import fs from 'fs';
import Codemirror from 'react-codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/edit/continuelist';

const propTypes = {
  openedFilePath: PropTypes.string,
};

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      mode: 'markdown',
      saved: true,
    };

    this.readFile = this.readFile.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  // componentDidMount() {
  //   this.readFile(this.state.openedFilePath);
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.openedFilePath);
    this.readFile(nextProps.openedFilePath);
  }

  readFile(path) {
    const data = fs.readFileSync(path, 'utf8');
    this.setState({
      code: data,
    });
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
      saved: false,
    });
  }

  render() {
    const options = {
      mode: this.state.mode,
      lineNumbers: true,
      extraKeys: {
        Enter: 'newlineAndIndentContinueMarkdownList',
      },
    };

    return (
      <div className="pane">
        <Codemirror
          ref={ref => { this.editor = ref; }}
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
        />
      </div>
    );
  }
}

Editor.propTypes = propTypes;
