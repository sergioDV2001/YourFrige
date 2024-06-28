// src/app/page.tsx
"use client"; // Asegura que este componente se ejecute en el cliente

import { useEffect, useState } from "react";
import { getWeekMenu, createWeekMenu } from "./services/weekMenuService";
import { CardComponent } from "./components/Card.component";
import { FoodTypeSquare } from "./components/FoodTypeSquare.component";
import toast from "react-hot-toast";

const Home = () => {
  const [weekMenu, setWeekMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  toast.success('Successfully toasted!')


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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="m-auto flex items-center justify-center flex-col gap-5 overflow-hidden">
      <h1>Top recipes</h1>
      <div className="border flex flex-col">
      <div className="grid grid-cols-8 gap-5 mb-7">
        <FoodTypeSquare />
        <FoodTypeSquare />
        <FoodTypeSquare />
        <FoodTypeSquare />
        <FoodTypeSquare />
        <FoodTypeSquare />
        <FoodTypeSquare />
        <FoodTypeSquare />
      </div>
      <div className="grid grid-cols-3 h-full gap-5">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      </div>
      {/*   <pre>{JSON.stringify(weekMenu, null, 2)}</pre>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={handleCreateWeekMenu}
      >
        Create Week Menu
      </button> */}
    </div>
  );
};

export default Home;
