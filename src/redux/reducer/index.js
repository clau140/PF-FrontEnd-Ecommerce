import { combineReducers } from "redux";
import templatesReducer from "./templatesReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user:userReducer,
  templates: templatesReducer,
  cart: cartReducer
});

export default rootReducer;
