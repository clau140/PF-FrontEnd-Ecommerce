import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemplates, deleteTemplate } from '../../redux/actions/adminTemplatesAction';


const AdminPage = () => {
  const dispatch = useDispatch();
  const templates = useSelector(state => state.templatesAdmin.templatesAdmin);

  useEffect(() => {
    dispatch(getAllTemplates());
  }, [dispatch]);


  const handleDeleteTemplate = (id) => {
    dispatch(deleteTemplate(id))
      .then(() => {
        console.log('Plantilla eliminada exitosamente');
        dispatch(getAllTemplates()); 
      })
      .catch(error => {
        console.error('Error al eliminar plantilla:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard de Administración de Plantillas</h1>
      <div>
      <button
          className="text-xl font-semibold mb-2 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
          onClick={() => dispatch(getAllTemplates())}
        >
          Lista de Plantillas
        </button>

        <div className="grid grid-cols-3 gap-4">
          {templates.map(template => (
            <div key={template.id} className="border border-gray-300 p-4">
              <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-2">{template.description}</p>
              <p className="text-gray-700">Precio: ${template.price}</p>
              <div className="flex mt-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                  onClick={() => handleDeleteTemplate(template.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
  );
};

export default AdminPage;
