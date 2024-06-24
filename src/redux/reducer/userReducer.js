import {
    LOGIN,
    LOGOUT,
    SIGNUP,
    FETCH_PROFILE_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
    UPDATE_PROFILE_FAILURE,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,
 , USER_ID, ACTUAL_USER } from "../actions/action-types";
  
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  
  const initialUserState = {
    loggedIn: !!token,
    userInfo: user ? JSON.parse(user) : {},
    isAdmin: false,
    user: {},
    userDetailId: {}
,
    profile: {
      user: {},
      loading: false,
      error: null
    }
  };
  
  const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          loggedIn: true,
          userInfo: action.payload
            }
        case USER_ID:
                return{
                ...state,
                userDetailId: action.payload
            }
        case ACTUAL_USER:
            return {
                ...state,
                user: action.payload
            };
      case LOGOUT:
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return {
          ...state,
          loggedIn: false,
          userInfo: {},
          isAdmin: false,
          profile: {
            user: {},
            loading: false,
            error: null
          }
        };
      case SIGNUP:
        return state;
      case FETCH_PROFILE_SUCCESS:
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          profile: {
            ...state.profile,
            user: action.payload,
            loading: false,
            error: null
          }
        };
      case FETCH_PROFILE_FAILURE:
      case UPDATE_PROFILE_FAILURE:
        return {
          ...state,
          profile: {
            ...state.profile,
            loading: false,
            error: action.payload
          }
        };
      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          changePasswordSuccessMessage: action.payload, 
          changePasswordErrorMessage: null 
        };
      case CHANGE_PASSWORD_FAILURE:
        return {
          ...state,
          changePasswordErrorMessage: action.payload, 
          changePasswordSuccessMessage: null 
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  