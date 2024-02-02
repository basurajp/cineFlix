import instance from "../../utils/axios";
import { loadMovie } from "../reducers/movieSlice";

export const asyncLoadMovies = (id) => async (dispatch, getState) => {
  try {
    const detail = await instance.get(`/movie/${id}`);
    const externalId = await instance.get(`/movie/${id}/external_ids`);
    const recommendations = await instance.get(`/movie/${id}/recommendations`);
    const similar = await instance.get(`/movie/${id}/similar`);
    const videos = await instance.get(`/movie/${id}/videos`);
    const watchProviders = await instance.get(`/movie/${id}/watch/providers`);

    let theUltimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m)=>m.type=='Trailer'),
      watchProviders: watchProviders.data.results.IN
    };
   dispatch(loadMovie(theUltimateDetails))
  } catch (error) {
    console.log(error);
  }
};
