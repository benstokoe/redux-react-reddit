import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddits } from '../actions/redditActions';

import Subreddits from '../components/Subreddits.react';

@connect(state => {
  return { subreddits: state.subreddits };
})
class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    subreddits: PropTypes.object
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSubreddits());
  }

  render() {
    const { children: subreddits } = this.props.subreddits;

    if (!subreddits) {
      return <p>Loading</p>;
    }

    return (
      <section id="reddit">
        <h1>Reddit</h1>

        <Subreddits subreddits={ subreddits } />
      </section>
    );
  }
}

export default App;
