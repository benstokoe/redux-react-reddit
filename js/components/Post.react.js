import React from 'react';

const Post = ({ post }) => (
  <p key={ post.id }>{ post.title }</p>
);

export default Post;
