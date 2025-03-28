import React from 'react';
import cup from '../assets/Cup.svg';
import medal from '../assets/Medal.svg';
import prize from '../assets/Prize.svg';
import sportsman from '../assets/Eldar.jpg';

function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-4 text-white">
      <div className="text-right">
        <h2 className="text-5xl font-bold mb-4 border-b-4 inline-block border-red-500">
          Обо мне
        </h2>
        <p className="text-3xl text-gray-300">
          Доверься моему опыту, и мы достигнем результата вместе!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="flex items-center gap-20 ">
          <div className=" h-[600px] w-[600px] rounded-full overflow-hidden border-2 border-white">
            <img src={sportsman} alt="Тренер" />
          </div>
          <p className="text-3xl w-1/2 bg-gray-800 bg-opacity-40 p-6 rounded-xl shadow-xl  border-2 border-white">
            Привет! Меня зовут Эльдар, и я твой персональный тренер по фитнесу и
            бодибилдингу. Я действующий спортсмен, сертифицированный
            персональный тренер и победитель множества престижных соревнований:
          </p>
        </div>

        <div className="flex items-center gap-8 justify-end -mt-12">
          <p className="text-3xl  border-r-4 border-red-500 pr-4">
            Чемпион Gran Prix NBC (юниоры и мужчины до 102 кг)
          </p>
          <img src={cup} alt="Кубок" className="w-32 h-32" />
        </div>

        <div className="flex items-center gap-8">
          <img src={medal} alt="Медаль" className="w-32 h-32" />
          <p className="text-3xl border-l-4 border-red-500 pl-4 text-right">
            Вице-чемпион России по бодибилдингу IFBB
          </p>
        </div>

        <div className="flex items-center gap-8 justify-end">
          <p className="text-3xl border-r-4 border-red-500 pr-4">
            Призёр многочисленных турниров
          </p>
          <img src={prize} alt="Приз" className="w-32 h-32" />
        </div>

        <div className="flex items-center gap-4 justify-center bg-gray-800 bg-opacity-40 p-6 rounded-xl shadow-xl border-2 border-white">
          <p className="text-3xl">
            Со мной ты точно не потеряешь мотивацию — вместе мы достигнем твоих
            целей и даже больше.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
