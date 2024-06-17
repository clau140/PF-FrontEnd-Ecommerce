import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user:userReducer,
  templates: templatesReducer
});

export default rootReducer;
