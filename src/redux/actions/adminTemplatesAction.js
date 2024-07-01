import axios from 'axios';
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
} from './action-types';

const localURL = "http://localhost:3001/admin/templates";

export const getAllTemplates = () => async (dispatch) => {
    dispatch({ type: GET_ALL_TEMPLATES_REQUEST });
    try {
      const { data } = await axios.get(localURL);
      dispatch({
        type: GET_ALL_TEMPLATES_SUCCESS,
        payload: data
      });
      console.log('Plantillas cargadas exitosamente:', data); 
    } catch (error) {
      dispatch({
        type: GET_ALL_TEMPLATES_FAILURE,
        payload: error.response.data
      });
      console.error('Error al cargar las plantillas:', error); 
    }
  };
  

  export const deleteTemplate = (templateId) => async (dispatch) => {
    dispatch({ type: DELETE_TEMPLATE_REQUEST });
    try {
      const { data } = await axios.delete(`${localURL}/${templateId}`);
      dispatch({
        type: DELETE_TEMPLATE_SUCCESS,
        payload: data
      });
      console.log('Plantilla eliminada exitosamente');
    } catch (error) {
      dispatch({
        type: DELETE_TEMPLATE_FAILURE,
        payload: error.response.data
      });
      console.error('Error al eliminar la plantilla:', error);
    }
  };
  

export const createTemplate = (templateData) => async (dispatch) => {
    dispatch({ type: CREATE_TEMPLATE_REQUEST });
    try {
      const { data } = await axios.post(localURL, templateData);
      dispatch({
        type: CREATE_TEMPLATE_SUCCESS,
        payload: data 
      });
      return data; 
    } catch (error) {
      dispatch({
        type: CREATE_TEMPLATE_FAILURE,
        payload: error.response.data
      });
      throw error;
    }
  };
  

export const updateTemplate = (templateId, updatedTemplateData) => async (dispatch) => {
  dispatch({ type: UPDATE_TEMPLATE_REQUEST });
  try {
    const { data } = await axios.put(`${localURL}/${templateId}`, updatedTemplateData);
    dispatch({
      type: UPDATE_TEMPLATE_SUCCESS,
      payload: data
    });
    dispatch(getAllTemplates());
  } catch (error) {
    dispatch({
      type: UPDATE_TEMPLATE_FAILURE,
      payload: error.response.data
    });
  }
};
