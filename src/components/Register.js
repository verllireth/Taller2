import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    correo: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    let newErrors = {};

    if (name === 'cedula' && !/^\d+$/.test(value)) {
      newErrors[name] = 'Solo se permiten números en este campo.';
    } else if (name === 'correo' && !emailRegex.test(value)) {
      newErrors[name] = 'Correo inválido. Debe tener el formato example@correo.com.';
    } else if (name === 'password' && !passwordRegex.test(value)) {
      newErrors[name] = 'La contraseña debe contener al menos 8 caracteres, una mayúscula y un número.';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto lg:ml-48  mt-[-2rem]"> 
        <form className="bg-white p-8 rounded shadow-md max-w-sm"> 
        <div className="max-w-lg mx-auto lg:ml-5"> 
          <h1 className="text-3xl text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-8">
              Asignar Rutina
          </h1>
        </div>        
         <div className="mb-6"> {/* Aumentamos el espaciado vertical */}

            <label htmlFor="cedula" className="block text-gray-700 font-bold mb-2">
              Cédula
            </label>
            <input
              type="text"
              id="cedula"
              name="cedula"
              value={formData.cedula}
              onChange={handleInputChange}
              className="input-field w-full py-2 px-4 rounded border border-gray-300"
              placeholder="Número de cédula"
            />
            {errors.cedula && <p className="text-red-500 text-xs italic mt-1">{errors.cedula}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="input-field w-full py-2 px-4 rounded border border-gray-300"
              placeholder="Nombre completo"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="correo" className="block text-gray-700 font-bold mb-2">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              className="input-field w-full py-2 px-4 rounded border border-gray-300"
              placeholder="example@correo.com"
            />
            {errors.correo && <p className="text-red-500 text-xs italic mt-1">{errors.correo}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field w-full py-2 px-4 rounded border border-gray-300"
              placeholder="Contraseña"
            />
            {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>}
          </div>

          <Link to={isValid ? '/assign' : '#'}>
            <button
              type="submit"
              className={`bg-lime-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded ${
                !isValid ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isValid}
            >
              Registrarme
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

