import axios from "axios";
import { ADD_TO_CART, DELETE_TO_CART, NOTFOUND_CART, VIEW_CART } from "./action-types";
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

            return dispatch({
                type: VIEW_CART,
                payload: response.data.data,

            });
        } catch (error) {
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
                    payload: data.data
                });
            }
            return dispatch({
                type: ADD_TO_CART,
                payload: data.data
            });
        } catch (error) {
            if (error.response.status === 401) {
                return toast.error("Debes iniciar sesión para añadir articulos a tu carrito");
            }
            toast.error("Lo siento, a ocurrido un error inesperado.");
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

            return dispatch({
                type: DELETE_TO_CART,
                payload: data.data
            });
        } catch (error) {
            return error.response
        }
    };
}