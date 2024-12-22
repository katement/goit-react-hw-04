import { useState } from "react";
import toast from "react-hot-toast";
const SearchBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      toast.error("Please,enter a search term!");
      return;
    }
    setQuery(inputValue.trim());
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
