import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import localforage from 'localforage';
import debounce from 'debounce';
import { FormattedMessage } from 'react-intl';
import 'brace/mode/markdown';
import 'brace/theme/tomorrow';
import HeaderLabel from './components/header-label';
import './style.scss';

const storeContentLocally = debounce((content) => {
  localforage.setItem('content', content);
}, 1000);

const retrieveContentLocally = () => localforage.getItem('content');

const Editor = ({ className }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    retrieveContentLocally().then((retrievedContent) => {
      if (retrievedContent) {
        setContent(retrievedContent);
      }
    });
  }, []);

  const contentDidChange = (updatedContent) => {
    setContent(updatedContent);
    storeContentLocally(updatedContent);
  };

  return (
    <div className={`columns is-gapless ${className}`}>
      <section
        aria-labelledby="editor-section-label"
        className="column is-half"
      >
        <HeaderLabel
          aria-hidden
          styleName="label"
        >
          <FormattedMessage id="home.editor.markdown">
            {label => (
              <span id="editor-section-label">{label}</span>
            )}
          </FormattedMessage>
        </HeaderLabel>
        <AceEditor
          width="100%"
          height="calc(100vh - 5rem)"
          mode="markdown"
          onChange={contentDidChange}
          showPrintMargin={false}
          tabSize={2}
          theme="tomorrow"
          value={content}
        />
      </section>
      <section
        aria-labelledby="preview-section-label"
        className="column is-half"
        styleName="preview"
      >
        <HeaderLabel
          aria-hidden
          styleName="label"
        >
          <FormattedMessage id="home.editor.preview">
            {label => (
              <span id="preview-section-label">{label}</span>
            )}
          </FormattedMessage>
        </HeaderLabel>
        <div className="content has-margin-lg">
          <Markdown source={content} />
        </div>
      </section>
    </div>
  );
};

Editor.propTypes = {
  className: PropTypes.string,
};

Editor.defaultProps = {
  className: '',
};

export default Editor;
