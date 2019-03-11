import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import 'brace/mode/markdown';
import 'brace/theme/tomorrow';

class Editor extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  setContentState(content) {
    this.setState({
      content,
    });
  }

  contentDidChange(content) {
    this.setContentState(content);
  }

  render() {
    const { content } = this.state;
    const { className } = this.props;

    return (
      <div className={`columns is-gapless ${className}`}>
        <div className="column is-half">
          <AceEditor
            width="100%"
            height="100%"
            mode="markdown"
            onChange={value => this.contentDidChange(value)}
            showPrintMargin={false}
            tabSize={2}
            theme="tomorrow"
            value={content}
          />
        </div>
        <div className="column is-half">
          <div className="content has-margin-lg">
            <Markdown source={content} />
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
