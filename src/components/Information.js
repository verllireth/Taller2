import React from "react";

export const Information = () => {
  return (
    <div className="bg-blue-300 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Acerca de Nosotros</h1>
        <p className="text-gray-700">
        Bienvenidos a nuestra empresa GymGenius, en la cual estamos comprometidos a transformar vidas a través del fitness y el bienestar. Desde nuestro inicio, hemos sido más que un gimnasio; somos una comunidad dedicada a ayudarte a alcanzar tus objetivos de salud y forma física de la manera más divertida y motivadora posible.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-700">
        <p className="text-gray-700"> Lo que nos distingue:</p>

          <li>Profesionales Apasionados: Nuestro equipo de entrenadores altamente calificados está comprometido con tu éxito.</li>
          <li>Variedad de Opciones: Ofrecemos una amplia variedad de clases</li>
          <li>Resultados Tangibles: Nos enorgullecemos de ayudarte a lograr resultados reales.</li>
        </ul>
      </div>
    </div>
  );
}
