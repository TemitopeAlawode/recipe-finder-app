interface Meals {
  strMealThumb: string; 
  strMeal: string; 
  strInstructions: string; 
}

interface RandomRecipeModalInterface {
  randomRecipe: Meals;
  onCloseModal: () => void;
}

const RandomRecipeModal = ({ randomRecipe, onCloseModal }: RandomRecipeModalInterface) => {
  return (
    <div>
      {/* Content */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        {/* Container */}
        <div className="p-4 max-w-md w-full max-h-screen shadow-md rounded-2xl bg-slate-50 cursor-pointer overflow-auto">

          {/* Heading with close button */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Random/Surprise Recipe</h1>
            {/* Close btn */}
            <button onClick={onCloseModal} className="text-red-600 hover:text-red-800 text-3xl font-bold">&times;</button>
          </div>

          {/* Image */}
          <img src={randomRecipe.strMealThumb} alt={randomRecipe.strMeal} className="rounded-2xl w-full h-64 object-cover mb-4" />
          {/* Name */}
          <h3 className="text-lg pt-4 font-bold text-center mb-2">{randomRecipe.strMeal}</h3>
          {/* Instructions */}
          <h4 className="text-xl font-semibold mb-2">Instructions: </h4>
          <p className="text-gray-700 whitespace-pre-line mb-4">{randomRecipe.strInstructions}</p>
        </div>
      </div>


    </div>
  )
}

export default RandomRecipeModal


