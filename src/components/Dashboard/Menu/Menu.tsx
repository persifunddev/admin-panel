import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu({title,image,link}:{title:string,image:string,link:string}) {        
    console.log(image)
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? "text-white border-l-4 border-indigo-500 border-[#FF7A42] flex items-center m-r-3 h-[50px] mt-5 cursor-pointer  bg-sideblue2 rounded-tr-[10px] rounded-br-[10px] md:w-[95%] lg:w-[85%]"
            : "text-white  flex items-center m-r-3 h-[50px] mt-5 cursor-pointer border-l-4 border-indigo-500 border-sideblue1 md:w-[300px] w-full"
        }
      >
        <span className="flex justify-center md:inline-block md:w-auto lg:px-4 md:px-2 sm:px-1 w-full">
          <img className="inline-block w-[45px] md:w-[25px]" src={image}></img>
        </span>
        <span className="text-menu font-menu hidden md:inline-block">{title}</span>
      </NavLink>
    </>
  );
}
