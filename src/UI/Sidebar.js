import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="md:w-2/6 xl:w-1/5 bg-gray-800 h-screen">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Gym App</p>
        <nav className="mt-10">
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            to="/singup"
          >
            Registrar

          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            to="/information"
          >
            Quiénes somos
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            to="/assign"
          >
            Asignar entrenamientos
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
