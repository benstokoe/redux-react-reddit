import fetch from 'imports?self=>{},es6p=es6-promise,Promise=>es6p.Promise!exports?self.fetch!whatwg-fetch';

const REDDIT_URL = 'http://www.reddit.com';

export function receiveSubreddits(subreddits) {
  return {
    type: 'LOADED_SUBREDDITS',
    subreddits
  };
}

export function fetchSubreddits() {
  return dispatch => {
    return fetch(`${ REDDIT_URL}/subreddits/popular.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveSubreddits(json)));
  };
}
