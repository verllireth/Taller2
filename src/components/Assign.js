import React, { useState } from 'react';


const categories = ['Cardio', 'Fuerza', 'Flexibilidad', 'Equilibrio']; // Lista de categorías de rutina

export const Assign = () => {
const [additionalOptions, setAdditionalOptions] = useState([]);

  const [formData, setFormData] = useState({
    username: '',
    hours: '',
    category: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario o realizar otras acciones con los datos ingresados.
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto lg:ml-48  mt-[-3rem]"> 
        <form className="bg-white p-8 rounded shadow-md max-w-md w-full" onSubmit={handleSubmit}>
          <div className="max-w-lg mx-auto lg:ml-5"> 
            <h1 className="text-3xl text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-8">
              Asignar Rutina
            </h1>
        </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
               Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Nombre de usuario"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="hours" className="block text-gray-700 font-bold mb-2">
              Horas de Rutina
            </label>
            <input
              type="number"
              id="hours"
              name="hours"
              value={formData.hours}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Número de horas"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
              Categoría de Rutina
            </label>
        
            <select
                id="category"
                name="category"
                value={formData.category}
                onChange={(e) => {
                handleInputChange(e);
                const selectedCategory = e.target.value;
                // Lógica para obtener las opciones adicionales según la categoría seleccionada
                // En este ejemplo, se están hardcodeando las opciones, pero puedes obtenerlas de una API o cualquier otra fuente de datos.
                if (selectedCategory === 'Cardio') {
                    setAdditionalOptions(['Correr', 'Nadar', 'Ciclismo']);
                }
                else if (selectedCategory === 'Fuerza') {
                    setAdditionalOptions(['Pesas', 'Bodyweight', 'Máquinas de gimnasio']);
                } else if (selectedCategory === 'Flexibilidad') {
                    setAdditionalOptions(['Yoga', 'Estiramientos']);
                } else if (selectedCategory === 'Equilibrio') {
                    setAdditionalOptions(['Pilates', 'Entrenamiento funcional']);
                } else {
                    setAdditionalOptions([]); // Si no hay categoría seleccionada, las opciones adicionales se restablecen a un array vacío.
                }
                 }
                }
                className="input-field">
                <option value="" disabled>
                    Seleccione una categoría
                </option>
                    {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
                    ))}

            </select>

            {additionalOptions.length > 0 && (
                <div className="mb-4">
                    <label htmlFor="additionalOptions" className="block text-gray-700 font-bold mb-2">
                         Opciones adicionales
                    </label>
                    <select
                        id="additionalOptions"
                         name="additionalOptions"
                        value={formData.additionalOptions}
                        onChange={handleInputChange}
                        className="input-field" >

                        {additionalOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                </div>
              )}
          </div>
         

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Descripción
            </label>
            <textarea
             id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="input-field resize-y"
              placeholder="Descripción de la rutina"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
      </form>
    </div>
  </div>
  );
};

