import React from 'react';
import Subreddit from './Subreddit.react';

const Subreddits = ({ subreddits, onSubredditClick }) => (
  <section key="hi" id="subreddits">
    <h2>Subreddits</h2>

    {
      subreddits.map(subreddit => {
        const { data } = subreddit;
        return (
          <Subreddit
            key={ data.display_name }
            subreddit={ data }
            onSubredditClick={ onSubredditClick }
          />
        );
      })
    }

  </section>
);

export default Subreddits;
