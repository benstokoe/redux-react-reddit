import React from 'react';

const Subreddit = ({ subreddit }) => (
  <p key={ subreddit.display_name }>{ subreddit.display_name }</p>
);

export default Subreddit;
