import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import Search from '../../components/Home/Search';
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../config/data';
import EmptyList from '../../components/Common/EmptyList';


const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search Submit
  const handleSearchSubmit = event => {
    event.preventDefault(); //to protect form from getting submitted by default
    handleSearchResults();

  };

  // Search for blogs by category
  const handleSearchResults = () => {
    const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };



  return (
    <div>
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <Search value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchSubmit} handleSearchKey={(e)=>setSearchKey(e.target.value)}/>

        {/* Blog List */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

    </div>
  );
};

export default Home;