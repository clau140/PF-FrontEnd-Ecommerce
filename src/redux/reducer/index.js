<<<<<<< HEAD
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
};
=======
import { GET_TEMPLATE_ID, GET_TEMPLATE_BY_NAME, GET_TEMPLATES, GET_REVIEWS_TEMPLATE} from '../actions/action-types'
const initialState = {
    allTemplates: [],
    detailTemplate: [],
    templates: [],
    reviews: []
  };
>>>>>>> 14a5c5c1b53e6192c28104ee0ca6b2ec86654f5c

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

<<<<<<< HEAD
=======
        case GET_TEMPLATES:
          return {
            ...state,
            allTemplates: action.payload,
            templates: action.payload
          }
        case GET_TEMPLATE_ID: 
        return {
          ...state,
          detailTemplate: action.payload
        }
        case GET_TEMPLATE_BY_NAME:
          if (action.payload.error) {
            return {
              ...state,
              templates: [],
            } 
          } else {
            return {
              ...state,
            templates: action.payload
            }
          }
          case GET_REVIEWS_TEMPLATE:
            return {
                ...state,
                reviews: action.payload
            }
        default:
          return {
              ...state,
          };
       
    }
}
  
>>>>>>> 14a5c5c1b53e6192c28104ee0ca6b2ec86654f5c
export default rootReducer;
