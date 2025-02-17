// import honey_garlic from "../assets/images/Honey-garlic-chicken-meal.jpg";
interface MealInterface {
  strMealThumb: string;
  strMeal: string;
}

interface RecipeCardInterface {
  meal: MealInterface;
}

const RecipeCard = ({ meal }: RecipeCardInterface) => {
  return (
    <div className="p-4 w-96 shadow-md rounded-2xl bg-slate-50 flex flex-col items-center justify-center cursor-pointer">
      {/* Display Meal Card */}

      {/* <img src={honey_garlic} alt="Honey Garlic Chicken Meal" className="w-40" />
      <h1 className="">Honey Garlic Chicken Meal</h1> */}

      {/* <img src={category.strCategoryThumb} alt={category.strCategory} />
      <h1 className="text-xl font-bold text-center">{category.strCategory}</h1> */}
      {/* <p className="text-gray-500 text-sm">{category.strCategoryDescription}</p> */}

      <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-2xl w-64" />
      <h3 className="text-md pt-4 font-bold text-center">{meal.strMeal}</h3>
    </div>
  )
}

export default RecipeCard

