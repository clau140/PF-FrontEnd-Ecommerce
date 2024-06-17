import {
    GET_TEMPLATE_ID,
    GET_TEMPLATE_BY_SEARCH,
    GET_TEMPLATES,
    ADD_FAV,
    REMOVE_FAV,
    GET_TECHNOLOGIES,
    GET_CATEGORIES,
    GET_FILTERED_TEMPLATES,
  } from "../actions/action-types";
const initialTemplatesState = {

    allTemplates: [],
    detailTemplate: [],
    templates: [],
    myFavorites: [],
    reviews: [],
    filters: {
      technologies: [],
      categories: []
    },
    totalPages: 1
};

const templatesReducer = (state = initialTemplatesState, action) => {
    switch (action.type) {
      case GET_TEMPLATES:
        return {
          ...state,
          templates: action.payload,
        };
      case GET_FILTERED_TEMPLATES:
        return {
          ...state,
          templates: action.payload.templates,
          totalPages: action.payload.totalPages
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
          myFavorites: [ ...state.myFavorites, action.payload ],
        };
      case GET_TECHNOLOGIES:
        return {
          ...state,
          filters: {...state.filters, technologies: action.payload},
        };
      case GET_CATEGORIES:
        return {
          ...state,
          filters: {...state.filters, categories: action.payload},
        };
      case REMOVE_FAV:
        const favorites = [ ...state.myFavorites ];
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
  
  export default templatesReducer;