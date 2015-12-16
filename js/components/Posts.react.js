import React from 'react';
import Post from './Post.react';

const Posts = ({ posts }) => (
  <section id="posts">
    {
      posts.map(post => {
        return <Post post={ post.data } />;
      })
    }
  </section>
);

export default Posts;
