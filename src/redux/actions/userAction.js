import axios from "axios"
import { LOGIN, SIGNUP } from "./action-types"
const localURL = "http://localhost:3001/user"

export function login(email, password) {
    return async (dispatch) => {
        try {
            const { data: { token } } = await axios.post(`${localURL}/login`, { email, password })
            localStorage.setItem('token', token);
            return dispatch({
                type: LOGIN,
                payload: token
            })
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }
}

export function signup(userForm) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${localURL}/register`, userForm);
            console.log(response);
            return
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }
}

