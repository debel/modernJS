const metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const layouts = require('metalsmith-layouts');
const marked = require('marked');

const markAndFilterIndex = (topic, index, collection) => {
  if (topic.path.endsWith('index.md')) {
    topic.layout = 'topic-index.html';
    topic.dontRender = true;
    topic.collectionArray = collection;
    return false;
  }

  return true;
}

const markPageEnds = pageSize => (topic, index) => {
  if (index !==0 && index % pageSize === 0) {
    topic.nextPage = true;
  }
  return topic;
};

const renderer = new marked.Renderer();
renderer.heading = (text, level) => `</section><section><h${level}>${text}</h${level}>`;
renderer.link = (href, _, text) => `<a href="${href}">${text}</a>`;

metalsmith(__dirname)
  .metadata({
    siterul: 'https://modern-js.github.io'
  })
  .source('./topics')
  .destination('docs')
  .clean(true)
  .use(collections({
    'languageFeatures': 'language-features/*.md',
    'dataStructures': 'data-structures/*.md',
    'hostEnvironments': 'host-environments/*.md',
    'developmentTools': 'development-tools/*.md',
    'frameworksAndLibraries': 'frameworks-and-libraries/*.md',
    'patternsAndPrinciples': 'patterns-and-principles/*.md'
  }))
  .use((files, metal, done) => {
    Object.keys(metal._metadata.collections)
      .forEach(collectionName => {
        metal._metadata.collections[collectionName] =
          metal._metadata.collections[collectionName]
            .sort((a, b) => (a.page || 99) - (b.page || 99))
            .filter(markAndFilterIndex)
            .map(markPageEnds(7));
    });
    done();
  })
  .use(markdown({ renderer }))
  .use(permalinks())
  .use(layouts({ engine: 'handlebars', default: 'default.html' }))
  .build(error => error ? console.error(error) : console.log('Markdown -> HTML OK'));
