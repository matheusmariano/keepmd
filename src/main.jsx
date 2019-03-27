import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';
import HomeScreen from './screens/home';
import { locale, messages } from './services/intl';
import { InjectIntlContext } from './services/intl/context';
import './services';

const Main = () => (
  <IntlProvider
    locale={locale}
    messages={messages[locale]}
  >
    <InjectIntlContext>
      <Helmet htmlAttributes={{ lang: locale }} />
      <HomeScreen />
    </InjectIntlContext>
  </IntlProvider>
);

render(<Main />, document.getElementById('app'));
