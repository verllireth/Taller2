/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InputField = ({ label, name, type, placeholder, pattern, errorMessage, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      className="mt-1 block w-full max-w-lg border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100
       focus:bg-blue-100 focus:ring-0 text-center placeholder-center"
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      pattern={pattern} // Utiliza la expresión regular para permitir solo números
      value={value}
      onChange={onChange}
    />
    {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
  </div>
);

export const Register = () => {
  const [identification, setIdentification] = useState('');
  const [identificationError, setIdentificationError] = useState('');

  const handleIdentificationChange = (e) => {
    const value = e.target.value;
    setIdentification(value);

    // Validar que solo se ingresen números
    if (!/^\d+$/.test(value)) {
      setIdentificationError('Solo se permiten números en este campo.');
    } else {
      setIdentificationError('');
    }
  };

  return (
    <div className="bg-custom-bgColor bg-cover bg-center bg-fixed bg-no-repeat bg-opacity-70 flex items-center justify-center min-h-screen ml-[300px]">
      <div className="max-w-lg">
        <h1 className="text-3xl text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-8">
          Regístrate en GymGenius
        </h1>
        <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <InputField
            label="Nombre"
            name="name"
            type="text"
            placeholder="Full name"
          />
          <InputField
            label="Número de Cédula"
            name="identification"
            type="text"
            placeholder="Ingrese número de cédula"
            pattern="^\d+$" // Expresión regular para permitir solo números
            errorMessage={identificationError}
            value={identification}
            onChange={handleIdentificationChange}
          />
          <InputField
            label="Nombre de usuario"
            name="username"
            type="text"
            placeholder="..."
          />
          <InputField
            label="Correo"
            name="email"
            type="email"
            placeholder="example@.com"
          />
          <div className="mt-7">
            <InputField
              label="Contraseña"
              name="pass"
              type="password"
              placeholder="Fácil de recordar"
            />
          </div>
          <div className="mt-4 text-center">
            <Link to="/assign">
              <button
                className="bg-lime-600 hover:bg-slate-500 text-white text-lg font-semibold py-2 px-6 rounded-full transition duration-300"
              >
                Registrarme
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
