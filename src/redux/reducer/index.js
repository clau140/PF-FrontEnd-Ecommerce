import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import userReducer from "./userReducer";
import reviewsReducer from "./reviewsReducer";

const rootReducer = combineReducers({
  user:userReducer,
  templates: templatesReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
