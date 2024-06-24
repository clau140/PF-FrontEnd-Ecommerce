import axios from "axios";
const localURL = "http://localhost:3001/payment"
const URL = ""
const token = localStorage.getItem('token');

export function checkoutSession() {
    return async (dispatch) =>{
        try {
            const { data } = await axios.post(`${URL || localURL}/checkout-session`, {},{

                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (data.status === 201) {
                localStorage.setItem("orderId", data.order)
                window.open(data.session_url, '_blank');
            }
            return dispatch({});
        } catch (error) {
            console.log(error);
        }
    }
}

export function checkoutSuccess() {
    return async (dispatch) =>{
        const order = localStorage.getItem("orderId")
        try {
            const { data } = await axios.post(`${URL || localURL}/checkout-success?order_id=${order}`, {},{

                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (data.status === 201) {
                window.open(data.session_url, '_blank');
            }
            return dispatch({});
        } catch (error) {
            console.log(error);
        }
    }
}

export function checkoutCancel() {
    return async (dispatch) =>{
        const order = localStorage.getItem("orderId")
        try {
            const { data } = await axios.post(`${URL || localURL}/checkout-cancel?order_id=${order}`, {},{

                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (data.status === 201) {
                window.open(data.session_url, '_blank');
            }
            return dispatch({});
        } catch (error) {
            console.log(error);
        }
    }
}