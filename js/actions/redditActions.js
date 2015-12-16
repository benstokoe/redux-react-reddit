import fetch from 'imports?self=>{},es6p=es6-promise,Promise=>es6p.Promise!exports?self.fetch!whatwg-fetch';

const REDDIT_URL = 'https://www.reddit.com';

export const receiveSubreddits = (subreddits) => {
  return {
    type: 'LOADED_SUBREDDITS',
    subreddits
  };
};

export const receivePosts = (posts) => {
  return {
    type: 'LOADED_POSTS',
    posts
  };
};

export const fetchSubreddits = () => {
  return dispatch => {
    return fetch(`${ REDDIT_URL}/subreddits/popular.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveSubreddits(json)));
  };
};

export const fetchPosts = (subreddit) => {
  return dispatch => {
    const url = subreddit === 'hot' ? '/hot.json' : `/r/${ subreddit }/hot.json`;
    return fetch(`${ REDDIT_URL}${ url }`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  };
};

export const updateSubreddit = (subreddit) => {
  return {
    type: 'UPDATE_SUBREDDIT',
    subreddit
  };
};
