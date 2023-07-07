import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blog }) => {
  return (
    <div className='blogList-wrap'>
      {blog.map((item) => (
        <BlogItem blog={item} />
      ))}
    </div>
  );
};

export default BlogList;
