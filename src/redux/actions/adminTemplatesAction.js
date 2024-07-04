import axios from 'axios';


export const createTemplate = (templateData) => {
    return async (dispatch) => {
      try {
        await axios.post("http://localhost:3001/admin/templates/create", templateData);
        
      } catch (error) {
        console.log(error.message);
      }
    };
};