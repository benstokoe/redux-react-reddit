import fetch from 'imports?self=>{},es6p=es6-promise,Promise=>es6p.Promise!exports?self.fetch!whatwg-fetch';

const REDDIT_URL = 'http://www.reddit.com';

export const receiveSubreddits = (subreddits) => {
  return {
    type: 'LOADED_SUBREDDITS',
    subreddits
  };
};

export const fetchSubreddits = () => {
  return dispatch => {
    return fetch(`${ REDDIT_URL}/subreddits/popular.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveSubreddits(json)));
  };
};

export const updateSubreddit = (subreddit) => {
  return {
    type: 'UPDATE_SUBREDDIT',
    subreddit
  };
};
