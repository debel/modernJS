import React from 'react';

import { Deck, MarkdownSlides } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./overrides.css');

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#CECECE',
    tertiary: '#68A063',
    quartenary: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const deckOptions = {
  theme,
  progress: 'bar',
  transition: ['slide'],
  transitionDuration: 200,
};

const StyledDeck = ({ slides, startingAt = 1, markdown = true }) => {
  const disableKeyboardControls = !!window.location.hash.includes('export&print');

  return <Deck {...deckOptions} disableKeyboardControls={disableKeyboardControls} >
    {slides && markdown ? MarkdownSlides(slides) : slides}
  </Deck>
};

export default StyledDeck;
