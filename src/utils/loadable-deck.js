import React from 'react';

import Deck from './styled-markdown-deck';

export default ({ match }) => {
  const section = (match && match.params.section) || null;
  const topic = (match && match.params.topic) || 'about-the-course';
  const fullPathToLecture = section
    ? `${section}/${topic}`
    : topic;
  debugger;
  const [content, setContent] = React.useState();
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
  }, [topic]);

  return <Deck
    key={topic}
    slides={content}
  />
}