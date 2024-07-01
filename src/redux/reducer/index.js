import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import userReducer from "./userReducer";
import reviewsReducer from "./reviewsReducer";
import adminTemplatesReducer from "./adminTemplatesReducer";

const rootReducer = combineReducers({
  user:userReducer,
  templates: templatesReducer,
  reviews: reviewsReducer,
  templatesAdmin: adminTemplatesReducer,});

export default rootReducer;
