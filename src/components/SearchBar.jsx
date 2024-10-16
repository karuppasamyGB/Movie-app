import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (title.trim() !== '') {
      onSearch(title);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search for a movie..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`search-input ${isFocused || title ? 'expanded' : ''}`}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;