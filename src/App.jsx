import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/templates/Loading";
import Trending from "./components/templates/Trending";
import Popular from "./components/templates/Popular";
import Movies from "./components/templates/Movies";
import TvShows from "./components/templates/TvShows";
import People from "./components/templates/People";
import MovieDetails from "./components/templates/MovieDetails";
import TvDetails from "./components/templates/TvDetails";
import PersonDetails from "./components/templates/PersonDetails";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-[#1F1E24] lg:flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movies" element={<Movies />}/>
        <Route path="/movie/details/:id" element={<MovieDetails />} />

        <Route path="/tvshows" element={<TvShows />}></Route>
        <Route path="/tv/details/:id" element={<TvDetails />}/>

        <Route path="/people" element={<People />}/>
        <Route path="/people/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
