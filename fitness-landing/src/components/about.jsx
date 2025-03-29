import React from 'react';
import cup from '../assets/Cup.svg';
import medal from '../assets/Medal.svg';
import prize from '../assets/Prize.svg';
import sportsman from '../assets/Eldar.jpg';

function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-4 text-white">
      <div className="text-right">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 border-b-4 inline-block border-red-500">
          Обо мне
        </h2>
        <p className="sm:text-3xl text-gray-300 text-lg mb-8">
          Доверься моему опыту, и мы достигнем результата вместе!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="flex items-center gap-20 sm:mt-20 flex-col md:flex-row ">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] rounded-full overflow-hidden border-2 border-white">
            <img
              src={sportsman}
              alt="Тренер"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg sm:w-1/2 bg-gray-800 bg-opacity-40 p-6 rounded-xl shadow-xl  border-2 border-white sm:text-xl md:text-2xl">
            Привет! Меня зовут Эльдар, и я твой персональный тренер по фитнесу и
            бодибилдингу. Я действующий спортсмен, сертифицированный
            персональный тренер и победитель множества престижных соревнований:
          </p>
        </div>

        <div className="flex items-center gap-8 justify-end md:-mt-12">
          <p className="sm:text-3xl  border-r-4 border-red-500 pr-4 text-lg">
            Чемпион Gran Prix NBC (юниоры и мужчины до 102 кг)
          </p>
          <img src={cup} alt="Кубок" className="w-24 h-24 sm:w-32 sm:h-32" />
        </div>

        <div className="flex items-center gap-8">
          <img src={medal} alt="Медаль" className="w-24 h-24 sm:w-32 sm:h-32" />
          <p className="sm:text-3xl border-l-4 border-red-500 pl-4 sm:text-right text-lg">
            Вице-чемпион России по бодибилдингу IFBB
          </p>
        </div>

        <div className="flex items-center gap-8 justify-end">
          <p className="sm:text-3xl border-r-4 border-red-500 pr-4 text-lg">
            Призёр многочисленных турниров
          </p>
          <img src={prize} alt="Приз" className="w-24 h-24 sm:w-32 sm:h-32" />
        </div>

        <div className="flex items-center gap-4 justify-center bg-gray-800 bg-opacity-40 p-6 rounded-xl shadow-xl border-2 border-white">
          <p className="text-lg sm:text-3xl">
            Со мной ты точно не потеряешь мотивацию — вместе мы достигнем твоих
            целей и даже больше.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
