import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { MailIcon } from "../icons/MailIcon";
import { NotificationsIcon } from "../icons/NotificationsIcon";
import profilePhoto from "../images/profilePhoto.jpeg";
import logo from "../images/logo.png";

export const HeaderComponent = () => {
  return (
    <header className="bg-white h-[8vh] flex items-center justify-between">
      <div className=" border-r border-b border-gray-200 h-full w-1/6 flex items-center justify-center">
        <Link href={"/"}>
          <Image width={200} height={60} src={logo} alt={"Logo Frige"} />
        </Link>
      </div>
      <div className="border-b border-gray-200 h-full w-5/6 flex">
        <div className="flex items-center justify-start w-full h-full gap-3 pl-5">
          <SearchIcon color="#999999" />
          <input
            className=" text-gray-400 font-semibold outline-none w-full h-full"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="flex items-center justify-end gap-8 px-7">
          <MailIcon color="#999999" />
          <div className="indicator">
            <span className="indicator-item badge bg-blue-400"></span>
            <NotificationsIcon color="#999999" />
          </div>
          <span className=" whitespace-nowrap">Sergio Dominguez</span>
          <div className="avatar">
            <div className="w-12 border-2 border-gray-400 rounded-full">
              <Image src={profilePhoto} alt={"Profile photo"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
