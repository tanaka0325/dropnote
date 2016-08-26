import React from 'react';
import Codemirror from 'react-codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/edit/continuelist';

export default class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
      mode: 'markdown',
    };

    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
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
        <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
      </div>
    );
  }
}
