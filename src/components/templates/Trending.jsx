import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import DropDown from "./DropDown";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen px-[5%] ">
      <div className="w-full h-[10vh]  flex items-center justify-between ">
        <h1 className="text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
          ></i>
          Trending
        </h1>

        <div className="flex gap-3">
          <DropDown title={"Category"} options={["Movie", "tv", "all"]} />
          <DropDown title={"Durtion"} options={["week", "days"]} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
