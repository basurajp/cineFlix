import instance from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncLoadtvs = (id) => async (dispatch, getState) => {
  try {
    const detail = await instance.get(`/tv/${id}`);
    const externalId = await instance.get(`/tv/${id}/external_ids`);
    const recommendations = await instance.get(`/tv/${id}/recommendations`);
    const similar = await instance.get(`/tv/${id}/similar`);
    const videos = await instance.get(`/tv/${id}/videos`);
    const watchProviders = await instance.get(`/tv/${id}/watch/providers`);

    let theUltimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type == "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };
    dispatch(loadtv(theUltimateDetails));
  } catch (error) {
    console.log(error);
  }
};
