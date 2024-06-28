'use client'

import Image from "next/image";
import React, { useState } from "react";
import receta from "../assets/receta.jpg";
import toast from "react-hot-toast";
import hamburguer from "../assets/hamburguer.jpg";


export const FoodTypeSquare = () => {
  const handleClick = () => {
    toast.success('Successfully toasted!')
  };



  return (
    <>
      <button
        onClick={handleClick}
        className="min-w-32 min-h-32 rounded-xl bg-slate-500 overflow-hidden relative p-0 m-0"
      >
        <Image
          className="object-cover w-full h-full absolute z-30 top-0"
          src={hamburguer}
          alt="Receta"
        />
        <div className="w-full h-full bg-black absolute z-40 opacity-20"></div>
        <h3 className="absolute bottom-2 left-2 text-white font-bold z-50 text-2xl">
          Frios
        </h3>
      </button>
    </>
  );
};
