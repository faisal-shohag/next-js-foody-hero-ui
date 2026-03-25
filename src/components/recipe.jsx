import RecipeView from "./recepe-view";
const Recipe = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
  );
  const data = await res.json();
  const recipes = data.meals;
  console.log("Hello")
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-5">Recipes</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae
        aliquam amet dolor maxime mollitia! Maxime, labore! Sapiente quas,
        similique consectetur molestias vero corrupti, assumenda ab id dolorum
        nihil architecto.
      </p>
      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
        {recipes.map((recipe) => (
          <RecipeView 
          key={recipe.idMeal} 
          recipe={recipe}
          ></RecipeView>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
// by default next js components are server e file (or its parent) with the `"use client"` directive.components

// "use client"

// import { useEffect, useState } from "react";
// import RecipeView from "./recepe-view";

// // data fetching with csr
// const Recipe = () => {
//     const [recipes, setRecipes] = useState([])

//     useEffect(() => {
//         const fetchFood = async () => {
//             const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//             const data = await res.json()
//             setRecipes(data.meals)
//         }

//         fetchFood()
//     }, [])

//     return (
//         <div>
//            <h1 className="text-2xl font-semibold py-10">Recipes</h1>
//            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-5">
//             {recipes.map(recipe => <RecipeView key={recipe.idMeal} recipe={recipe}></RecipeView>)}
//            </div>
//         </div>
//     );
// };

// export default Recipe;
// // by default next js components are server e file (or its parent) with the `"use client"` directive.components
