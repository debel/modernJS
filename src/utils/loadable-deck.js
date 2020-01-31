import React from 'react';

import Deck from './styled-markdown-deck';

export default ({ match, location }) => {
  const section = (match && match.params.section) || null;
  const topic = (match && match.params.topic) || 'about-the-course';
  const fullPathToLecture = section
    ? `${section}/${topic}`
    : topic;
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    if (location.hash.includes('print')) {
      const rootDomElement = document.getElementById('root');
      rootDomElement.classList.add('printing');
    }
  }, [location.hash]);

  React.useEffect(() => {
    topic && import(`../../topics/${fullPathToLecture}.md`)
      .catch(error => import('../error.md'))
      .then(loadedContent =>
        fetch(loadedContent.default)
          .then(res => res.text()))
          .then(loadedContent => {
        setContent(loadedContent);
        document.title = `INF310: ${topic}`;
        const hash = window.location.hash.length < 2
          ? '#/0'
          : window.location.hash;

        window.location.hash = hash;
      });
  }, [topic, fullPathToLecture]);

  return <Deck
    key={topic}
    slides={content}
  />
}