interface MealInterface {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

interface RecipeListInterface {
  meals: MealInterface[]
}

import RecipeCard from "../components/RecipeCard";
const RecipeList = ({ meals }: RecipeListInterface) => {
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
