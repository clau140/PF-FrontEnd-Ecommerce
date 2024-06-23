import axios from "axios";
import { ADD_TO_CART, DELETE_TO_CART } from "./action-types";

const localURL = "http://localhost:3001/cart"
const URL = ""
const token = localStorage.getItem('token');
export function addToCart(template_id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL || localURL}/addCart`, { template_id }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(data.data);
            if (data.data.inCart) {

                return dispatch({
                    type: ADD_TO_CART,
                    payload: data.data.inCart
                });
            }
            return dispatch({
                type: ADD_TO_CART,
                payload: data.data
            });
        } catch (error) {
            console.log(error);
            return error.response
        }
    };
}

export function deleteToCart(template_id) {
    return async (dispatch) => {
        console.log(token);
        try {
            const { data } = await axios.post(`${URL || localURL}/deleteCart`, { template_id }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(data);
            return dispatch({
                type: DELETE_TO_CART,
                payload: data.data.inCart
            });
        } catch (error) {
            console.log(error);
            return error.response
        }
    };
}