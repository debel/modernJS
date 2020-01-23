import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoadableDeck from './utils/loadable-deck';
import Menu from './utils/menu';

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Route component={Menu} />
      <Switch>
        <Route path="/:section?/:topic" component={LoadableDeck} />
        <Redirect exact from="/" to="/about-the-course/" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>);
};
