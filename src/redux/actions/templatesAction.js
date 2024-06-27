import axios from 'axios';
import { GET_TEMPLATE_ID, GET_TEMPLATE_BY_SEARCH, ADD_FAV, REMOVE_FAV, GET_REVIEWS_TEMPLATE, GET_TECHNOLOGIES, GET_CATEGORIES, GET_FILTERED_TEMPLATES } from './action-types';

const localURL = "http://localhost:3001/templates"
const URL = ""

export function getTemplateById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL || localURL}/${id}`);
            console.log(data);
            return dispatch({
                type: GET_TEMPLATE_ID,
                payload: data
            });
        } catch (error) {
            return error.response
        }
    };
}

export const getFilteredTemplates = (selectedTechnologies, selectedCategories, sortBy, order, page, pageSize) => {
    return async (dispatch) => {
        const params = {
            page: page,
            pageSize: pageSize
        };
        if (selectedTechnologies && selectedTechnologies.length > 0) {
            params.technology = selectedTechnologies.join(',');
        }
        if (selectedCategories && selectedCategories.length > 0) {
            params.category = selectedCategories.join(',');
        }
        if (sortBy) {
            params.sortBy = sortBy;
        }
        if (order) {
            params.order = order.toUpperCase();
        }
        try {

            const { data } = await axios.get(`${URL || localURL}`, { params });
            return dispatch({
                type: GET_FILTERED_TEMPLATES,
                payload: {
                    templates: data.data,
                    totalPages: data.totalPages
                }
            });
        } catch (error) {
            return error.response
        }
    };
};


export const getTemplateBySearch = (payload) => {
    return async (dispatch) => {
        try {
            console.log("Payload recibido:", payload);

            // Realiza la búsqueda por tecnología
            let response = await axios.get(
                `${URL || localURL}/search/technology?technology=${payload}`
            );

            // Verifica si se encontraron templates por tecnología
            if (response.data.length > 0 && response.data[ 0 ].templates.length > 0) {
                return dispatch({
                    type: GET_TEMPLATE_BY_SEARCH,
                    payload: response.data[ 0 ].templates,
                });
            }

            // Si no se encontraron templates por tecnología, busca por categoría
            response = await axios.get(
                `${URL || localURL}/search/category?category=${payload}`
            );

            // Verifica si se encontraron templates por categoría
            if (response.data.length > 0 && response.data[ 0 ].templates.length > 0) {
                return dispatch({
                    type: GET_TEMPLATE_BY_SEARCH,
                    payload: response.data[ 0 ].templates,
                });
            }

            // Si no se encontraron templates por ninguna búsqueda
            console.log("No se encontraron templates por tecnología ni por categoría.");
            // Aquí podrías manejar la situación donde no se encontraron templates por ninguna búsqueda

        } catch (error) {
            return error.response
        }
    };
};


export const addFav = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL || localURL}/favorites`, payload)
            return dispatch({
                type: ADD_FAV,
                payload: response.data
            })
        } catch (error) {
            return error.response
        }
    }
};

export const removeFav = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${URL || localURL}/favorites`, payload)
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data
            })
        } catch (error) {
            return error.response
        }
    }
};

export const getTechnologies = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL || localURL}/technologies`)
            return dispatch({
                type: GET_TECHNOLOGIES,
                payload: response.data
            })
        } catch (error) {
            return error.response
        }
    }
};

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL || localURL}/categories`)
            return dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            })
        } catch (error) {
            return error.response
        }
    }
};


export const getReviewsTemplate = (id) => {

}
