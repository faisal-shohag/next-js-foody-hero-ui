import { notFound } from "next/navigation";

const FoodDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${id}`)
    const data = await res.json()
    const food = data.data
   // if food not found navigate to not-found.js page
   
   if(!food) {
    notFound()
   }


   
    return (
        <div>
            Food details page
            <h1>{food?.dish_name}</h1>
        </div>
    );
};

export default FoodDetailsPage;