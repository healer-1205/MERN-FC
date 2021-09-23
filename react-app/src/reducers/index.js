import { combineReducers } from "redux";
import { users } from "./user";
import authReducer from "./authReducers";

export default combineReducers({
  users,
  auth:authReducer,
});
