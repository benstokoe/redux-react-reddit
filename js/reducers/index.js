import { combineReducers } from 'redux';

const subreddits = (state = {
  currentSubreddit: 'hot'
}, action) => {
  switch (action.type) {
  case 'LOADED_SUBREDDITS':
    return Object.assign({}, state, action.subreddits.data);
  case 'UPDATE_SUBREDDIT':
    return Object.assign({}, state, { currentSubreddit: action.subreddit });
  default:
    return state;
  }
};

const posts = (state = {}, action) => {
  switch (action.type) {
  case 'LOADED_POSTS':
    return Object.assign({}, state, action.posts.data);
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  subreddits,
  posts
});

export default rootReducer;
