import 'react-hot-loader/patch';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import Home from './home';

require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Home />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./home', () => {
    const NextHome = require('./home').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextHome />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
