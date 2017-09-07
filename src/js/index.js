const reveal = require('reveal.js');
const hljs = require('highlight.js');
global.hljs = hljs;

require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/black.css');
require('reveal.js/lib/css/zenburn.css');

require('../css/index.css');

require('reveal.js/plugin/highlight/highlight');

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

hljs.initHighlightingOnLoad();
