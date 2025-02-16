const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch default meals by Categories
export const getMeals = async () => {
    try {
        const response = await fetch(`${BASE_API_URL}/filter.php?c=Beef`);
        // const response = await fetch(`${BASE_API_URL}/categories.php`);
        if (!response.ok) {
            console.log(`HTTP Error: , ${response.status}`);
        }
        const data = await response.json();
        // return data.categories;
        return data.meals;
    } catch (error) {
        console.log("Error fetching meals: ", error);
    }
}

// List Categories  
export const getListCategories = async () => {
    try {
        const response = await fetch(`${BASE_API_URL}/list.php?c=list`);
        if (!response.ok) {
            console.log(`HTTP Error: , ${response.status}`);
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log("Error Fetching Categories: ", error);
    }
}

// Filter meals to be displayed by categories selected 
export const filterMealsByCategory = async (category: string) => {
    try {
        const response = await fetch(`${BASE_API_URL}/filter.php?c=${category}`)
        if (!response.ok) {
            console.log(`HTTP Error: , ${response.status}`);
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log("Error fetching meal by category: ", error);
    }
}

// Search meals by name 
export const searchMealsByName = async (searchedRecipe: string) => {
    try {
        const response = await fetch(`${BASE_API_URL}/search.php?s=${searchedRecipe}`);
        if (!response.ok) {
            console.log(`HTTP Error , ${response.status}`);  
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log("Error searching meals by name: ",error);
    }
}

// Search meals by ingredient
export const searchMealsByIngredient = async (searchedRecipe: string) => {
    try {
        const response = await fetch(`${BASE_API_URL}/filter.php?i=${searchedRecipe}`);
        if (!response.ok) {
            console.log(`HTTP Error , ${response.status}`);  
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log("Error searching meals by ingredient: ",error);
    }
}

// Display/Fetch Random recipe
export const generateRandomRecipe = async () => {
    try {
        const response = await fetch(`${BASE_API_URL}/random.php`);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const meal = data.meals;
        return meal;
        // console.log(meal);
    } catch (error) {
        console.log("Error Fetching Recipe: ", error);
    }
}
