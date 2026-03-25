"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {Label, ListBox, Select} from "@heroui/react";
const CategoryFilter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);

    if (!category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="mt-5 space-x-2">
      <Select onChange={(value)=>handleCategory(value)} className="w-[256px]" placeholder="Select one">
      <Label>Filter By Category</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="dish" textValue="Florida">
            Dish
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="burger" textValue="Delaware">
            Burger
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="biriyani" textValue="California">
            Biriyani
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="beverage" textValue="Texas">
            Beverage
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
    </div>
  );
};

export default CategoryFilter;