import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemplates, createTemplate, updateTemplate, deleteTemplate } from '../../../redux/actions/adminTemplatesAction';

const AdminPage = () => {
  const dispatch = useDispatch();
  const templates = useSelector(state => state.templatesAdmin.templatesAdmin);

  const [newTemplate, setNewTemplate] = useState({
    name: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    dispatch(getAllTemplates());
  }, [dispatch]);

  const handleCreateTemplate = () => {
    dispatch(createTemplate(newTemplate))
      .then(createdTemplate => {
        setNewTemplate({
          name: '',
          description: '',
          price: 0,
        });
        console.log('Plantilla creada exitosamente:', createdTemplate);
      })
      .catch(error => {
        console.error('Error al crear plantilla:', error);
      });
  };

  const handleUpdateTemplate = (id) => {
    const updatedData = {
      name: 'Nuevo nombre',
      description: 'Nueva descripción',
      price: 0
    };
    dispatch(updateTemplate(id, updatedData));
  };

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

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Crear Nueva Plantilla</h2>
        <div className="flex flex-wrap">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 px-2 py-1 mr-2 mb-2"
            value={newTemplate.name}
            onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            className="border border-gray-300 px-2 py-1 mr-2 mb-2"
            value={newTemplate.description}
            onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Precio"
            className="border border-gray-300 px-2 py-1 mr-2 mb-2"
            value={newTemplate.price}
            onChange={(e) => setNewTemplate({ ...newTemplate, price: parseFloat(e.target.value) })}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
            onClick={handleCreateTemplate}
          >
            Crear
          </button>
        </div>
      </div>

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
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 mr-2 rounded"
                  onClick={() => handleUpdateTemplate(template.id)}
                >
                  Actualizar
                </button>
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
