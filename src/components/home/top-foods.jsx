
import { use } from "react";
import FoodCard from "../foods/food-card";

const TopFoods = ({ dataPromise }) => {
  const data = use(dataPromise);
  const foods = data.data;
  const colors = ["#3A9C85", "#E64E4E", "#ca9f83", "#424e58"];

  return (
    <div className="mt-20 p-10 bg-red-200 rounded">
     <div className="mb-20 text-center">
       <h2 className="font-bold text-4xl">Top <span className="text-red-500">Foods</span></h2>
        <p className="text-muted">We prepare delicious Food For you we are always</p>
     </div>
    <div className="grid md:grid-cols-4 gap-20 md:gap-4 p-5  min-h-50 bg-white dark:bg-zinc-800 shadow-xl rounded-xl ">
      {foods.map((food, indx) => (
        <FoodCard key={food.id} food={food} color={colors[indx]} />
      ))}
    </div>
    </div>
  );
};

export default TopFoods;

