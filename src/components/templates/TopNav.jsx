import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../utils/axios";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await instance.get(`/search/multi?query=${query}`);

      setsearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => {
      searches && getSearches();
    }, 500);
  
    return () => clearTimeout(t);
    
  }, [query])
  


  return (
    <div className=" w-full h-[10vh] relative  text-zinc-400 flex justify-start items-center pl-[16%] lg:pl-[20%]">
      <i className="ri-search-line text-3xl"></i>

      <input
        className="w-[60%] p-5 text-xl outline-none border-none bg-transparent  text-white"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i onClick={() => setquery("")} className="ri-close-fill text-3xl "></i>
      )}

      {/* search fileld  */}

      <div className="lg:w-[50%] w-[60%] lg:max-h-[50vh] max-h-[35vh] rounded-lg bg-zinc-200 absolute top-[90%] overflow-y-auto ">
        {searches.map((s, i) => (
          <Link
            key={i}
            className=" hover:text-zinc-900 text-zinc-700 hover:bg-zinc-300 duration-300 font-semibold w-[100%] lg:p-6 p-5   flex items-center justify-start border-b-2 border-zinc-100 bg-zinc-200"
          >
            <img
              className="w-[10vh] h-[10vh] rounded-lg mr-5 object-cover shadow-lg"
              src={
                s.backdrop_path || s.poster_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.poster_path || s.profile_path
                    }`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU"
              }
              alt="bgmiang "
            />
            <span>{s.original_name || s.name || s.title} </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
