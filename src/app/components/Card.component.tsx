import Image from "next/image";
import React from "react";
import receta from "../assets/receta.jpg";
import hamburguer from "../assets/hamburguer.jpg";
import { TimeIcon } from "@/shared/icons/TimeIcon";
import { FishIcon } from "@/shared/icons/FishIcon";

export const CardComponent = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={receta} alt="Receta" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">Salmon con limon</h2>
        <p>
          Receta rapida de como hacer salmon con limon en menos de 20 minutos!!
        </p>
        <div className="card-actions flex items-center justify-start gap-5 mt-4">
          <div className="flex items-center justify-between gap-2">
            <TimeIcon />
            <span>20 mins</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FishIcon />
            <span>Pescado</span>
          </div>
        </div>
        <div className="avatar items-center gap-3 mt-5">
            <div className="w-10 rounded-full">
              <Image
                src={receta}
                alt={"IconProfile"}
              />
            </div>
            <span>serllio2001</span>
          </div>
      </div>
    </div>
  );
};
