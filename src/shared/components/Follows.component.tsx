import React from "react";
import { DotsIcon } from "../icons/DotsIcon";
import { SearchIcon } from "../icons/SearchIcon";
import Image from "next/image";
import profilePhoto from "../images/profilePhoto.jpeg";

export const FollowsComponent = () => {
  return (
    <div className="h-fit border border-gray-200 bg-white w-1/6 rounded-sm flex flex-col justify-between">
      <div className="flex flex-col items-center p-5">
        <div className="flex w-full items-center justify-between">
          <span className=" text-2xl text-gray-400">Follows</span>
          <DotsIcon color="#999999" />
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex items-center justify-start gap-3">
            <div className="avatar">
              <div className="w-10 border-2 border-gray-400 rounded-full">
                <Image src={profilePhoto} alt={"Profile photo"} />
              </div>
            </div>
            <span className="whitespace-nowrap">Sergio Dominguez</span>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex items-center justify-start gap-3">
            <div className="avatar">
              <div className="w-10 border-2 border-gray-400 rounded-full">
                <Image src={profilePhoto} alt={"Profile photo"} />
              </div>
            </div>
            <span className="whitespace-nowrap">Sergio Dominguez</span>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex items-center justify-start gap-3">
            <div className="avatar">
              <div className="w-10 border-2 border-gray-400 rounded-full">
                <Image src={profilePhoto} alt={"Profile photo"} />
              </div>
            </div>
            <span className="whitespace-nowrap">Sergio Dominguez</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start w-full py-3 gap-3 pl-5 border-t border-gray-200">
        <SearchIcon color="#999999" />
        <input
          className=" text-gray-400 font-semibold outline-none w-full h-full"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};
