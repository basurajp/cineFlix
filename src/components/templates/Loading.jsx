import React from "react";
import loader from "../../../public/loader.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-black ">
      <img className="w-44" src={loader} alt="gif" />
    </div>
  );
};

export default Loading;
