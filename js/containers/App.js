import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits, fetchPosts, updateSubreddit } from '../actions/redditActions';

import Subreddits from '../components/Subreddits.react';
import Posts from '../components/Posts.react';

@connect(state => {
  const { subreddits, posts } = state;

  return {
    subreddits,
    posts
  };
})
class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    subreddits: PropTypes.object,
    posts: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.handleSubredditClick = this.handleSubredditClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, subreddits } = this.props;
    dispatch(fetchSubreddits());
    dispatch(fetchPosts(subreddits.currentSubreddit));
  }

  handleSubredditClick(subreddit) {
    const { dispatch } = this.props;
    dispatch(updateSubreddit(subreddit));
    dispatch(fetchPosts(subreddit));
  }

  render() {
    const { children: subreddits } = this.props.subreddits;
    const { children: posts } = this.props.posts;

    if (!subreddits) {
      return <p>Loading</p>;
    }

    // const { currentSubreddit } = this.props.subreddits;

    return (
      <section id="reddit">
        <h1>Reddit</h1>

        <Subreddits subreddits={ subreddits } onSubredditClick={ this.handleSubredditClick } />
        <Posts posts={ posts } />
      </section>
    );
  }
}

export default App;
