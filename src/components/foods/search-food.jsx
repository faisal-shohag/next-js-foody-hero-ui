"use client";

import { Button, Input } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFood = () => {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams();

  const handleSearch = () => {
   const params = new URLSearchParams(searchParams)
    if(!searchText) {
      params.delete("search")
    } else {
      params.set("search", searchText)
    }

    router.push(`${pathName}?${params.toString()}`)
    
  }
  return (
    <div className="text-center mt-10 space-x-2">
      <Input
      variant="primary"

        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by Dish Name"
      />
      <Button onClick={handleSearch} size="sm" variant="danger">Search</Button>
    </div>
  );
};

export default SearchFood;
