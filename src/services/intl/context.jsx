import React, { createContext, useContext } from 'react';
import { injectIntl } from 'react-intl';

export const IntlContext = createContext({});

export const InjectIntlContext = injectIntl(({ intl, children }) => (
  <IntlContext.Provider value={intl}>
    { children }
  </IntlContext.Provider>
));

export const useFormattedMessage = () => {
  const { formatMessage } = useContext(IntlContext);

  return formatMessage;
};
