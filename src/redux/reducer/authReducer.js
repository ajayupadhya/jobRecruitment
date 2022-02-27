import {
  LOGIN,
  LOGOUT,
  ERROR,
  POSTED_DATA,
  POSTED_ONE_DATA,
} from "../constants/index";

const user = {
  isLoggedIn: false,
  error: "",
  user: {},
  postedData: {},
  postedOneData: {},
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
    default:
      return state;
  }
};
