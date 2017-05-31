import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      {/* eslint-disable */}
      <Route
        component={require('../Editor/').default}
        exact path="/"
      />
      <Route
        render={() => (
          <Redirect to="/" />
        )}
        path="*"
      />
      {/* eslint-enable */}
    </Switch>
  );
}
