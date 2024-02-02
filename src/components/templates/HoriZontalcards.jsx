import React from "react";
import { Link } from "react-router-dom";
import { TMDB_MOVIE_IMAGE } from "../../utils/constant";
import DropDown from "./DropDown";

const HoriZontalcards = ({ data ,title}) => {

  return (
    <div className="w-full p-6 ">
     

      <div className="flex w-full pb-5 overflow-x-auto ">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[50%] lg:min-w-[15%] h-[45vh] lg:h-[55vh]  mr-2 bg-zinc-900 m-1 rounded-md  overflow-hidden   "
          >
            <img
              className="w-full  h-[60%]  object-cover  "
              src={
                TMDB_MOVIE_IMAGE + d.backdrop_path ||
                d.poster_path ||
                d.profile_path
              }
              alt="card img "
            />
            <div className="text-white p-3 lg:p-2 h-[45%] ">
              <h1
                className="text-xl font-bold lg:leading-5 lg:mb-2 "
              >
                {d.original_name || d.name || d.title}
              </h1>
              <p className="text-sm lg:text-[.75rem] leading-4">
                {d.overview.slice(0, 65)} ...
                <Link className="text-blue-600">more</Link>
              </p>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HoriZontalcards;
