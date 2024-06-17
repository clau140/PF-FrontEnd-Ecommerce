import axios from "axios"
import { LOGIN, SIGNUP } from "./action-types"
const localURL = "http://localhost:3001/user"

export function login(email, password) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${localURL}/login`, { email, password })
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: LOGIN,
            })
            return response
        } catch (error) {
            console.log(error.response);
            return error.response
        }
    }
}

export function signup(userForm) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${localURL}/register`, userForm);
            console.log(response);
            return response
        } catch (error) {
            console.log(error);
            return error.response
        }
    }
}

