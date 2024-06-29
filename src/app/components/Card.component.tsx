import Image from "next/image";
import React from "react";
import { HeartIcon } from "@/shared/icons/HeartIcon";
import { FridgeIcon } from "@/shared/icons/FridgeIcon";
import burrito from "../assets/burrito.jpg";

export const CardComponent = () => {
  return (
    <div className=" col-span-1 row-span-1 h-full w-full flex shadow-md rounded-sm overflow-hidden border border-gray-200">
        <div className="h-full w-3/6">
          <Image
            className="w-full h-full object-cover"
            src={burrito}
            alt={"CardCover"}
          />
        </div>
        <div className=" h-full w-3/6 p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <h3 className=" text-2xl font-bold">
              Burritos mexicanos SUPER FACIL DE HACER!
            </h3>
            <p className=" text-sm">
              Receta para hacer burritos de mandera facil e igualitos a los que
              se hacen en maxico SUPER FACIL
            </p>
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-10 border-2 border-gray-400 rounded-full">
                      <Image src={burrito} alt={"Profile photo"} />
                    </div>
                  </div>
                  <span className="whitespace-nowrap">Sergio Dominguez</span>
                </div>
                <button className="btn btn-sm  bg-blue-400 text-white  hover:bg-blue-500">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 mt-7">
            <button className="px-4 py-2 gap-2 flex items-center rounded-md hover:bg-gray-100 hover:duration-100	">
              <HeartIcon
                color="#999999"
                fill="#999999"
                width={16}
                height={16}
              />
              <span>24</span>
            </button>
            <button className="px-4 py-2 gap-2 flex items-center rounded-md hover:bg-gray-100 hover:duration-100	">
              <FridgeIcon
                color="#999999"
                fill="#999999"
                width={16}
                height={16}
              />
              <span>24</span>
            </button>
            <button className="btn btn-sm  bg-blue-400 text-white  hover:bg-blue-500">
              Add to frige
            </button>
          </div>
        </div>
      </div>
  );
};
