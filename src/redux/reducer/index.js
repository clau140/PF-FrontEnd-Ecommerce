import { GET_TEMPLATE_ID } from '../actions/action-types'
const initialState = {
    allTemplates: [],
    detailTemplate: [],
  };

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
      case GET_TEMPLATE_ID: 
        return {
          ...state,
          detailTemplate: action.payload
        }

        default:
          return {
              ...state,
          };
       
    }
}
  
export default rootReducer;
