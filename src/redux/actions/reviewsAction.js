import axios from 'axios';
import { GET_REVIEWS_USER, GET_REVIEWS_TEMPLATE, DELETE_REVIEW, UPDATE_REVIEW } from './action-types';

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
            console.log(response)
        dispatch({
            type: GET_REVIEWS_USER,
            payload: response.data.reviews
        })
        } catch (error) {
                return error.response
    }

}}

export function getReviewsTemplate(id){
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
            console.log(error);
            return error.response
        }
    }
}



export const createReviewTemplate = (obj) => {
    return async ()=>{
        
    try {
        const { data } = await axios.post(`${URL || localURL}`, obj, {
        
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            } 
        });
        console.log(data);
        return data;  
    } catch (error) {
        console.error('Error creating review:', error);
        
        throw error;  
    }
}
}

export const deleteReview = (idReview) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${URL || localURL}/${idReview}`, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            });
            dispatch({
                type: DELETE_REVIEW,
                payload: idReview
            });
        } catch (error) {
            console.error('Error:', error);
            return error;
        }
    };
};

export const updateReview = (id, data) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${URL || localURL}/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            });
            dispatch({
                type: UPDATE_REVIEW,
                payload: response.data
            });
            console.log(response.data)
        } catch (error) {
            console.error('Error:', error);
            return error;
        }
    };
};

