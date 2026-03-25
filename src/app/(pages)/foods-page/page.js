'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from "@heroui/react"; 

const FoodPageWithoutURLManipulation = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    // Applied (query state)
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    // Input (UI state)
    const [inputSearch, setInputSearch] = useState('');
    const [inputCategory, setInputCategory] = useState('');

    const fetchFoods = async (searchTerm, cat) => {
        setLoading(true);

        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (cat) params.append('category', cat);

        const url = `https://phi-lab-server.vercel.app/api/v1/lab/foods?${params.toString()}`;

        try {
            const res = await fetch(url, { cache: 'no-store' });
            const data = await res.json();
            setFoods(data.data || []);
        } catch (error) {
            console.error('Failed to fetch foods:', error);
            setFoods([]);
        } finally {
            setLoading(false);
        }
    };

    // Fetch when applied state changes
    useEffect(() => {
        fetchFoods(search, category);
    }, [search, category]);

    // Search button click
    const handleSearch = () => {
        setSearch(inputSearch);
        setCategory(inputCategory);
    };

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Discover Delicious Foods 🍔
                </h1>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 sticky top-4 z-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">

                    {/* Search Input */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search foods... (e.g. burger, pizza)"
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                            className="w-full px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg placeholder:text-zinc-400"
                        />
                    </div>

                      {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white rounded-xl font-medium transition"
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>

                    {/* Category Select (instant API call) */}
                    <select
                        value={inputCategory}
                        onChange={(e) => {
                            const value = e.target.value;
                            setInputCategory(value);

                            // Apply instantly
                            setCategory(value);
                            setSearch(inputSearch);
                        }}
                        className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg"
                    >
                        <option value="">All Categories</option>
                        <option value="burger">Burger</option>
                        <option value="pizza">Pizza</option>
                        <option value="dessert">Dessert</option>
                        <option value="beverage">Beverage</option>
                        <option value="rice">Rice</option>
                    </select>

                  
                </div>

                {/* Results */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <p className="text-xl text-zinc-500">
                            Loading delicious foods...
                        </p>
                    </div>
                ) : foods.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-zinc-400">
                            No foods found 😕
                        </p>
                        <p className="text-zinc-500 mt-2">
                            Try different search terms or category
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {foods.map((food) => (
                            <Card
                                key={food.id}
                                className="group overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={food.image_link}
                                        alt={food.dish_name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        ৳{food.price}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-xl line-clamp-1">
                                            {food.dish_name}
                                        </h3>
                                        <span className="text-amber-500 text-lg">
                                            ⭐ {food.rating}
                                        </span>
                                    </div>

                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4">
                                        {food.origin_and_popularity}
                                    </p>

                                    <div className="flex gap-2 flex-wrap">
                                        {food.alternative_names?.slice(0, 2).map((name, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodPageWithoutURLManipulation;