import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DropDown from "./DropDown";
import instance from "../../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await instance.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
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
    if (popular.length === 0) {
      getPopular();
    } else {
      setpage(1);
      setpopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="max-w-screen-xl mx-auto shadow-lg ">
      <div className="w-full h-[10vh]  flex items-center justify-between  px-[7%] ">
        <h1 className="text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
          ></i>
          Popular
        </h1>

        <div className="flex gap-3">
          <DropDown
            title={"Category"}
            options={["movie", "tv"]}
            func={setcategory}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-center text-white">loading ...</h1>}
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
      >
        <Cards data={popular} title={category}  />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
