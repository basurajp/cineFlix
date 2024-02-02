import React from "react";
import { Link } from "react-router-dom";
import { TMDB_MOVIE_IMAGE } from "../../utils/constant";
import Loading from "./Loading";

const Cards = ({ data, title }) => {
  return data ? (
    <div className="flex flex-wrap w-full mt-[2%] ml-4 lg:ml-9">
      {data.map((item, index) => (
        <Link className="w-[20vh]  lg:w-[20%] mr-[5%]" key={index}>
          <img
            className="h-[33vh]  lg:h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={
              TMDB_MOVIE_IMAGE + item.backdrop_path ||
              item.poster_path ||
              item.profile_path
            }
            alt="card_img"
          />
          <h1 className="my-3 text-2xl font-semibold text-zinc-200 ">
            {item.original_name || item.name || item.title}
          </h1>
        </Link>
      ))}
    </div>
  ): <Loading />
};

export default Cards;