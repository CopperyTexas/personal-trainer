import React from 'react';
import sportsman from '~/assets/Sportsman.png';

function Hero() {
  return (
    <section className="bg-cover bg-center h-full p-6 m-auto ">
      <div className=" flex items-center justify-between mt-28">
        <h2 className="text-white text-7xl font-bold w-2/3 flex flex-col gap-10">
          <p className="text-left">Тренируйся.</p>
          <p className="text-red-500 m-auto">Преображайся.</p>
          <p className="text-right">Побеждай.</p>
        </h2>
        <div className=" h-[600px] w-[600px] rounded-2xl pt-10">
          <img src={sportsman} alt="Тренер" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
