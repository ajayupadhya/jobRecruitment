import {
  LOGIN,
  LOGOUT,
  ERROR,
  POSTED_DATA,
  POSTED_ONE_DATA,
  CHECK,
  LOGOUT_CLOSE,
} from "../constants/index";

const user = {
  isLoggedIn: false,
  error: "",
  user: {},
  postedData: {},
  postedOneData: {},
  logoutMessage: false,
};

export const authReducer = (state = user, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
      };

    case POSTED_DATA:
      return {
        ...state,
        postedData: action.payload,
      };
    case POSTED_ONE_DATA:
      return {
        ...state,
        postedOneData: action.payload,
      };

    case LOGOUT:
      return { ...state, isLoggedIn: action.payload, logoutMessage: true };

    case CHECK:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case LOGOUT_CLOSE:
      return {
        ...state,
        logoutMessage: action.payload,
      };
    default:
      return state;
  }
};
