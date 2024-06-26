import httpClient from "../api/httpClient";
import {
  findMoviesFailure,
  findMoviesStart,
  findMoviesSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./movieAction";

// xem
export const searchMoviesApi = async (key, dispatch) => {
  dispatch(findMoviesStart());
  try {
    const res = await httpClient.get(`/movie/find?key=${key}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(findMoviesSuccess(res.data));
  } catch (error) {
    dispatch(findMoviesFailure());
  }
};

// xem
export const getMoviesRandom = async (type, genre, dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await httpClient.get(
      `/list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(getMoviesSuccess(res.data));
    return res.data;
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};
