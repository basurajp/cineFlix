import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { asyncLoadMovies } from "../../store/actions/movieAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { removeMovie } from "../../store/reducers/movieSlice";
import { NO_IMAGE_URL, TMDB_MOVIE_IMAGE } from "../../utils/constant";
import Loading from "./Loading";

const MovieDetails = () => {
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadMovies(id));
  }, []);

  return info ? (
    <div
      className="w-screen h-screen px-[10%]  pt-5 "
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)) , url(
            ${
              TMDB_MOVIE_IMAGE + info.detail.backdrop_path ||
              info.detail.poster_path ||
              info.detail.profile_path
            }`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* part one is done  */}
      <nav className="flex w-full gap-10 text-2xl text-zinc-100 h-[10vh] info.details-center">
        <Link
          onClick={() => navigate(-1)}
          className="text-2xl mr-2 ri-arrow-left-line hover:text-[#6556CD] duration-100"
        ></Link>

        <a
          target="_blank"
          href={
            info.detail.homepage ||
            `https://www.imdb.com/title/${info.detail.imdb_id}/`
          }
        >
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.detail.imdb_id}/`}
        >
          IMDB
        </a>
      </nav>

      {/* part 2 poster and details  */}

      <div className="flex w-full">
        <img
          className="h-[33vh]  lg:h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={
            TMDB_MOVIE_IMAGE +
            (info.detail.profile_path ||
              info.detail.poster_path ||
              info.detail.backdrop_path ||
              NO_IMAGE_URL)
          }
          alt="image"
        />
      </div>

      {/* part3 avibl on plat form  */}

      <div className="lg:w-[80%]  w-full mt-6 flex flex-col gap-3  ">
        {info.watchProviders && info.watchProviders.flatrate && (
          <div className="flex items-center gap-5 font-semibold text-white ">
            <h1>Availbe on Platform </h1>

            {info.watchProviders &&
              info.watchProviders.flatrate &&
              info.watchProviders.flatrate.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md object-cover"
                  key={i}
                  src={TMDB_MOVIE_IMAGE + w.logo_path}
                  at="logopath"
                />
              ))}
          </div>
        )}
    

      {info.watchProviders && info.watchProviders.rent && (
        <div className="flex items-center gap-5 font-semibold text-white">
          <h1>Availbe on Rent </h1>

          {info.watchProviders &&
            info.watchProviders.rent &&
            info.watchProviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                key={i}
                src={TMDB_MOVIE_IMAGE + w.logo_path}
                at="logopath"
              />
            ))}
        </div>
      )}

      {info.watchProviders && info.watchProviders.buy && (
        <div className="flex items-center gap-5 font-semibold text-white">
          <h1>Availbe to buy </h1>

          {info.watchProviders &&
            info.watchProviders.buy &&
            info.watchProviders.buy.map((w, i) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                key={i}
                src={TMDB_MOVIE_IMAGE + w.logo_path}
                at="logopath"
              />
            ))}
        </div>
      )}
  </div>
      {/* part 3 end here  */}
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
