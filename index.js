import reveal from 'reveal.js';
import 'reveal.js/plugin/highlight/highlight.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';
import 'reveal.js/lib/css/zenburn.css';

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
