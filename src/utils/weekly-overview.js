import React from 'react';
import topics from '../topics';
import Deck from './styled-markdown-deck';
import { NavLink } from 'react-router-dom';
import { Slide, List, ListItem } from 'spectacle';

export default ({ match, location }) => {
  const week = match.params.week || 0;
  debugger;
  return <Deck
    markdown={false}
    key={`${week}-overview`}
    slides={[
        <Slide>
            <h3>{topics[week].title}</h3>
            <List>
              {topics[week].items.map(topic => <ListItem><NavLink to={topic.link}>{topic.text}</NavLink></ListItem>)}
            </List>
        </Slide>
    ]}
  />
}