import React from "react";
import { TMDB_MOVIE_IMAGE } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = ({ data }) => {

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)) , url( 
            ${
              TMDB_MOVIE_IMAGE + data.backdrop_path ||
              data.poster_path ||
              data.profile_path
            }`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:'no-repeat'
      }}
      className="w-full lg:h-[60vh] h-[50vh] flex flex-col justify-end pb-[15%] pl-[10%] lg:px-[8%] lg:py-[6%] text-white items-start"
    >
      <h1 className="text-4xl font-bold w-[90%]    ">
        {data.original_name || data.name || data.title}
      </h1>
      <p className="w-3/4 lg:w-[60%] mt-3">
        {data.overview.slice(0, 100)} ...
        <Link className="text-blue-600">more</Link>
      </p>

      <p className="mt-2 mb-2 flex gap-2">
      <i className="text-yellow-500 ri-megaphone-fill "></i>{data.release_date || 'No Info'}
        
        <i className="text-yellow-500 ri-movie-2-fill "></i>{data.media_type.toUpperCase()}
        </p>
        <Link className="p-4 rounded-lg font-semibold  mt-3 bg-[#6556CD]">Watch Trailer </Link>
    </div>
  );
};

export default Header;
