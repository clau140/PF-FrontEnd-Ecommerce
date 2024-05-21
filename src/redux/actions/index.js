import axios from 'axios';
import {  GET_TEMPLATE_ID, GET_TEMPLATE_BY_NAME } from './action-types';

export function getTemplateById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/template/${id}`);
            return dispatch({
                type: GET_TEMPLATE_ID,
                payload: data
            });
        } catch (error) {
            
            console.log(`error: ${error}`);
        }
    };
}

export function getTemplateByName(name) {
    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/template/?name=${name}`)
            return dispatch ({
                type: GET_TEMPLATE_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message);
        }
    }
}