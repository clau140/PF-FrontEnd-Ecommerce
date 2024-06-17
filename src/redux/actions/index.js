import axios from 'axios';
import { GET_TEMPLATE_ID, GET_TEMPLATE_BY_SEARCH, GET_TEMPLATES, ADD_FAV, REMOVE_FAV, GET_REVIEWS_TEMPLATE, GET_TECHNOLOGIES, GET_CATEGORIES, GET_FILTERED_TEMPLATES } from './action-types';

export function getTemplateById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/templates/${id}`);
            return dispatch({
                type: GET_TEMPLATE_ID,
                payload: data
            });
        } catch (error) {

            console.log(`error: ${error}`);
        }
    };
}


// export const getTemplates = () => {
//     return async (dispatch) => {
//         try {
//             const response = await axios('http://localhost:3001/templates')
//             return dispatch({
//                 type: GET_TEMPLATES,
//                 payload: response.data
//             })
//         } catch (error) {
//             throw Error(error.message)
//         }
//     }
// };

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
            
            const {data} = await axios.get('http://localhost:3001/templates', { params });
            return dispatch({
                type: GET_FILTERED_TEMPLATES,
                payload: {
                    templates: data.data,
                    totalPages: data.totalPages
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    };
};


export const getTemplateBySearch = (payload) => {
    return async (dispatch) => {
      try {
        console.log("Payload recibido:", payload);
  
        // Realiza la búsqueda por tecnología
        let response = await axios.get(
          `http://localhost:3001/templates/search/technology?technology=${payload}`
        );
  
        // Verifica si se encontraron templates por tecnología
        if (response.data.length > 0 && response.data[0].templates.length > 0) {
          return dispatch({
            type: GET_TEMPLATE_BY_SEARCH,
            payload: response.data[0].templates,
          });
        }
  
        // Si no se encontraron templates por tecnología, busca por categoría
        response = await axios.get(
          `http://localhost:3001/templates/search/category?category=${payload}`
        );
  
        // Verifica si se encontraron templates por categoría
        if (response.data.length > 0 && response.data[0].templates.length > 0) {
          return dispatch({
            type: GET_TEMPLATE_BY_SEARCH,
            payload: response.data[0].templates,
          });
        }
  
        // Si no se encontraron templates por ninguna búsqueda
        console.log("No se encontraron templates por tecnología ni por categoría.");
        // Aquí podrías manejar la situación donde no se encontraron templates por ninguna búsqueda
  
      } catch (error) {
        console.error("Error en la búsqueda:", error);
      }
    };
  };
  

export const addFav = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/templates/favorites', payload)
            return dispatch({
                type: ADD_FAV,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const removeFav = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete('http://localhost:3001/templates/favorites', payload)
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const getTechnologies = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/templates/technologies')
            return dispatch({
                type: GET_TECHNOLOGIES,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/templates/categories')
            return dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};


export const getReviewsTemplate = (id) => {

}
