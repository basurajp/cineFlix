import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DropDown from "./DropDown";
import instance from "../../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [Movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await instance.get(`movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
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
    if (Movies.length === 0) {
      getMovies();
    } else {
      setpage(1);
      setMovies([]);
      getMovies();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return Movies.length > 0 ? (
    <div className="max-w-screen-xl mx-auto shadow-lg ">
      <div className="w-full h-[10vh]  flex items-center justify-between  px-[7%] ">
        <h1 className="text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
          ></i>
          Movies
        </h1>

        <div className="flex gap-3">
          <DropDown
            title={"Category"}
            options={["popular", "now_playing", "top_rated", "upcoming"]}
            func={setcategory}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-center text-white">loading ...</h1>}
        dataLength={Movies.length}
        next={getMovies}
        hasMore={hasMore}
      >
        <Cards data={Movies} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
