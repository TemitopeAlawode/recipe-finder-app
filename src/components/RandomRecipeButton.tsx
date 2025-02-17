interface RandomRecipeInterface {
  randomRecipe: () => void;
}

const RandomRecipeButton = ({randomRecipe}: RandomRecipeInterface) => {
  return (
    <div className="mx-4 my-6">
      <button onClick={randomRecipe} className="px-4 py-2 rounded bg-orange-700 text-white hover:bg-orange-500">
        Generate Surprise Recipe
      </button>
    </div>
  )
}

export default RandomRecipeButton