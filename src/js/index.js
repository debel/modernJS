const reveal = require('reveal.js');
const hljs = require('highlight.js');

global.hljs = hljs;
require('reveal.js/plugin/highlight/highlight');

require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/black.css');
require('highlight.js/styles/atom-one-dark.css');
require('../css/index.css');

const initNav = require('./nav');

global.modernJS = {
  init(title) {

    reveal.initialize({
      width: 1024,
      height: 768,
      margin: 0.1,
      minScale: 0.1,
      maxScale: 1.3,
      transition: 'fade',
      transitionSpeed: 'fast',
      controls: true,
      history: true
    });

    initNav(title, reveal);

    hljs.initHighlightingOnLoad();

    if (document.referrer) {
      const back = document.getElementById('back-link');
      back.href = document.referrer;
      back.style.visibility = 'visibile';
    }
  }
};
