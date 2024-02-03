import React from "react";
import notfound from "../../assets/notfound.gif";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-black ">
      <img className="w-44" src={notfound} alt="gif" />
    </div>
  );
};

export default Notfound;
