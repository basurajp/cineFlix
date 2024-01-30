import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import instance from "../utils/axios";
import Header from "./templates/Header";

const Home = () => {
  document.title = "cineFlix | HomePage";
  const [wallpaper, setwallpaper] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await instance.get(`/trending/all/day`);

      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
        
      setwallpaper(randomData);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
  getHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <SideNav />

      <div className="lg:w-[80%] h-full  w-full ">
        <TopNav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <>Loading</>
  );
};

export default Home;
