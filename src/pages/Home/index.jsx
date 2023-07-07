import React, { useEffect, useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";

const Home = ({ blog, setBlog }) => {
  const [searchKey, setSearchKey] = useState("");
  const [demoSearchKey, setDemoSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    setDemoSearchKey(blog);
    const filteredBlogs = blog.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlog(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlog(demoSearchKey);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blog.length ? <EmptyList /> : <BlogList blog={blog} />}
    </div>
  );
};

export default Home;
