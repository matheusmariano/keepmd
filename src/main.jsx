import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import HomeScreen from './screens/home';
import { locale, messages } from './services/intl';
import './services';

const Main = () => (
  <IntlProvider
    locale={locale}
    messages={messages[locale]}
  >
    <HomeScreen />
  </IntlProvider>
);

render(<Main />, document.getElementById('app'));
