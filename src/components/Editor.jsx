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

    this.addKeyMapInCm = this.addKeyMapInCm.bind(this);
    this.saveOpenedFile = this.saveOpenedFile.bind(this);
    this.readFile = this.readFile.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.openFile = this.openFile.bind(this);
  }

  componentDidMount() {
    this.openFile(this.props.openedFilePath);
  }

  componentWillReceiveProps(nextProps) {
    this.openFile(nextProps.openedFilePath);
  }

  addKeyMapInCm(keymaps) {
    const cm = this.editor.getCodeMirror();
    cm.addKeyMap(keymaps);
  }

  saveOpenedFile() {
    if (this.state.saved) return;
    fs.writeFileSync(this.props.openedFilePath, this.state.code);
    this.setState({
      saved: true,
    });
  }

  readFile(path) {
    const data = fs.readFileSync(path, 'utf8');
    this.setState({
      code: data,
    });
  }

  openFile(openFilePath) {
    this.readFile(openFilePath);

    const keymaps = {
      'Cmd-S': this.saveOpenedFile,
    };
    this.addKeyMapInCm(keymaps);
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
