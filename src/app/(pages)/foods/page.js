
import CategoryFilter from "@/components/foods/category-filter";
import FoodCard from "@/components/foods/food-card";
import SearchFood from "@/components/foods/search-food";
import { MdNoFood } from "react-icons/md";


const getFood = async (search, category) => {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (category) params.set("category", category);

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods${params.toString() ? `?${params.toString()}` : ""}`,
  );
  const data = await res.json();
  return data.data;
};

const FoodsPage = async ({ searchParams }) => {
  const sp = await searchParams;
  const foods = await getFood(sp.search, sp.category);

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-4xl">Foods</h1>
      <div className="">
        <SearchFood />
        <CategoryFilter />
      </div>
      {sp.dish_name && (
        <div className="">
          Found <span className="font-bold text-red-500">{foods.length}</span>{" "}
          result with the term{" "}
          <span className="font-bold italic text-red-500">{p.dish_name}</span>
        </div>
      )}

      {foods.length ? (
        <div className="grid grid-cols-4 mt-10 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center text-muted mt-20 font-bold ">
          <MdNoFood size={100} />
          <h2 className="text-4xl">
            No Foods Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default FoodsPage;


