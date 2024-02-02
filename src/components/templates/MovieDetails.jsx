import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { asyncLoadMovies } from "../../store/actions/movieAction";
import { Link, useNavigate } from "react-router-dom";
import { removeMovie } from "../../store/reducers/movieSlice";
import { NO_IMAGE_URL, TMDB_MOVIE_IMAGE } from "../../utils/constant";
import Loading from "./Loading";
import HoriZontalcards from "./HoriZontalcards";

const MovieDetails = () => {
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncLoadMovies(id));
  }, [id]);

  return info ? (
    <div
      className="w-screen min-h-screen px-[3%]  pt-5 relative"
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
      <nav className="flex w-full gap-10 text-2xl text-zinc-100 h-[10vh] items-center">
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
      <div className="flex-col w-full lg:flex-row">
        <img
          className="h-[33vh] w-full  lg:h-[60vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={
            TMDB_MOVIE_IMAGE +
            (info.detail.profile_path ||
              info.detail.poster_path ||
              info.detail.backdrop_path ||
              NO_IMAGE_URL)
          }
          alt="image"
        />

        <div className="text-white content">
          <h1 className="mt-2 text-3xl font-black lg:text-5xl ">
            {info.detail.original_name || info.detail.name || info.detail.title}

            <small className="ml-2 text-[1em] font-semibold text-zinc-200 lg:text-2xl ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-2 mb-10 text-white">
            <span>
              {info.detail.vote_average && (
                <div className="text-white text-xl w-[2vh] h-[2vh] p-7  rounded-full font-semibold flex justify-center items-center bg-yellow-600 -right-[6%] lg:-right-[15%]  bottom-[45%]">
                  {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                </div>
              )}
            </span>

            <h1> User Score </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g, i) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>

          <Link
            to={`${pathname}/trailer`}
            className="py-5 bg-[#6556cd] rounded-lg px-10"
          >
            <i class="ri-play-fill mr-2"></i>Play Trailer{" "}
          </Link>

          <h1 className="mt-10 text-xl font-semibold">{info.detail.tagline}</h1>

          <h1 className="text-xl font-semibold ">Overview</h1>
          <p>{info.detail.overview}</p>
        </div>
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
          <div className="flex items-center gap-5 mb-8 font-semibold text-white">
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
      <hr />
      {/* part 3 end here  */}
      {/* part 4 start here recommendaion and smililart stuff  */}
      <h1 className="pl-6 mt-4 text-2xl font-semibold text-white">
        Recommendation & Similar{" "}
      </h1>
      <HoriZontalcards
        data={info.recommendations ? info.recommendations : info.similar}
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
