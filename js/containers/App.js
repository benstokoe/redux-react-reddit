import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits, updateSubreddit } from '../actions/redditActions';

import Subreddits from '../components/Subreddits.react';

@connect(state => {
  return {
    subreddits: state.subreddits
  };
})
class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    subreddits: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.handleSubredditClick = this.handleSubredditClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSubreddits());
  }

  handleSubredditClick(subreddit) {
    const { dispatch } = this.props;
    dispatch(updateSubreddit(subreddit));
  }

  render() {
    const { children: subreddits } = this.props.subreddits;

    if (!subreddits) {
      return <p>Loading</p>;
    }

    const { currentSubreddit } = this.props.subreddits;
    console.log(currentSubreddit);

    return (
      <section id="reddit">
        <h1>Reddit</h1>

        <Subreddits subreddits={ subreddits } onSubredditClick={ this.handleSubredditClick } />
      </section>
    );
  }
}

export default App;
