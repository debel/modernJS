const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const layouts = require('metalsmith-layouts');
const marked = require('marked');

const renderer = new marked.Renderer();
renderer.heading = (text, level) => `</section><section><h${level}>${text}</h${level}>`;
renderer.link = (href, _, text) => `<a href="/docs${href}">${text}</a>`;

metalsmith(__dirname)
  .metadata({
    siterul: 'https://modern-js.github.io'
  })
  .source('./topics')
  .destination('docs')
  .clean(true)
  .use(collections({
    'dataStructures': 'data-structures/*.md',
    'languageFeatures': 'language-features/*.md'
  }))
  .use(markdown({ renderer }))
  .use(permalinks())
  .use(layouts({ engine: 'handlebars', default: 'no-title-slide.html' }))
  .build(error => console.error(error));
