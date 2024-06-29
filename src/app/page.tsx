// src/app/page.tsx
"use client"; // Asegura que este componente se ejecute en el cliente

import { useEffect, useState } from "react";
import { getWeekMenu, createWeekMenu } from "./services/weekMenuService";
import toast from "react-hot-toast";
import Image from "next/image";
import burrito from "./assets/burrito.jpg";
import { HeartIcon } from "@/shared/icons/HeartIcon";
import { FridgeIcon } from "@/shared/icons/FridgeIcon";
import { CardComponent } from "./components/Card.component";

const Home = () => {
  const [weekMenu, setWeekMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  toast.success("Successfully toasted!");

  useEffect(() => {
    const fetchWeekMenu = async () => {
      try {
        const data = await getWeekMenu().then((data) => {
          console.log(data);
        });
        setWeekMenu(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching week menu:", error);
        setLoading(false);
      }
    };

    fetchWeekMenu();
  }, []);

  const handleCreateWeekMenu = async () => {
    const newWeekMenu = {
      monday: {
        breakfast: "Pancakes",
        lunch: "Chicken Salad",
        dinner: "Spaghetti Bolognese",
      },
      tuesday: {
        breakfast: "Oatmeal",
        lunch: "Turkey Sandwich",
        dinner: "Grilled Salmon",
      },
      wednesday: {
        breakfast: "Smoothie",
        lunch: "Veggie Wrap",
        dinner: "Beef Stir Fry",
      },
      thursday: {
        breakfast: "Eggs and Toast",
        lunch: "Chicken Caesar Salad",
        dinner: "Tacos",
      },
      friday: {
        breakfast: "Bagel with Cream Cheese",
        lunch: "Sushi",
        dinner: "Pizza",
      },
      saturday: {
        breakfast: "French Toast",
        lunch: "BLT Sandwich",
        dinner: "Burgers",
      },
      sunday: {
        breakfast: "Waffles",
        lunch: "Pasta Salad",
        dinner: "Roast Chicken",
      },
    };

    try {
      const createdMenu = await createWeekMenu(newWeekMenu);
      console.log("Created week menu:", createdMenu);
      setWeekMenu(createdMenu);
    } catch (error) {
      console.error("Error creating week menu:", error);
    }
  };

  if (loading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 w-full p-7 gap-10">
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>

    </div>
  );
};

export default Home;
