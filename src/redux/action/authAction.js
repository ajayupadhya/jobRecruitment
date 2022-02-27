import axios from "axios";
import { ERROR, LOGIN, POSTED_DATA, POSTED_ONE_DATA } from "../constants";

export const userLogin = (body, callback) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      body
    );
    console.log(data);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data));
    dispatch({ type: LOGIN, payload: data.data });
    callback();
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};

export const postedJobData = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recruiters/jobs${query}`,
      {
        headers: {
          "Content-Type": "Aplication/json",
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      }
    );

    dispatch({ type: POSTED_DATA, payload: data.data });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};

export const postedOneJobData = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recruiters/jobs${query}`,
      {
        headers: {
          "Content-Type": "Aplication/json",
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      }
    );

    dispatch({ type: POSTED_ONE_DATA, payload: data.data });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};
