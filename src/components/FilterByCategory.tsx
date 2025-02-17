// Define the shape of a single category object
interface Category {
  strCategory: string; // Each category has a `strCategory` property
}

interface ListCategoryInterface {
  listCategories: Category[],
  onCategoryChange: (category: string) => void
}
const FilterByCategory = ({ listCategories, onCategoryChange }: ListCategoryInterface) => {
  return (
    <>
      <div className="mx-4 my-2" id="filter-recipes-by-category">
        <select name="" id="" onChange={(e) => onCategoryChange(e.target.value)} className="border-2 px-4 py-2 shadow-md">
          {/* Default Option */}
          <option value="">Filter by</option>
          {/* List each category */}
          {listCategories.map((listCategory) => (
            <option key={listCategory.strCategory} value={listCategory.strCategory}>{listCategory.strCategory}</option>
          ))}
          {/* <option value="">Filter by</option>
    <option value="">Vegetarian</option>
    <option value="">Non-Vegetarian</option> */}
        </select>
      </div>
    </>
  );
}

export default FilterByCategory