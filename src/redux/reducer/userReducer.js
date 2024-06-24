import { LOGIN, SIGNUP, USER_ID, ACTUAL_USER } from "../actions/action-types";

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialUserState = {
    sesion: token ? true : false,
    userInfo: user ? JSON.parse(user) : {},
    isAdmin: false,
    user: {},
    userDetailId: {}

}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                sesion: true,
                userInfo: action.payload
            }
        case USER_ID:
                return{
                ...state,
                userDetailId: action.payload
            }
        case ACTUAL_USER:
            return {
                ...state,
                user: action.payload
                }
        default:
            return state;
    }
}

export default userReducer;