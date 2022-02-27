import { combineReducers } from "redux";

import { authReducer } from "./reducer/authReducer";

const Reducers = combineReducers({
  authReducer: authReducer,
});

export default Reducers;
