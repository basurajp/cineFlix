import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[60%] lg:w-[20%] h-full   border-r-2 border-zinc-200 p-6 hidden lg:block">
      <h1 className=" text-2xl text-white font-bold">
        <i className="ri-tv-fill text-[#6556CD] mr-2  "></i>
        <span className="">cineFlix</span>
      </h1>
      <nav className=" flex flex-col text-zinc-400 text-xl gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-6 mb-3 ">
          New Feeds
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-fire-fill "></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-group-fill mr-2"></i>
          People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-2" />

      <nav className=" flex flex-col text-zinc-400 text-xl gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-6 mb-3 ">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-information-fill mr-2 "></i>
          About cineFlix
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="ri-phone-fill mr-2"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
