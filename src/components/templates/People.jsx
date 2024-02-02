import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DropDown from "./DropDown";
import instance from "../../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [People, setPeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await instance.get(`person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPeople((prev) => [...prev, ...data.results]);
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
    if (People.length === 0) {
      getPeople();
    } else {
      setpage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return People.length > 0 ? (
    <div className="max-w-screen-xl mx-auto shadow-lg ">
      <div className="w-full h-[10vh]  flex items-center justify-between  px-[7%] ">
        <h1 className="text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
          ></i>
          People
        </h1>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-center text-white">loading ...</h1>}
        dataLength={People.length}
        next={getPeople}
        hasMore={hasMore}
      >
        <Cards data={People} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
