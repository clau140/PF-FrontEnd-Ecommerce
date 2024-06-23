import { ADD_TO_CART } from "../actions/action-types";

const initialCartState = {
    templatesInCart: []
}

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                templatesInCart: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;