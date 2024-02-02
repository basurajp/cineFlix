import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DropDown from "./DropDown";
import instance from "../../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [TvShows, setTvShows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getTvShows = async () => {
    try {
      const { data } = await instance.get(`tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        setTvShows((prev) => [...prev, ...data.results]);
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
    if (TvShows.length === 0) {
      getTvShows();
    } else {
      setpage(1);
      setTvShows([]);
      getTvShows();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return TvShows.length > 0 ? (
    <div className="max-w-screen-xl mx-auto shadow-lg ">
      <div className="w-full h-[10vh]  flex items-center justify-between  px-[7%] ">
        <h1 className="text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
          ></i>
          TvShows
        </h1>

        <div className="flex gap-3">
          <DropDown
            title={"Category"}
            options={["top_rated", "popular", "on_the_air", "airing_today"]}
            func={setcategory}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-center text-white">loading ...</h1>}
        dataLength={TvShows.length}
        next={getTvShows}
        hasMore={hasMore}
      >
        <Cards data={TvShows} title="tvshows" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
