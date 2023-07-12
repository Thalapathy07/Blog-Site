import React from 'react';
import BlogItem from './Blogitem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
        {blogs.map((blog) => (<BlogItem blog={blog} key={blog.id} />))}
    </div>
  )
};

export default BlogList;