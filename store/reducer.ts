// 进行模块化合并
import { combineReducers } from "redux";
import user from "./user";
import app from "./app";

let reducer = combineReducers({
  user,
  app
});

export default reducer;
