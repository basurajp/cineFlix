import instance from "../../utils/axios";
import { loadpersonDetails } from "../reducers/personSlice";

const asyncLoadpersons =async (id) => {
  try {
    const detail = await instance.get(`/person/${id}`);
    const externalId = await instance.get(`/person/${id}/external_ids`);
    const combinedCredits = await instance.get(
      `/person/${id}/combined_credits`
    );
    const tvCredits = await instance.get(`/person/${id}/tv_credits`);
    const movie_credits = await instance.get(`/person/${id}/movie_credits`);

    let theUltimateDetails = {
      detail: detail.data,

      externalId: externalId.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movie_credits: movie_credits.data,
    };

    dispatch(loadpersonDetails(theUltimateDetails));
  } catch (error) {
    console.log(error);
  }
};
