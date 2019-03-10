import React from 'react';
import Navbar from './components/navbar';
import Editor from './components/editor';
import './style.scss';

const HomeScreen = () => (
  <div>
    <Navbar />
    <Editor styleName="is-fullheight" />
  </div>
);

export default HomeScreen;
