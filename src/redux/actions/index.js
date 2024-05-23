import axios from 'axios';
import {  GET_TEMPLATE_ID, GET_TEMPLATE_BY_NAME, GET_TEMPLATES } from './action-types';

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

export const getTemplateByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/templates/?name=${name}`)
            return dispatch ({
                type: GET_TEMPLATE_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message);
        }
    }
};

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