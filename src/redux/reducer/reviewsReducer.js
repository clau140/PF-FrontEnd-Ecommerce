import { GET_REVIEWS_USER, GET_REVIEWS_TEMPLATE, POST_REVIEW } from "../actions/action-types";

const initialReviewsState = {
    reviews: [],
    reviewsUser: []
}

const reviewsReducer = (state = initialReviewsState, action) => {
    switch (action.type) {
        case GET_REVIEWS_USER: {
            return{
                ... state,
                reviewsUser: action.payload
            }
        }

        case GET_REVIEWS_TEMPLATE: {
            return{
                ... state,
                reviews: action.payload
            }

        }

        case POST_REVIEW: {
            return{
                ... state,
            }

        }

                
        default:
            return state;
    }
}

export default reviewsReducer;