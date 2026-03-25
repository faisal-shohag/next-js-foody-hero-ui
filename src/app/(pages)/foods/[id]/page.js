import { Card } from "@heroui/react";
import { notFound } from "next/navigation";
import Image from "next/image";

const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${id}`, {
        cache: "no-store", // or force-cache depending on your needs
    });

    if (!res.ok) notFound();

    const data = await res.json();
    const food = data.data;

    if (!food) notFound();

    return (
        <div className="min-h-screen  py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Hero Section with Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10">
                    <div className="relative h-125 md:h-150">
                        <Image
                            src={food.image_link}
                            alt={food.dish_name}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Title & Rating Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30">
                                {food.cuisine}
                            </span>
                            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30 flex items-center gap-1">
                                ⭐ {food.rating}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
                            {food.dish_name}
                        </h1>

                        <p className="text-xl text-white/90 max-w-lg">
                            {food.origin_and_popularity.split(".")[0]}
                        </p>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-6 right-6 bg-white dark:bg-zinc-900 text-black dark:text-white px-6 py-3 rounded-2xl shadow-xl font-semibold text-lg flex items-center gap-2">
                        ৳{food.price}
                        <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">BDT</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Nutrition & Price */}
                        <Card className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                📊 Nutrition
                            </h2>
                            <div className="gap-6">
                                {/* Nutrition */}
                                <div>
                                    <h3 className="font-medium text-lg mb-4 text-amber-600 dark:text-amber-500">Approximate Nutrition</h3>
                                    <ul className="space-y-3 text-sm">
                                        {Object.entries(food.approximate_nutrition_per_serving).map(([key, value]) => (
                                            <li key={key} className="flex justify-between">
                                                <span className="capitalize text-zinc-600 dark:text-zinc-400">
                                                    {key.replace("_", " ")}
                                                </span>
                                                <span className="font-medium">{value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                         
                            </div>
                        </Card>

                        {/* Ingredients */}
                        <Card className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-semibold mb-6">🥗 Main Ingredients</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-zinc-700 dark:text-zinc-300">
                                {food.main_ingredients.map((ingredient, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1">•</span>
                                        <span>{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Cooking Steps */}
                        <Card className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                👨‍🍳 Cooking Steps
                            </h2>
                            <ol className="space-y-6">
                                {food.cooking_steps.map((step, index) => (
                                    <li key={index} className="flex gap-5 items-center">
                                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 pt-1">
                                            {step}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    </div>

                    {/* Right Column - Sidebar Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <Card className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 sticky top-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold">Quick Info</h3>
                                <div className="px-4 py-1 bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 rounded-full text-xs font-medium">
                                    {food.category.toUpperCase()}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Alternative Names</p>
                                    <div className="flex flex-wrap gap-2">
                                        {food.alternative_names.map((name, i) => (
                                            <span
                                                key={i}
                                                className="text-sm bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-lg"
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Origin & Popularity</p>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {food.origin_and_popularity}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-10 space-y-3">
                                <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold rounded-2xl transition-all active:scale-[0.98]">
                                    Add to Cart — ৳{food.price}
                                </button>
                                <button className="w-full py-4 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-2xl transition-colors">
                                    Save Recipe
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;