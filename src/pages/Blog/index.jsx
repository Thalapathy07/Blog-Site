import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import EmptyList from '../../components/Common/EmptyList';
import Chip from '../../components/Common/Chip';
import './styles.css';
import { blogList } from '../../config/data';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if(blog){
      setBlog(blog);
    };
  }, []);

  return (
    <div>
        <Link className='blog-goBack' to='/'>
          <span>&#8592;</span> <span>Go Back </span>
        </Link>

        {blog ? (<div className="blog-wrap">
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className="blog-subCategory">
                {blog.subCategory.map((category,index) => 
                  (<div> 
                    <Chip key={index} label={category} />
                  </div>))}
              </div>

            </header>
            <img src={blog.cover} alt='cover' />
            <p className='blog-description'>
              {blog.description}
            </p>
          </div>
          ) : (
            <EmptyList />
            )}
        
    </div>
  );
};

export default Blog;