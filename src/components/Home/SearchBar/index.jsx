import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) =>

(
 <div className='container1'>
 <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
    <Link to='/create-blog' className='btn1'>Add Post</Link>
  </div>
);

export default SearchBar;
