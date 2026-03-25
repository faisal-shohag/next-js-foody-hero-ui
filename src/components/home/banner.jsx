import { Button } from "@heroui/react";
import Image from "next/image";
import { FaShippingFast } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2  items-center mt-10">
      <div className="space-y-10">
        <h1 className="text-7xl">
          Healthy <span className="text-[#ca2628]">Eating is an</span>
          <span className="text-[#ff8933]"> Important</span> Part of Lifestyle
        </h1>

        <p className="text-2xl w-75 text-muted">
          We prepare delicious Food For you we are always
        </p>
        <Button variant="danger">Explore Now</Button>
      </div>

      <div className="relative md:flex justify-end">
        <Image
          className=" relative h-auto w-auto z-20  drop-shadow-2xl"
          src={
            "https://res.cloudinary.com/dj493l0jy/image/upload/v1773926394/foods/0fd3e35c-1883-4c87-a2b1-dc7083029cf7.png"
          }
          loading="eager"
          height={300}
          width={300}
          alt="recipe"
        />

        <div className="absolute -right-5  -top-5 z-30 flex justify-center items-center">
          <Image
            className="drop-shadow-2xl h-auto w-auto"
            src={
              "https://res.cloudinary.com/dj493l0jy/image/upload/v1773926007/foods/1ad0919b-4730-429d-a60e-2e4cdbcaf00a.png"
            }
            loading="eager"
            alt="badge"
            height={100}
            width={100}
          />
          <div className="absolute flex flex-col justify-center items-center">
            <p className="text-xl font-bold">20%</p>
            <p>off</p>
          </div>
        </div>

        <div className=" rounded-xl backdrop-blur-md bg-white/30  p-5 dark:bg-zinc-700/30 space-y-3 md:absolute z-10 bottom-0 right-60 md:w-80">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaShippingFast size={25} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-sm max-w-37.5">
                Promise To Deliver Within 30 Mins
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <BsFillBagHeartFill size={25} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Pick Up</h3>
              <p className="text-sm max-w-37.5">
                Pickup Delivery at your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
