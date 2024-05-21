import { GET_TEMPLATE_ID, GET_TEMPLATE_BY_NAME } from '../actions/action-types'
const initialState = {
    allTemplates: [],
    detailTemplate: [],
    templates: [],
  };

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
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
        default:
          return {
              ...state,
          };
       
    }
}
  
export default rootReducer;
