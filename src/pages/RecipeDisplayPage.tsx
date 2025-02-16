import { useEffect, useState } from "react";
// import Header from "../components/Header";
import SearchBar from "../components/SearchBar"
import FilterByCategory from "../components/FilterByCategory"
import RecipeList from "../components/RecipeList"
import RandomRecipeButton from "../components/RandomRecipeButton"
import {
  getMeals,
  getListCategories,
  filterMealsByCategory,
  searchMealsByName,
  searchMealsByIngredient,
  generateRandomRecipe
} from "../services/api";
import RandomRecipeModal from "../components/RandomRecipeModal";
import Footer from "../components/Footer"


const RecipeDetailsPage = () => {
  // Setting Meals state
  const [meals, setMeals] = useState([]);

  // Setting Categories state
  const [listCategories, setListCategories] = useState([]);

  // State for random recipe 
  const [randomRecipe, setRandomRecipe] = useState();

  // State for the random recipe modal to pop up
  const [showRandomRecipeModal, setShowRandomRecipeModal] = useState(false)

  // Fetches the default meals and category list on page load
  useEffect(() => {
    // Default Category Meal
    const fetchMeals = async () => {
      const fetchedMeals = await getMeals();
      setMeals(fetchedMeals);
    };
    // Category list
    const fetchCategoryList = async () => {
      const fetchedCategoryList = await getListCategories();
      setListCategories(fetchedCategoryList);
    }
    fetchMeals();
    fetchCategoryList();
  }, [])

  // Fetching Meals by selected category
  const handleCategoryChange = async (category: string) => {
    if (category == "") {
      // Fetch Default Meals
      const fetchedMeals = await getMeals();
      setMeals(fetchedMeals);
    }
    const filteredMealsByCategory = await filterMealsByCategory(category);
    setMeals(filteredMealsByCategory);
  }

  // Handling Search Functionality
  const handleSearch = async (searchedRecipe: string, searchType: string) => {
    if (searchType == "Meal") {
      const searchedMeal = await searchMealsByName(searchedRecipe);
      setMeals(searchedMeal);
    }
    else if (searchType == "Ingredient") {
      const searchedIngredient = await searchMealsByIngredient(searchedRecipe);
      setMeals(searchedIngredient);
    }
  }

  // Generate/fetch surprise or random recipe 
  // const handleRandomRecipe = async () => {
  //   const randomRecipe = await generateRandomRecipe();
  //   setMeals(randomRecipe);
  // }
  const handleRandomRecipe = async () => {
    const randomRecipe = await generateRandomRecipe();
    setRandomRecipe(randomRecipe[0]);
    setShowRandomRecipeModal(true); //displays the random recipe modal
  }

  return (
    <>
      {/* Header Component */}
      {/* <Header /> */}
      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} />
      {/* Filter & Random recipe button */}
      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 my-6">
      {/* Filter Recipe by categories */}
      <FilterByCategory listCategories={listCategories} onCategoryChange={handleCategoryChange} />
      {/* Generate Random Recipe Button */}
      <RandomRecipeButton randomRecipe={handleRandomRecipe} />
      </div>
      {/* Display Recipe List */}
      <RecipeList meals={meals} />
      
      {/* Random Recipe Modal */}
      {
        showRandomRecipeModal && randomRecipe && (
          <RandomRecipeModal randomRecipe={randomRecipe} onCloseModal={() => setShowRandomRecipeModal(false)}/>
        )
      }
     <Footer />
    </>
  )
}

export default RecipeDetailsPage