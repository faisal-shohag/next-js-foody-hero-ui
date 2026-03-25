"use client"
import Image from "next/image";
import {Button, Card} from "@heroui/react";

const RecipeView = ({ recipe }) => {
  const { strMealThumb, strMeal } = recipe;
  const handleClick = () => {

    alert(strMeal)
  }
  return (
    <Card>
      <div className="flex justify-center ">
        <Image
        className="rounded-xl"
          height={400}
          width={400}
          loading="eager"
          src={strMealThumb}
          alt={strMeal}
        />
      </div>
      <div className="p-2">
        <h1 className="text-xl font-semibold">{strMeal}</h1>
        {/* <button onClick={handleClick}>View Details</button>
         */}
         <Button color="primary">Default</Button>
      </div>
    </Card>
  );
};

export default RecipeView;
