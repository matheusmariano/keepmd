import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import 'brace/mode/markdown';
import 'brace/theme/tomorrow';

const Editor = ({ className }) => {
  const [content, setContent] = useState('');

  const contentDidChange = (value) => {
    setContent(value);
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
