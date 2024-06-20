import axios from "axios"
import { LOGIN, SIGNUP } from "./action-types"
const localURL = "http://localhost:3001/user"
const URL = ""
export function login(email, password) {
    return async (dispatch) => {
        try {
            const { data, status } = await axios.post(`${URL || localURL}/login`, { email, password })
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.userInfo));
            dispatch({
                type: LOGIN,
                payload: data.userInfo
            })
            return { data, status }
        } catch (error) {
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

