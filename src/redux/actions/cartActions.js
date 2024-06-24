import axios from "axios";
import { ADD_TO_CART,  DELETE_TO_CART, NOTFOUND_CART, VIEW_CART } from "./action-types";
import { toast } from "react-toastify";

const localURL = "http://localhost:3001/cart"
const URL = ""
let token = localStorage.getItem('token');



export function viewCart() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL || localURL}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(response);
            return dispatch({
                type: VIEW_CART,
                payload: response.data.data.inCart
            });
        } catch (error) {
            console.log(error);
            return dispatch({
                type: NOTFOUND_CART,
                payload: error.response.data.noCartFound
            });
        }
    }
}


export function addToCart(template_id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL || localURL}/addCart`, { template_id }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (data.status === 200) {
                return toast.warn(data.message)
            }
            if (data.status === 201) {
                toast.success(data.message)
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

        try {
            const { data } = await axios.delete(`${URL || localURL}/deleteCart`, {
                params: { template_id },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(data.data.inCart);
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

