import axios from "axios";
import {
  ERROR,
  LOGIN,
  POSTED_DATA,
  POSTED_ONE_DATA,
  LOGOUT,
  CHECK,
  LOGOUT_CLOSE
} from "../constants";

export const userLogin = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      body
    );

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data));
    dispatch({ type: LOGIN, payload: data.data });
  } catch (error) {
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

    dispatch({ type: POSTED_DATA, payload: data });
  } catch (error) {
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

    dispatch({ type: POSTED_ONE_DATA, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  dispatch({ type: LOGOUT, payload: false });
};

export const checkLogin = () => async (dispatch) => {
  dispatch({ type: CHECK, payload: true });
};

export const closeLogout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_CLOSE, payload: false });
};
