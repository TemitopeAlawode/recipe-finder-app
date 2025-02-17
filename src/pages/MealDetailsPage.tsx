import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealDetailsById } from "../services/api";

interface MealDetailsInterface {
    strMealThumb: string;
    strMeal: string;
    strInstructions: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any; // Allow dynamic keys for ingredients and measures
}

const MealDetailsPage = () => {
    const { id } = useParams(); // Extract the `id` parameter from the URL
    const [mealDetails, setMealDetails] = useState<MealDetailsInterface | null>(null); // Initialize as `null`

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                if (!id) return; // Ensure `id` exists before making the API call
                const fetchedMealDetails = await getMealDetailsById(id);
                setMealDetails(fetchedMealDetails[0]); // Set the first meal (API returns an array)
            } catch (error) {
                console.error("Error fetching meal details:", error);
            }
        };
        fetchMealDetails();
    }, [id]);

    if (!mealDetails) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    // Build the ingredients list
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure ? measure : ""} ${ingredient}`);
        }
    }

    return (
        <div className="px-8 py-2">
            {/* Meal Name and Image */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl pt-4 font-bold">{mealDetails.strMeal}</h1>
                <img
                    src={mealDetails.strMealThumb}
                    alt={mealDetails.strMeal}
                    className="rounded-2xl w-64 my-4"
                />
            </div>

            {/* Instructions */}
            <div className="flex md:flex-row flex-col justify-center items-center">
                <h4 className="text-xl font-semibold mb-2 pr-4">Instructions:</h4>
                <p className="text-gray-700 whitespace-pre-line mb-4">{mealDetails.strInstructions}</p>
            </div>

            {/* Ingredients */}
                <h4 className="text-xl font-semibold mb-2 pr-4">Ingredients:</h4>
                <ul className="list-disc pl-5">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
        </div>
    );
};

export default MealDetailsPage;




























// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getMealDetailsById } from "../services/api";

// interface MealDetailsInterface {
//     // meals: MealInterface[]
//     strMealThumb: string;
//     strMeal: string;
//     strInstructions: string;
//     strMeasure: number;
// }

// const MealDetailsPage = () => {
//     const { id } = useParams();
//     // const param = useParams();
//     // const id = param.id;
//     // console.log(param);

//     // Setting Meals state
//     const [mealDetails, setMealDetails] = useState<MealDetailsInterface>({});

//     useEffect(() => {
//         const fetchMealDetails = async () => {
//             try {
//                 const fetchedMealDetails = await getMealDetailsById(id);
//                 setMealDetails(fetchedMealDetails[0]);
//             } catch (error) {
//                 console.log("Error fetching meal details: ", error);
//             }
//         };
//         fetchMealDetails();
//     }, [id])

//     const ingredients = [];

//     for (let i = 1; i <= 20; i++) {
//         const ingredient = mealDetails[`strIngredient${i}`];
//         const measure = mealDetails[`strMeasure${i}`];

//         if (ingredient && ingredient.trim() !== "") {
//             ingredients.push(`${measure ? measure : ""} ${ingredient}`);
//         }
//     }

//     return (
//         <div className="px-8 py-2">
//             <div className="flex flex-col justify-center items-center">
//                 {/* Meal Name */}
//                 <h1 className="text-2xl pt-4 font-bold">{mealDetails.strMeal}</h1>
//                 {/* Meal Image */}
//                 <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className="rounded-2xl w-64 my-4" />
//             </div>
//             <div className="flex md:flex-row flex-col justify-center items-center">
//                 {/* Meal Instructions */}
//                 <h4 className="text-xl font-semibold mb-2 pr-4">Instructions: </h4>
//                 <p className="text-gray-700 whitespace-pre-line mb-4">{mealDetails.strInstructions}</p>
//             </div>
//             {/* Meal Ingredients */}
//             <h4 className="text-xl font-semibold mb-2 pr-4">Ingredients: </h4>
//             <ul>
//                 {ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//         </div>

//         // <div>
//         //     MealDetailsPage
//         //     <h1>{param.id}</h1>
//         // </div>
//     )

// }


// export default MealDetailsPage