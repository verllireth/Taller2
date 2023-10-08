import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-500">
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">GymGenius: Tu Guía Personalizada
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">"Just Do It"</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">¡Es hora de brillar y alcanzar tus objetivos fitness como nunca antes!"</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Link to="/singup">
                  <button className="bg-lime-600 hover:bg-slate-500 text-white text-lg font-semibold py-2 px-6 rounded-full transition duration-300">
                    Registrarse
                  </button>
                </Link>
                <div className="mt-4 sm:mt-0">
                  <Link to="/assign">
                    <button className="bg-gray-950 hover:bg-slate-500 text-white text-lg font-semibold py-2 px-6 rounded-full transition duration-300">
                      Entrenamientos
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Interesate por nosotros</h2>

            <Link to="/information">
              <button className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Bienvenidos a nuestra...  Leer más
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
