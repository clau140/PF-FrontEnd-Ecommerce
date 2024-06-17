import { LOGIN, SIGNUP } from "../actions/action-types";

const token = localStorage.getItem('token');

const initialUserState = {
    sesion: token ? true : false,
    userInfo: {},
    isAdmin: false
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                sesion: true
            }
        default:
            return state;
    }
}

export default userReducer;