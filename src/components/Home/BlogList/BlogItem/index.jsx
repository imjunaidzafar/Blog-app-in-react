import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    id,
    title,
    details,
    category,
    name,
    image,
    date
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={image} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{details}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h6>Posted By: {name}</h6>
          </div>
        </div>
            <h6>{date}</h6>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
