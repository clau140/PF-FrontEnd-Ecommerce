import {
  GET_TEMPLATE_ID,
  GET_TEMPLATE_BY_SEARCH,
  SEARCH_NOT_FOUND,
  GET_TEMPLATES,
  ADD_FAV,
  REMOVE_FAV,
  GET_TECHNOLOGIES,
  GET_CATEGORIES,
  GET_FILTERED_TEMPLATES,
} from "../actions/action-types";

const templatesState = {

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

const rootReducer = (state = templatesState, action) => {
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
          templates: action.payload,
        };
      case SEARCH_NOT_FOUND:
        return {
          ...state,
          templates: [],
          searchError: "No se encontraron coincidencias para su búsqueda.",
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

export default rootReducer;
