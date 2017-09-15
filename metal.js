const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const layouts = require('metalsmith-layouts');
const marked = require('marked');

const markAndFilterIndex = (topic, index, collection) => {
  if (topic.path.endsWith('index.md')) {
    topic.layout = 'topic-index.html';
    topic.isCollectionIndex = true;
    topic.collectionArray = collection;
    return false;
  }

  topic.nextTopic = collection[index + 1];
  topic.previousTopic = collection[index - 1];

  return true;
}

const markPageEnds = pageSize => (topic, index) => {
  if (index !==0 && index % pageSize === 0) {
    topic.nextPage = true;
  }
  return topic;
};

const newTabIfExternal = (href) =>
  href.indexOf('http') >= 0   ? 'target="_blank"' : '';

const renderer = new marked.Renderer();
renderer.heading = (text, level) => (
  // level === 1 ? '' : `</section><section><h${level}>${text}</h${level}>`
  level === 1 ? '' : `</section><section><h5 class="inline-h">${text}</h5>`
);
renderer.link = (href, _, text) => `<a href="${href}" ${newTabIfExternal(href)}>${text}</a>`;

metalsmith(__dirname)
  .metadata({
    siterul: 'https://modern-js.github.io'
  })
  .source('./topics')
  .clean(true)
  .use(collections({
    'Language Features': 'language-features/*.md',
    'Data Structures': 'data-structures/*.md',
    'Host Environments': 'host-environments/*.md',
    'Development Tools': 'development-tools/*.md',
    'Frameworks and Libraries': 'frameworks-and-libraries/*.md',
    'Patterns and Principles': 'patterns-and-principles/*.md'
  }))
  .use((files, metal, done) => {
    Object.keys(metal._metadata.collections)
      .forEach(collectionName => {
        metal._metadata.collections[collectionName] =
          metal._metadata.collections[collectionName]
            .sort((a, b) => (
              (((a.page || 10) * 100) + (a.rank || 10))  - (((b.page || 10) * 100) + (b.rank || 10))
            ))
            .filter(markAndFilterIndex)
            .map(markPageEnds(7));
    });
    done();
  })
  .use(markdown({ renderer }))
  .use(permalinks())
  .use(layouts({ engine: 'handlebars', default: 'default.html', partials: 'layouts/partials' }))
  .destination('docs')
  .build(error => error ? console.error(error) : console.log('Markdown -> HTML OK'));
