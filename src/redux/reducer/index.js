import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import userReducer from "./userReducer";
import reviewsReducer from "./reviewsReducer";
import adminTemplatesReducer from "./adminTemplatesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user:userReducer,
  templates: templatesReducer,
  reviews: reviewsReducer,
  cart: cartReducer,
  templatesAdmin: adminTemplatesReducer,});

export default rootReducer;
