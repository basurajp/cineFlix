import { useNavigate } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const ytVideo = useSelector((state) => state[category].info.videos);
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen z-[100] bg-[rgba(0,0,0,.9)] ">
      <Link
        onClick={() => navigate(-1)}
        className=" mr-2 ri-close-fill hover:text-[#6556CD] duration-100 absolute text-5xl top-[5%] text-white right-[5%] "
      ></Link>

      <ReactPlayer url={`https://www.youtube.com/watch?v=${ytVideo.key}`} />
    </div>
  );
};

export default Trailer;
