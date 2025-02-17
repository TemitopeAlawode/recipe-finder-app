import { useState } from "react"

interface SearchBarProps {
  onSearch: (searchedRecipe: string, searchType: string) => void;
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  // States for the search input and type
  const [searchedRecipe, setSearchedRecipe] = useState("");
  const [searchType, setSearchType] = useState("");

  // For when the form is submitted
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const trimmedRecipe = searchedRecipe.trim();
    if (trimmedRecipe === "" || searchType === "Search recipe by") {
      return;
    }
    onSearch(trimmedRecipe, searchType)
  };



  return (
    <div className="flex flex-col justify-center items-center m-5" id="search-recipes">
      <h1 className="text-2xl font-semibold text-yellow-600 italic p-2">Explore various recipes...</h1>
      {/* Form for handling search functionality */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex" id="search-btn">
          {/* Input Field for searching */}
          <input type="text"
            placeholder="Search recipes...."
            value={searchedRecipe}
            onChange={(e) => setSearchedRecipe(e.target.value)}
            className="border-2 rounded-l-md shadow-sm px-4 py-2 md:w-96 outline-red-300" />
          <button type="submit" className="bg-yellow-800 px-4 py-2 rounded-r-md text-white hover:bg-yellow-700">
            Search
          </button>
        </div>
        {/* Search Option */}
        <div className="border-2 my-2" id="search-filter">
          <select value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="px-4 py-2 rounded outline-orange-500">
            <option value="Search recipe by">Search recipe by</option>
            <option value="Meal">Meal</option>
            <option value="Ingredient">Ingredient</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default SearchBar