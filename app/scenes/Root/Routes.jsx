import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      {/* eslint-disable */}
      <Route
        component={require('../Editor/').default}
        exact path="/"
      />
      <Route
        component={require('../NotFound/').default}
        path="*"
      />
      {/* eslint-enable */}
    </Switch>
  );
}
