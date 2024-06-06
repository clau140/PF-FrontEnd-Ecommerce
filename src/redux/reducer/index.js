import {
  GET_TEMPLATE_ID,
  GET_TEMPLATE_BY_SEARCH,
  GET_TEMPLATES,
  ADD_FAV,
  REMOVE_FAV,
} from "../actions/action-types";

const initialState = {
  allTemplates: [],
  detailTemplate: [],
  templates: [],
  myFavorites: [],
  reviews: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES:
      return {
        ...state,
        templates: action.payload,
      };
    case GET_TEMPLATE_ID:
      return {
        ...state,
        detailTemplate: action.payload,
      };
    case GET_TEMPLATE_BY_SEARCH:
      return {
        ...state,
        
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      const favorites = [...state.myFavorites];
      const myFavs = favorites.filter((favorite) => {
        favorite.id != id;
      });
      return {
        ...state,
        myFavorites: myFavs,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
