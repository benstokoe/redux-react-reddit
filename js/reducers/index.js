import { combineReducers } from 'redux';

function recieveSubreddits(state = {}, action) {
  switch (action.type) {
  case 'LOADED_SUBREDDITS':
    return Object.assign({}, state, action.subreddits.data);
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  subreddits: recieveSubreddits
});

export default rootReducer;
