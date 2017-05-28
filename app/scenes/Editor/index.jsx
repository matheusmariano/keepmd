import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import Highlight from 'react-highlight';
import R from 'ramda';
import debounce from 'debounce';
import 'brace/mode/markdown';
import 'brace/theme/xcode';
import 'highlight.js/styles/atom-one-light.css';
import EditorActions from '../../data/editor/redux';
import './styles.scss';

class EditorScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = R.pick(['editorContent'], props);
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'editor.page_title' });
  }

  componentWillReceiveProps({ editorContent }) {
    if (editorContent) {
      this.setEditorContent(editorContent);
    }
  }

  setEditorContent(editorContent) {
    this.setState({ editorContent });
  }

  editorDidChange(value) {
    this.setEditorContent(value);
    this.props.updateEditorContent(value);
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <div className="editor-page">
        <AceEditor
          height="calc(100vh - 3.45rem)"
          onChange={value => debounce(this.editorDidChange(value), 1000)}
          mode="markdown"
          showPrintMargin={false}
          tabSize={2}
          theme="xcode"
          value={this.state.editorContent}
          width="50%"
        />
        <section className="editor-page__preview">
          <Markdown
            className="editor-preview"
            renderers={{
              BlockQuote: ({ children }) => (
                <blockquote className="editor-preview__blockquote">
                  {children}
                </blockquote>
              ),
              Code: ({ literal }) => (
                <code className="editor-preview__code">{literal}</code>
              ),
              CodeBlock: ({ literal }) => (
                <Highlight className="editor-preview__code-block">{literal}</Highlight>
              ),
              Link: ({ href, children }) => (
                <a
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {children}
                </a>
              ),
            }}
            source={this.state.editorContent}
          />
        </section>
      </div>
    );
  }
}

EditorScene.propTypes = {
  editorContent: PropTypes.string.isRequired,
  updateEditorContent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    editorContent: state.editor.content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateEditorContent: debounce(
      editorContent => dispatch(EditorActions.editorUpdateContent(editorContent)),
      500,
    ),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditorScene),
);
