import React from 'react';
import { Helmet } from 'react-helmet';
import { useFormattedMessage } from '../../services/intl/context';
import Navbar from './components/navbar';
import Editor from './components/editor';
import './style.scss';

const HomeScreen = () => {
  const formatMessage = useFormattedMessage();

  return (
    <div>
      <Helmet>
        <title>{formatMessage({ id: 'home.title' })}</title>
        <meta name="description" content={formatMessage({ id: 'home.description' })} />
      </Helmet>
      <Navbar />
      <Editor styleName="is-fullheight" />
    </div>
  );
};

export default HomeScreen;
