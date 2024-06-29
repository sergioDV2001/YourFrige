import Link from "next/link";
import React from "react";
import { DishIcon } from "../icons/Dishicon";
import { FridgeIcon } from "../icons/FridgeIcon";
import { HomeIcon } from "../icons/HomeIcon";

export const SidebarComponent = () => {
  return (
    <aside className="border-r border-gray-200 h-full w-1/6 flex justify-start pl-14 pt-10">
      <nav className=" flex flex-col gap-14">
        <ul className="flex flex-col gap-3">
          <span className=" text-2xl text-gray-400">Menu</span>
          <li className="flex items-center justify-start gap-2">
            <HomeIcon width={20} height={20} color="#999999" />
            <Link className=" text-xl" href="/">
              Home
            </Link>
          </li>
          <li className="flex items-center justify-start gap-2">
            <DishIcon width={20} height={20} color="#999999" />
            <Link className=" text-xl" href="/recipes">
              Recipes
            </Link>
          </li>
          <li className="flex items-center justify-start gap-2">
            <FridgeIcon width={20} height={20} color="#999999" />
            <Link className=" text-xl" href="/fridge">
              Fridge
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <span className=" text-2xl text-gray-400">Tipos de platos</span>
          <li className="flex items-center justify-start gap-2">
            <HomeIcon width={20} height={20} color="#999999" />
            <Link className=" text-xl" href="/">
              Fish
            </Link>
          </li>
          <li className="flex items-center justify-start gap-2">
            <DishIcon width={20} height={20} color="#999999" />
            <Link className=" text-xl" href="/recipes">
              Meat
            </Link>
          </li>
          <li className="flex items-center justify-start gap-2">
            <FridgeIcon width={20} height={20} color="#999999" />
            <Link className=" text-xl" href="/fridge">
              Vegetables
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
