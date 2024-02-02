import React from "react";
import { Link } from "react-router-dom";
import { NO_IMAGE_URL, TMDB_MOVIE_IMAGE } from "../../utils/constant";
import Loading from "./Loading";

const Cards = ({ data, title }) => {
  console.log(data[0]);
  return data ? (
    <div className="flex flex-wrap w-full mt-[2%] ml-4 lg:ml-9 px-[5%] bg-[#1F1E24]">
      {data.map((item, index) => (
        <Link className="w-[20vh]   lg:w-[15%] mr-[5%] relative" key={index}>
          <img
            className="h-[33vh]  lg:h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={
              TMDB_MOVIE_IMAGE +
              (item.profile_path ||
                item.poster_path ||
                item.backdrop_path ||
                NO_IMAGE_URL)
            }
            alt="card_img"
          />
          <h1 className="my-3 text-2xl font-semibold text-zinc-200 ">
            {item.original_name || item.name || item.title}
          </h1>

          {item.vote_average && (
            <div className="text-white text-xl w-[5vh] h-[5vh] p-7 absolute rounded-full font-semibold flex justify-center items-center bg-yellow-600 -right-[6%] lg:-right-[15%]  bottom-[45%]">
              {(item.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Cards;
