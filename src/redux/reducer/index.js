import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import userReducer from "./userReducer";
import reviewsReducer from "./reviewsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user:userReducer,
  templates: templatesReducer
});

export default rootReducer;
