import axios from 'axios';
import {  GET_TEMPLATE_ID, GET_TEMPLATE_BY_SEARCH, GET_TEMPLATES, ADD_FAV, REMOVE_FAV } from './action-types';

export function getTemplateById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/templates/${id}`);
            return dispatch({
                type: GET_TEMPLATE_ID,
                payload: data
            });
        } catch (error) {
            
            console.log(`error: ${error}`);
        }
    };
}


export const getTemplates = () => {
    return async (dispatch) => {
        try {
            const response = await axios('http://localhost:3001/templates')
            return dispatch ({
                type: GET_TEMPLATES,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};


export const getTemplateBySearch = (payload) => {
    return async (dispatch) => {
        try {
            console.log("Payload recibido:", payload);

        
            let response = await axios(`http://localhost:3001/templates/?technology=${payload}`);
            if (response.data && response.data.length > 0) {
                console.log("Respuesta de la API (technology):", response.data);
                return dispatch({
                    type: GET_TEMPLATE_BY_SEARCH,
                    payload: response.data
                });
            } 

        
            response = await axios(`http://localhost:3001/templates/?category=${payload}`);
            if (response.data && response.data.length > 0) {
                console.log("Respuesta de la API (category):", response.data);
                return dispatch({
                    type: GET_TEMPLATE_BY_SEARCH,
                    payload: response.data
                });
            } else {
            
                console.log("No hay ninguna coincidencia para su búsqueda.");
            }

        } catch (error) {
            throw Error(error.message)
        }
    };
};



export const addFav = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/templates/favorites', payload)
            return dispatch ({
                type: ADD_FAV,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const removeFav = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete('http://localhost:3001/templates/favorites', payload)
            return dispatch ({
                type: REMOVE_FAV,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};
