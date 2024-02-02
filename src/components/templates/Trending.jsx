import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import instance from "../../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);

  const gerTrending = async () => {
    try {
      const { data } = await instance.get(`/trending/${category}/${duration}`);

      settrending(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    gerTrending();
  }, [duration, category]);

  return trending.length > 0 ? (
    <div className=" h-screen px-[5%] overflow-y-auto max-w-screen-xl shadow-lg mx-auto ">
      <div className="w-full h-[10vh]  flex items-center justify-between ">
        <h1 className="text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
          ></i>
          Trending
        </h1>

        <div className="flex gap-3">
          <DropDown
            title={"Category"}
            options={["movie", "tv", "all"]}
            func={setcategory}
          />
          <DropDown
            title={"Duration"}
            options={["week", "day"]}
            func={setduration}
          />
        </div>
      </div>
      <Cards data={trending} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
