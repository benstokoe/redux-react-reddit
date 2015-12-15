import React, { Component, PropTypes } from 'react';

class Subreddit extends Component {
  static propTypes = {
    subreddit: PropTypes.object.isRequired,
    onSubredditClick: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.handleSubredditClick = this.handleSubredditClick.bind(this);
  }

  handleSubredditClick() {
    const { subreddit, onSubredditClick } = this.props;
    onSubredditClick(subreddit.display_name);
  }

  render() {
    const { subreddit } = this.props;
    return (
      <a
        href="#"
        className="subreddit"
        key={ subreddit.display_name }
        onClick={ this.handleSubredditClick }>
        { subreddit.display_name }
      </a>
    );
  }
}

export default Subreddit;
