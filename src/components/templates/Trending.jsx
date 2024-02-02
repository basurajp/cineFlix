import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DropDown from "./DropDown";
import instance from "../../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await instance.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  // refresh handler function

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpage(1);
      settrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [duration, category]);

  console.log(trending.length);

  return trending.length > 0 ? (
    <div className="max-w-screen-xl mx-auto shadow-lg ">
      <div className="w-full h-[10vh]  flex items-center justify-between  px-[7%] ">
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

      <InfiniteScroll
        loader={<h1 className="text-center text-white">loading ...</h1>}
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
      >
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
