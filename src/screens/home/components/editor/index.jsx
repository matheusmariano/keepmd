import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import localforage from 'localforage';
import debounce from 'debounce';
import 'brace/mode/markdown';
import 'brace/theme/tomorrow';

const storeContentLocally = debounce((content) => {
  localforage.setItem('content', content);
}, 1000);

const retrieveContentLocally = () => localforage.getItem('content');

const Editor = ({ className }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    retrieveContentLocally().then((retrievedContent) => {
      setContent(retrievedContent);
    });
  }, []);

  const contentDidChange = (updatedContent) => {
    setContent(updatedContent);
    storeContentLocally(updatedContent);
  };

  return (
    <div className={`columns is-gapless ${className}`}>
      <div className="column is-half">
        <AceEditor
          width="100%"
          height="100%"
          mode="markdown"
          onChange={contentDidChange}
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
};

Editor.propTypes = {
  className: PropTypes.string,
};

Editor.defaultProps = {
  className: '',
};

export default Editor;
