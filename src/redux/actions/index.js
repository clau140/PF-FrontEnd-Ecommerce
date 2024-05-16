import axios from 'axios';
import {  GET_TEMPLATE_ID } from './action-types';

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