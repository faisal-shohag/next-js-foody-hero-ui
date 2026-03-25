import { Button } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaBangladeshiTakaSign, FaHeart, FaStar } from "react-icons/fa6";
const FoodCard = ({ food, color }) => {
  return (
    <div
      style={{ backgroundColor: color || '' }}
      className={`flex flex-col items-center text-center relative  shadow-xl rounded-xl p-4 ${!color && 'dark:bg-zinc-800 bg-white'}`}
    >
      <div >
        <Image
          className="h-auto w-auto drop-shadow-2xl"
          height={100}
          width={100}
          src={food.image_link}
          alt={food.dish_name}
        />
      </div>

      <h2
        title={food.dish_name}
        className="mt-10 line-clamp-1 font-semibold "
      >
        {food.dish_name}
      </h2>

      <div className="flex justify-between items-center w-full mt-3">
        <p className={`flex gap-0 items-center  font-bold`}>
          <FaBangladeshiTakaSign />{food.price}
        </p>
        <p className="bg-white dark:bg-zinc-200 p-1 rounded-full shadow-2xl">
          <FaHeart className="text-rose-500" size={20} />
        </p>
      </div>

      <div className="flex justify-between items-center w-full mt-5">
      <Link href={`/foods/${food.id}`}><Button variant="ghost" size="sm" className="flex bg-white text-black">
         Details <ChevronRight />{" "}
        </Button></Link>
        <p className="flex items-center gap-1  font-bold"><FaStar /> {food.rating}</p>
      </div>
    </div>
  );
};

export default FoodCard;