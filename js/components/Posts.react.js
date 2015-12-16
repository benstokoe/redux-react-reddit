import React from 'react';
import Post from './Post.react';

const Posts = ({ posts }) => {
  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <section id="posts">
      {
        posts.map(post => {
          return <Post post={ post.data } />;
        })
      }
    </section>
  );
};

export default Posts;
