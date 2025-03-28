// Services.jsx
import React from 'react';
import { services } from '../services/serviceData.js';

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-8 text-center border-b-4 inline-block border-red-500 ">
            Мои услуги
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, price, description }) => (
            <div
              key={id}
              className="flex flex-col border-2 border-white bg-gray-800 bg-opacity-40 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-semibold text-white mb-3">
                {title}
              </h3>
              <p className="text-white text-xl flex-grow">{description}</p>
              <div className="mt-6 text-2xl font-bold text-white">
                Стоимость: {price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
