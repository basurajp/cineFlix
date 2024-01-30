import React from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";

const Home = () => {
  document.title = "cineFlix | HomePage";
  return (
    <>
      <SideNav />

      <div className="lg:w-[80%] h-full  w-full ">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
