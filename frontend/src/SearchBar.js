import React, { useState } from "react";

function SearchBar({ searchFor }) {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");


  function handleSubmit(evt) {

    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }


  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              name="searchTerm"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
  );
}

export default SearchBar;