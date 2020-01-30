import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoadableDeck from './utils/loadable-deck';
import Menu from './utils/menu';

const PrintButton = () => {
  const onClick = React.useCallback(() => {
    const currentPath = `${window.location.origin}${window.location.pathname}`;
    debugger;
    window.location = window.location.hash.includes('export&print')
      ? currentPath
      : `${currentPath}#/?export&print`;
  }, []);

  const text = window.location.hash.includes('export&print')
    ? 'Slides'
    : 'Print';
  
  return <span className="print_button" onClick={onClick}>{text} Version</span>;
};

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Route component={PrintButton} />
      <Route component={Menu} />
      <Switch>
        <Route path="/:section?/:topic" component={LoadableDeck} />
        <Redirect exact from="/" to="/about-the-course/" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>);
};
