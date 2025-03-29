import React from 'react';
import sportsman from '~/assets/Sportsman.png';

function Hero() {
  return (
    <section className="bg-cover bg-center h-full p-6 m-auto">
      <div className="flex items-center justify-between mt-28">
        <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold w-full lg:w-2/3 flex flex-col gap-2 sm:gap-8 ">
          <p className="text-left">Тренируйся.</p>
          <p className="text-red-500 m-auto">Преображайся.</p>
          <p className="text-right">Побеждай.</p>
        </h2>
        {/* Блок с изображением: скрыт на экранах меньше 1024px */}
        <div
          className="hidden lg:block pt-20 rounded-2xl
                        lg:w-[400px] lg:h-[400px]
                        xl:w-[500px] xl:h-[500px]
                        2xl:w-[600px] 2xl:h-[600px]"
        >
          <img
            src={sportsman}
            alt="Тренер"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
