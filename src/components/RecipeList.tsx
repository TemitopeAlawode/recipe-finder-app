import RecipeCard from "../components/RecipeCard";
const RecipeList = ({ meals }) => {
  return (
    <div className="flex flex-wrap justify-center mx-4 my-6 gap-8" id="recipes-list">
      {/* Display each recipe card */}
      {meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  )
}

export default RecipeList
