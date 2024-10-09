import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search students by name..."
      value={searchTerm}
      onChange={handleInputChange}
      style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
    />
  );
};

export default SearchBar;
