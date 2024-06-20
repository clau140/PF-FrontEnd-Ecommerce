import { LOGIN, SIGNUP } from "../actions/action-types";

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialUserState = {
    sesion: token ? true : false,
    userInfo: user ? JSON.parse(user) : {},
    isAdmin: false
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                sesion: true,
                userInfo: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;