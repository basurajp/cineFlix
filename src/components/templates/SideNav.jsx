import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[60%] lg:w-[20%]    border-r-2 border-zinc-200 p-6 hidden lg:block  ">
      <h1 className="text-2xl font-bold text-white ">
        <i className="ri-tv-fill text-[#6556CD] mr-2  "></i>
        <span className="">cineFlix</span>
      </h1>
      <nav className="flex flex-col gap-3 text-xl text-zinc-400">
        <h1 className="mt-6 mb-3 text-xl font-semibold text-white ">
          New Feeds
        </h1>

        <Link
          to={"/trending"}
          className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200"
        >
          <i className="ri-fire-fill "></i>
          Trending
        </Link>
        <Link
          to={"/popular"}
          className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to={"/movies"}
          className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to={"/tvshows"}
          className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        {/* <Link to={'/people'} className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="mr-2 ri-group-fill"></i>
          People
        </Link> */}
      </nav>

      {/* <hr className="border-none h-[1px] bg-zinc-400 mt-2" />

      <nav className="flex flex-col gap-3 text-xl text-zinc-400">
        <h1 className="mt-6 mb-3 text-xl font-semibold text-white ">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="mr-2 ri-information-fill "></i>
          About cineFlix
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200">
          <i className="mr-2 ri-phone-fill"></i>
          Contact
        </Link>
      </nav> */}
    </div>
  );
};

export default SideNav;
