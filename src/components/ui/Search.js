import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getQuery(search);
    setSearch("");
  };

  return (
    <section className="search">
      <form onSubmit={getSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={search}
          onChange={updateSearch}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
