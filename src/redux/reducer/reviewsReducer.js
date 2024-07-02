import { GET_REVIEWS_USER, GET_REVIEWS_TEMPLATE, POST_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../actions/action-types";

const initialReviewsState = {
    reviewsTemplate: [],
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
                reviewsTemplate: action.payload
            }

        }


        case POST_REVIEW: {
            return{
                ... state,
            }

        }

        case DELETE_REVIEW: {
            return {
                ...state,
                reviewsTemplate: state.reviewsTemplate.filter(review => review.id !== action.payload),
                reviewsUser: state.reviewsUser.filter(review => review.id !== action.payload)
            };
        }

        case UPDATE_REVIEW: {
            const updatedReview = action.payload;
            return {
                ...state,
                reviewsTemplate: state.reviewsTemplate.map(review => review.id === updatedReview.id ? updatedReview : review),
                reviewsUser: state.reviewsUser.map(review => review.id === updatedReview.id ? updatedReview : review)
            };
        }
     
        default:
            return {
                ...state,
              };
    }
}

export default reviewsReducer;