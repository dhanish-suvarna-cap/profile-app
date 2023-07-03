import { combineReducers } from "redux";
import userReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
