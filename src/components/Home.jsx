import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import instance from "../utils/axios";
import Header from "./templates/Header";
import HoriZontalcards from "./templates/HoriZontalcards";
import DropDown from "./templates/DropDown";
import Loading from "./templates/Loading";

const Home = () => {
  document.title = "cineFlix | HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [categeory, setcategeory] = useState("all");

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

  const gerTrending = async () => {
  

    try {
      const { data } = await instance.get(`/trending/${categeory}/day`);

      settrending(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    gerTrending();
    !wallpaper && getHeaderWallpaper();
  }, [categeory]);

  return wallpaper && trending ? (
    <>
      <SideNav />

      <div className="lg:w-[80%] h-full  w-full overflow-auto overflow-x-hidden ">
        <TopNav />
        <Header data={wallpaper} />

        <div className="flex items-center justify-between px-8 mt-4 ">
          <h1 className="text-2xl font-semibold text-zinc-400 ">Trending</h1>

          <DropDown
            title={"Filter"}
            options={["tv", "movie", "all"]}
            func={setcategeory}
          />
        </div>

        <HoriZontalcards data={trending} func={setcategeory} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
