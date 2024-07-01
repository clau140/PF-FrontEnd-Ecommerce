import {
    GET_ALL_TEMPLATES_REQUEST,
    GET_ALL_TEMPLATES_SUCCESS,
    GET_ALL_TEMPLATES_FAILURE,
    DELETE_TEMPLATE_REQUEST,
    DELETE_TEMPLATE_SUCCESS,
    DELETE_TEMPLATE_FAILURE,
    CREATE_TEMPLATE_REQUEST,
    CREATE_TEMPLATE_SUCCESS,
    CREATE_TEMPLATE_FAILURE,
    UPDATE_TEMPLATE_REQUEST,
    UPDATE_TEMPLATE_SUCCESS,
    UPDATE_TEMPLATE_FAILURE
  } from '../actions/action-types';
  
  const initialState = {
    templatesAdmin: [],
    loading: false,
    error: null
  };
  
  const adminTemplatesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_TEMPLATES_REQUEST:
      case DELETE_TEMPLATE_REQUEST:
      case CREATE_TEMPLATE_REQUEST:
      case UPDATE_TEMPLATE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case GET_ALL_TEMPLATES_SUCCESS:
        return {
          ...state,
          loading: false,
          templatesAdmin: action.payload,
          error: null
        };
      case GET_ALL_TEMPLATES_FAILURE:
      case DELETE_TEMPLATE_FAILURE:
      case CREATE_TEMPLATE_FAILURE:
      case UPDATE_TEMPLATE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case DELETE_TEMPLATE_SUCCESS:
        const updatedTemplatesAfterDelete = state.templatesAdmin.filter(template => template.id !== action.payload.id);
        return {
          ...state,
          loading: false,
          templatesAdmin: updatedTemplatesAfterDelete,
          error: null
        };
      case CREATE_TEMPLATE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
        };
      case UPDATE_TEMPLATE_SUCCESS:
        const updatedTemplatesAfterUpdate = state.templatesAdmin.map(template =>
          template.id === action.payload.id ? action.payload : template
        );
        return {
          ...state,
          loading: false,
          templatesAdmin: updatedTemplatesAfterUpdate,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default adminTemplatesReducer;
  