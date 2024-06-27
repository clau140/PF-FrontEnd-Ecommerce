import axios from 'axios';
import { GET_REVIEWS_USER, GET_REVIEWS_TEMPLATE } from './action-types';

const localURL = "http://localhost:3001/reviews"
const URL = ""
const TOKEN = localStorage.getItem('token')

export const getReviewsUser = () => {
    return async (dispatch)=>{
        try {
            const response = await axios.get(`${URL || localURL}/`, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            })
        dispatch({
            type: GET_REVIEWS_USER,
            payload: response.data
        })
        } catch (error) {
                return error.response
    }

}}

export const getReviewsTemplate = (id)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`${URL || localURL}/${id}`)
            
            //get(`${URL || localURL}/templates?templateId=${id}`)
            
            console.log(response)
            dispatch({
                type: GET_REVIEWS_TEMPLATE,
                payload: response.data
            })
        } catch (error) {
            return error.response
        }
    }
}



export const createReviewTemplate = (obj) => {
    return async ()=>{
        
    try {
        const { data } = await axios.post(`${URL || localURL}`, obj, {
        
          /*  headers: {
                'Authorization': `Bearer ${TOKEN}`
            } */
        });
        console.log(data);
        return data;  
    } catch (error) {
        console.error('Error creating review:', error);
        
        throw error;  
    }
}
}

